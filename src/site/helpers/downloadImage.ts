import { getBlobFromStorage } from "../../firebase/storage";
import { getEnvironments } from "../../helpers";

interface Props {
	batch: string;
	file: string;
}

export const downloadImage = async ({ batch, file }: Props) => {
	try {
		const { VITE_STORAGEBUCKET } = getEnvironments();
		const blob = await getBlobFromStorage(`gs://${VITE_STORAGEBUCKET}/${batch}/${file}`);

		if (!blob) return false;

		const fileUrl = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = fileUrl;
		a.download = file;
		a.click();

		return true;
	} catch (error) {
		console.log(error);

		return false;
	}
};
