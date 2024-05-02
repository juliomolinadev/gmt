import { useForm, useTypedDispatch, useTypedSelector } from "../../hooks";
import { Presupuesto } from "../interfaces/interfaces";
import { startsavePresupuesto } from "../../store/presupuestos/thunks/startSavePresupuesto";
import { setUiErrorMessage } from "../../store/ui";
import { setVistaPresupuesto } from "../../store/presupuestos";
import { messageAlert } from "../../helpers";

export const PresupuestoForm = () => {
	const { uiErrorMessage } = useTypedSelector((state) => state.ui);
	const { activePresupuesto } = useTypedSelector((state) => state.presupuestos);
	const rutas = useTypedSelector((state) => state.rutas);
	const transportes = useTypedSelector((state) => state.transportes);
	const clientes = useTypedSelector((state) => state.clientes);
	const casetas = useTypedSelector((state) => state.casetas);
	const insumos = useTypedSelector((state) => state.insumos);

	const dispatch = useTypedDispatch();

	const {
		id_cliente,
		tipoViaje,
		id_rutaIda,
		id_rutaRegreso,
		fechaSalida,
		fechaRegreso,
		formValues,
		handleInputChange,
		pasajeros,
		id_transporte,
	} = useForm<Presupuesto>(
		activePresupuesto
			? activePresupuesto
			: {
					id: "",
					id_cliente: "",
					fecha: "",
					tipoViaje: "",
					id_rutaIda: "",
					id_rutaRegreso: "",
					fechaSalida: "",
					fechaRegreso: "",
					pasajeros: 0,
					id_transporte: "",
					viaticos: 0,
			  }
	);

	const handleSavePresupuesto = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startsavePresupuesto(formValues));
		}
	};

	const handleCalcularPresupuesto = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			// casetas
			const casetasTotales: string[] = [];
			let costoPeajes = 0;

			const rutaIda = rutas.find((ruta) => ruta.id === formValues.id_rutaIda);
			rutaIda?.peajes?.forEach((caseta) => {
				casetasTotales.push(caseta);
			});

			const rutaRegreso = rutas.find((ruta) => ruta.id === formValues.id_rutaRegreso);
			rutaRegreso?.peajes?.forEach((caseta) => {
				casetasTotales.push(caseta);
			});

			const transporte = transportes.find((t) => t.id === formValues.id_transporte);

			casetasTotales?.forEach((caseta) => {
				const registroCaseta = casetas.find((c) => c.id === caseta);

				const costo =
					transporte?.ejes === 2 ? registroCaseta?.tarifa_2ejes : registroCaseta?.tarifa_3ejes;

				costoPeajes += costo ? costo : 0;
			});

			// viaticos
			const viaticos = insumos[0].costo;
			const salarios = fechaSalida === fechaRegreso ? 6 : 12;

			const costoViaticos = viaticos * salarios;

			//Combustible
			const kilometrajeTotal = (rutaIda?.kilometros ?? 0) + (rutaRegreso?.kilometros ?? 0);
			const costoLitro = transporte?.combustible === "01" ? 22.9 : 24.03;
			const costoCombustible = (kilometrajeTotal / 3) * costoLitro;

			const vistaPresupuesto = {
				cliente: clientes.find((cliente) => cliente.id === formValues.id_cliente)?.nombre,
				fecha: new Date().toISOString(),
				tipoViaje: formValues.tipoViaje,
				rutaIda: rutas.find((ruta) => ruta.id === formValues.id_rutaIda)?.ruta,
				rutaRegreso: rutas.find((ruta) => ruta.id === formValues.id_rutaRegreso)?.ruta,
				fechaSalida: formValues.fechaSalida,
				fechaRegreso: formValues.fechaRegreso,
				pasajeros: formValues.pasajeros,
				transporte: transportes.find((transporte) => transporte.id === formValues.id_transporte)
					?.transporte,
				intinerario: [],
				costoPeajes,
				costoViaticos,
				costoCombustible,
				costoTotal: costoPeajes + costoViaticos + costoCombustible,
			};

			dispatch(setVistaPresupuesto(vistaPresupuesto));

			messageAlert({
				title: "Presupuesto",
				text: `
				Cliente: ${vistaPresupuesto.cliente} \n
				Fecha: ${vistaPresupuesto.fecha} \n
				Tipo viaje: ${vistaPresupuesto.tipoViaje} \n
				Costo peajes: ${vistaPresupuesto.costoPeajes}\n
				Costo viaticos: ${vistaPresupuesto.costoViaticos}\n
				Costo combustible: ${vistaPresupuesto.costoCombustible}\n
				Costo total: ${vistaPresupuesto.costoTotal}\n
				
				`,
			});
		}
	};

	const isFormValid = () => {
		if (id_cliente === "") {
			dispatch(setUiErrorMessage("Seleccione el cliente."));
			return false;
		}

		if (tipoViaje === "") {
			dispatch(setUiErrorMessage("Seleccione el tipo de viaje."));
			return false;
		}

		if (id_rutaIda === "") {
			dispatch(setUiErrorMessage("Seleccione la ruta de ida."));
			return false;
		}

		if (id_rutaRegreso === "" && tipoViaje === "redondo") {
			dispatch(setUiErrorMessage("Seleccione la ruta de regreso."));
			return false;
		}

		if (fechaSalida === "") {
			dispatch(setUiErrorMessage("Seleccione la fecha de salida."));
			return false;
		}

		if (fechaRegreso === "" && tipoViaje === "redondo") {
			dispatch(setUiErrorMessage("Seleccione la fecha de regreso."));
			return false;
		}

		if (pasajeros === 0) {
			dispatch(setUiErrorMessage("Indique el número de pasajeros."));
			return false;
		}

		if (id_transporte === "") {
			dispatch(setUiErrorMessage("Seleccione el transporte."));
			return false;
		}

		dispatch(setUiErrorMessage(null));
		return true;
	};

	return (
		<form className="detailForm" onSubmit={handleCalcularPresupuesto}>
			{activePresupuesto?.id.length === 0 ? (
				<div className="detailForm__title">Nuevo presupuesto</div>
			) : (
				<div className="detailForm__title">Presupuesto: {activePresupuesto?.id}</div>
			)}

			<div className="form">
				<div className="form__inputGroup">
					<label htmlFor="id_cliente" className="form__label">
						Cliente:
					</label>

					<select
						id="id_cliente"
						name="id_cliente"
						// type="text"
						value={id_cliente}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Cliente
						</option>

						{clientes.map((cliente) => (
							<option key={cliente.id} value={cliente.id}>
								{cliente.nombre}
							</option>
						))}
					</select>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="tipoViaje" className="form__label">
						Tipo de Viaje:
					</label>

					<select
						id="tipoViaje"
						name="tipoViaje"
						// type="text"
						value={tipoViaje}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Tipo de Viaje
						</option>

						<option value={"sencillo"}>Viaje sencillo</option>
						<option value={"redondo"}>Viaje redondo</option>
					</select>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="id_rutaIda" className="form__label">
						Ruta de ida:
					</label>

					<select
						id="id_rutaIda"
						name="id_rutaIda"
						// type="text"
						value={id_rutaIda}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Ruta
						</option>

						{rutas.map((ruta) => (
							<option key={ruta.id} value={ruta.id}>
								{ruta.ruta}
							</option>
						))}
					</select>
				</div>

				{tipoViaje === "redondo" && (
					<div className="form__inputGroup">
						<label htmlFor="id_rutaRegreso" className="form__label">
							Ruta de regreso:
						</label>
						<select
							id="id_rutaRegreso"
							name="id_rutaRegreso"
							// type="text"
							value={id_rutaRegreso ? id_rutaRegreso : ""}
							onChange={handleInputChange}
							className="form__input form__input--select"
						>
							<option value="" disabled>
								Ruta
							</option>

							{rutas.map((ruta) => (
								<option key={ruta.id} value={ruta.id}>
									{ruta.ruta}
								</option>
							))}
						</select>
					</div>
				)}

				<div className="form__inputGroup">
					<label htmlFor="fechaSalida" className="form__label">
						Fecha y Hora de Partida:
					</label>
					<input
						id="fechaSalida"
						type="datetime-local"
						className="form__input"
						name="fechaSalida"
						value={fechaSalida}
						onChange={handleInputChange}
					/>
				</div>

				{tipoViaje === "redondo" && (
					<div className="form__inputGroup">
						<label htmlFor="fechaRegreso" className="form__label">
							Fecha y Hora de Regreso:
						</label>
						<input
							id="fechaRegreso"
							type="datetime-local"
							className="form__input"
							name="fechaRegreso"
							value={fechaRegreso ? fechaRegreso : ""}
							onChange={handleInputChange}
						/>
					</div>
				)}

				<div className="form__inputGroup">
					<label htmlFor="pasajeros" className="form__label">
						Número de pasajeros:
					</label>
					<input
						id="pasajeros"
						type="number"
						className="form__input"
						placeholder="Número de pasajeros"
						autoComplete="off"
						name="pasajeros"
						value={pasajeros}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="id_transporte" className="form__label">
						Transporte:
					</label>

					<select
						id="id_transporte"
						name="id_transporte"
						// type="text"
						value={id_transporte}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Transporte
						</option>

						{transportes.map((transporte) => (
							<option key={transporte.id} value={transporte.id}>
								{transporte.transporte}
							</option>
						))}
					</select>
				</div>

				{uiErrorMessage && (
					<div className="form__error animate__animated animate__fadeInDown">{uiErrorMessage}</div>
				)}

				<input type="submit" className="form__button" value="Calcular Presupuesto" name="submit" />

				<button className="form__button " onClick={handleSavePresupuesto}>
					Guardar
				</button>
			</div>
		</form>
	);
};
