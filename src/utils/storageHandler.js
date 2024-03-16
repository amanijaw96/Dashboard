import cookie from "js-cookie";

const USER_KEY = "dashboard.user";
const ACCESS_TOKEN_KEY = "dashboard.accessToken";

export const getUser = () => {
	try {
		const data = cookie.get(USER_KEY);
		if (data) {
			return JSON.parse(data);
		}
	} catch (err) {
		return null;
	}
	return null;
};

export const setUser = (user) => {
	cookie.set(USER_KEY, JSON.stringify(user));
};

export const deleteUser = () => {
	cookie.remove(USER_KEY);
};

export const setTokens = (tokens) => {
	cookie.set(ACCESS_TOKEN_KEY, tokens.access_token);
};

export const getTokens = () => {
	const parsedTokens = {};
	try {
		const accessToken = cookie.get(ACCESS_TOKEN_KEY);
		if (accessToken) {
			parsedTokens.accessToken = accessToken;
		}
	} catch (err) {
	} finally {
		return parsedTokens;
	}
};

export const deleteTokens = () => {
	cookie.remove(ACCESS_TOKEN_KEY);
};
