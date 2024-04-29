export interface Presupuesto {
	id: string;
	id_cliente: string;
	fecha: string;
	tipoViaje: string;
	id_rutaIda: string;
	id_rutaRegreso: string | null;
	fechaSalida: string;
	fechaRegreso: string | null;
	pasajeros: number;
	id_transporte: string;
	viaticos: number;
}

export interface Caseta {
	id: string;
	caseta: string;
	tarifa_2ejes: number;
	tarifa_3ejes: number;
}

export interface Cliente {
	id: string;
	nombre: string;
}

export interface Insumo {
	id: string;
	insumo: string;
	costo: number;
	unidades: string;
}

export interface Ruta {
	id: string;
	ruta: string;
	peajes: string[];
	kilometros: number;
	horas: number;
}

export interface Transporte {
	id: string;
	transporte: string;
	capacidad: number;
	combustible: string;
	ejes: number;
	rendimiento: number;
}

export interface Combustible {
	id: string;
	combustible: string;
	costo: number;
}

export interface ColumnProps {
	name: string;
	selector: (row: unknown) => string | number | JSX.Element | JSX.Element[] | null | undefined;
	sortable: boolean;
	width: string;
	center: boolean;
}

export interface BatchInfo {
	id: string;
	downloadables: number;
	name: string;
}

export interface BatchItems {
	id: string;
	img: string;
	title: string;
	buyLink: string;
	fileLinks: string[];
}

export interface Batch {
	info: BatchInfo;
	items: BatchItems[];
}
