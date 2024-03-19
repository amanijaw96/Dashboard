import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const getGuestInstance = () => {
	return axios.create({
		baseURL: serverUrl,
	});
};

export default getGuestInstance;
