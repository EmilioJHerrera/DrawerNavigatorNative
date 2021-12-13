import {SIGN_UP_URL} from '../../assets/dataBase';

export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });
        const data = await response.json();
        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        });
        } catch (error) {
            console.log(error);
        }
    }
}