import axios from "axios";
import { getTokens } from "../../storageHandler";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const getAuthInstance = () => {
	const tokens = getTokens();
	return axios.create({
		baseURL: serverUrl,
		headers: {
			Authorization: `Bearer ${tokens.accessToken}`,
		},
	});
};

export default getAuthInstance;
