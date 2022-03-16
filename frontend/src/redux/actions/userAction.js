import {
    GET_USER,
    GET_USER_SUCCESSFULLY,
    CREATE_USER,
    CREATE_USER_SUCCESSFULLY,
    UPDATE_USER,
    UPDATE_USER_SUCCESSFULLY,
    DELETE_USER,
    DELETE_USER_SUCCESSFULLY,
} from '../../constants/redux.constants';

const userActions = {
    getUser() {
        return {
            type: GET_USER,
        };
    },

    createUser(user) {
        return {
            type: CREATE_USER,
            user,
        };
    },

    updateUsers(id, user) {
        return {
            type: UPDATE_USER,
            id,
            user,
        };
    },

    deleteUser(id) {
        return {
            type: DELETE_USER,
            id,
        };
    },

    getUserSuccessfully(payload) {
        return {
            type: GET_USER_SUCCESSFULLY,
            payload,
        };
    },

    createUserSuccessfully(payload) {
        return {
            type: CREATE_USER_SUCCESSFULLY,
            payload,
        };
    },

    updateUserSuccessfully(payload) {
        return {
            type: UPDATE_USER_SUCCESSFULLY,
            payload,
        };
    },

    deleteUserSuccessfully(payload) {
        return {
            type: DELETE_USER_SUCCESSFULLY,
            payload,
        };
    },
};

export default userActions;
