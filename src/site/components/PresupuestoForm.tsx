import { MdClose, MdSave, MdLogout, MdDelete, MdPhotoCamera, MdUpload } from "react-icons/md";

// import { useFormToUpper } from "../../../../hooks/UseFormToUpper";
// import { objectsDeepEqual } from "../../../../helpers/objectsDeepEqual";
// import { uiRemoveError, } from "../../../../actions/uiActions";
import { useForm, useTypedDispatch, useTypedSelector } from "../../hooks";
import { Presupuesto } from "../interfaces/interfaces";
import { startsavePresupuesto } from "../../store/presupuestos/thunks/startSavePresupuesto";

export const PresupuestoForm = () => {
	// const { uiErrorMessage, isLoading, isMobile } = useTypedSelector((state) => state.ui);
	const { activePresupuesto } = useTypedSelector((state) => state.presupuestos);

	const dispatch = useTypedDispatch();

	const {
		tipoViaje,
		rutaIda,
		rutaRegreso,
		fechaSalida,
		fechaRegreso,
		formValues,
		handleInputChange,
	} = useForm<Presupuesto>(
		activePresupuesto
			? activePresupuesto
			: {
					id: "",
					tipoViaje: "",
					rutaIda: "",
					rutaRegreso: null,
					fechaSalida: "",
					fechaRegreso: null,
			  }
	);
	// const thereAreChanges = !objectsDeepEqual(activePresupuesto, values);
	// console.log({ thereAreChanges, oferta, values });
	// const gmt = "T00:00:00";

	const handleSaveOferta = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log("Guardando presupuesto", { formValues });
			dispatch(startsavePresupuesto(formValues));
		}
	};

	// const handleDeleteOferta = (e) => {
	// 	e.preventDefault();
	// 	dispatch(startDeleteOferta(oferta, currentCycle));
	// };

	// const closeForm = (e) => {
	// 	e.preventDefault();

	// 	dispatch(closeOfertaForm());
	// 	dispatch(uiRemoveError());
	// };

	// const handleDeleteSingleFile = (oferta, file) => {
	// 	dispatch(startDeleteSingleOfertaFile(currentCycle, oferta, file));
	// };

	const isFormValid = () => {
		// if (fecha === "") {
		// 	dispatch(uiSetError("Indique la fecha."));
		// 	return false;
		// }

		// if (entidad.trim().length === 0) {
		// 	dispatch(uiSetError("Seleccione la entidad que oferta."));
		// 	return false;
		// }

		// if (usoAgricola + organismoOperadorMA + organismoOperador === 0) {
		// 	dispatch(uiSetError("Indique el volumen a ofertar."));
		// 	return false;
		// }

		// if (usoAgricola < 0) {
		// 	dispatch(uiSetError("El volumen para uso agrícola no puede ser negativo."));
		// 	return false;
		// }

		// if (organismoOperador < 0) {
		// 	dispatch(uiSetError("El volumen para el organismo operador no puede ser negativo."));
		// 	return false;
		// }

		// if (organismoOperadorMA < 0) {
		// 	dispatch(
		// 		uiSetError("El volumen para el organismo operador mesa arenosa no puede ser negativo.")
		// 	);
		// 	return false;
		// }

		// dispatch(uiRemoveError());
		return true;
	};

	return (
		<form className="detailForm">
			{activePresupuesto?.id.length === 0 ? (
				<div className="detailForm__title">Nuevo presupuesto</div>
			) : (
				<div className="detailForm__title">Presupuesto: {activePresupuesto?.id}</div>
			)}

			<div className="form">
				<div className="form__inputGroup">
					<label htmlFor="entidad" className="form__label">
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

						<option value={"uniDireccion"}>Una dirección</option>
						<option value={"redondo"}>Viaje redondo</option>
					</select>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="entidad" className="form__label">
						Ruta de ida:
					</label>
					<select
						id="rutaIda"
						name="rutaIda"
						// type="text"
						value={rutaIda}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Ruta
						</option>

						<option value={"1"}>Mexicali, Tecate Tijuana, Rosarito, Ensenada</option>
						<option value={"2"}>Mexicali, Tecate.</option>
						<option value={"3"}>Mexicali, Tecate, Ensenada.</option>
						<option value={"4"}>Mexicali, Tijuana.</option>
					</select>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="entidad" className="form__label">
						Ruta de regreso:
					</label>
					<select
						id="rutaRegreso"
						name="rutaRegreso"
						// type="text"
						value={rutaRegreso}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Ruta
						</option>

						<option value={"1"}>Ensenada, Rosarito, Tijuana, Tecate, Mexicali. </option>
						<option value={"2"}>Tecate, Mexicali.</option>
						<option value={"3"}>Ensenada, Tecate, Mexicali.</option>
						<option value={"4"}>Tijuana, Mexicali.</option>
					</select>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="fecha" className="form__label">
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

				<div className="form__inputGroup">
					<label htmlFor="fecha" className="form__label">
						Fecha y Hora de Regreso:
					</label>
					<input
						id="fechaRegreso"
						type="datetime-local"
						className="form__input"
						name="fechaRegreso"
						value={fechaRegreso}
						onChange={handleInputChange}
					/>
				</div>

				<button className="form__button detailForm__saveButton" onClick={handleSaveOferta}>
					<MdSave className="detailForm__icon" />
					Guardar
				</button>

				{/* <div className="form__inputGroup">
					<label htmlFor="entidad" className="form__label">
						Entidad:
					</label>
					<select
						id="entidad"
						name="entidad"
						type="text"
						value={entidad}
						onChange={handleInputChange}
						className="form__input form__input--select"
					>
						<option value="" disabled>
							Entidad
						</option>

						{entidades.map((entidad) => (
							<option key={entidad.id} value={entidad.id}>
								{entidad.id}
							</option>
						))}
					</select>
				</div> */}

				{/* <div className="form__inputGroup">
					<label htmlFor="usoAgricola" className="form__label">
						Uso Agrícola:
					</label>
					<input
						id="usoAgricola"
						type="number"
						className="form__input"
						placeholder="Volumen a ofertar"
						autoComplete="off"
						name="usoAgricola"
						value={usoAgricola}
						onChange={handleInputChange}
					/>
				</div> */}

				{/* <div className="form__inputGroup">
					<label htmlFor="organismoOperador" className="form__label">
						Organismo Operador:
					</label>
					<input
						id="organismoOperador"
						type="number"
						className="form__input"
						placeholder="Volumen a ofertar"
						autoComplete="off"
						name="organismoOperador"
						value={organismoOperador}
						onChange={handleInputChange}
					/>
				</div> */}

				{/* <div className="form__inputGroup">
					<label htmlFor="organismoOperadorMA" className="form__label">
						Organismo Operador Mesa Arenosa:
					</label>
					<input
						id="organismoOperadorMA"
						type="number"
						className="form__input"
						placeholder="Volumen a ofertar"
						autoComplete="off"
						name="organismoOperadorMA"
						value={organismoOperadorMA}
						onChange={handleInputChange}
					/>
				</div> */}

				{/* <div className="form__inputGroup">
					<label className="form__label">
						Total volumen ofertado:{" "}
						{Number(usoAgricola) + Number(organismoOperadorMA) + Number(organismoOperador)}
					</label>
				</div> */}

				{/* {edicion && (
					<div className="form__inputGroup">
						<label htmlFor="filesToUpload">
							<div className="form__filesInput">
								<MdUpload className="form__buttonIcon" /> Documentos
							</div>
						</label>
						<input
							id="filesToUpload"
							type="file"
							multiple="multiple"
							className="filesInput"
							name="filesToUpload"
							value={filesToUpload.files}
							onChange={handleInputChange}
						/>

						{isMobile && (
							<div>
								<label htmlFor="cameraInput">
									<div className="form__cameraInput">
										<MdPhotoCamera className="form__buttonIcon" />
									</div>
								</label>

								<input
									id="cameraInput"
									type="file"
									multiple="multiple"
									capture="camera"
									className="cameraInput"
									name="filesToUpload"
									value={filesToUpload.files}
									onChange={handleInputChange}
								/>
							</div>
						)}
					</div>
				)} */}

				{/* {oferta.filesInFirebase.map((file) => (
					<div className="fileLink" key={file.name}>
						<a
							href={file.url}
							rel="noopener noreferrer"
							target="_blank"
							className="fileLink__fileName"
						>
							{file.name}
						</a>

						{edicion && (
							<MdDelete
								className="fileLink__icon"
								onClick={() => handleDeleteSingleFile(oferta, file)}
							/>
						)}
					</div>
				))} */}

				{/* {msgError && <div className="form__error">{msgError}</div>} */}

				{/* <div className="detailForm__buttonsGrid">
					{(edicion && oferta.id.length) > 0 && (
						<button className="form__button detailForm__deleteButton" onClick={handleDeleteOferta}>
							<MdClose className="detailForm__icon" />
							Borrar
						</button>
					)}

					<button className="form__button detailForm__closeButton" onClick={closeForm}>
						<MdLogout className="detailForm__icon detailForm__icon--mirror" />
						Cerrar
					</button>

					{edicion && (thereAreChanges || loading) && (
						<button className="form__button detailForm__saveButton" onClick={handleSaveOferta}>
							<MdSave className="detailForm__icon" />
							Guardar {loading && <div className="form__spinner"></div>}
						</button>
					)}
				</div> */}
			</div>
		</form>
	);
};

// fecha
// entidad
// concepto
// referncia
// volumen - importe
// cuota
// comision
