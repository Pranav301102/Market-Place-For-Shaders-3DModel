import axios from "axios";
import config from "../config";

export default async function uploadImage(file) {
	try {
		console.log("Upload Image", file);
		const formData = new FormData();
		formData.append("file", file);
		const axiosConfig = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const result = await axios.post(
			`${config.backendLocation}/file/upload`,
			formData,
			axiosConfig
		);
		console.log(result.data);

		return result.data.data.name;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
