export interface Presupuesto {
	id: string;
	tipoViaje: string;
	rutaIda: string;
	rutaRegreso: string | null;
	fechaSalida: string;
	fechaRegreso: string | null;
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
