import {
	getUser,
	setUser,
	deleteUser,
	deleteTokens,
} from "../../utils/storageHandler";
import { DELETE_USER, SET_USER } from "../../constants";

const initialState = {
	user: getUser(),
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			const { ...user } = action.payload;
			setUser(user);
			return { ...state, user };
		case DELETE_USER:
			deleteUser();
			deleteTokens();
			return { ...state, user: null };
		default:
			return { ...state };
	}
};
