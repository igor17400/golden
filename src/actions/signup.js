import firebase from "../firebase/config";

export const createUser = (email, password) => {
    return async function (dispatch) {
        const user = await firebase.signup(email, password);
        console.log(user);
        dispatch({ type: "CREATE_USER", payload: user });
    };
};
