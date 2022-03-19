import {
    GET_USER_SUCCESSFULLY,
    CREATE_USER_SUCCESSFULLY,
    UPDATE_USER_SUCCESSFULLY,
    DELETE_USER_SUCCESSFULLY,
} from '../../constants/redux.constants';

const initialState = [];

const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_SUCCESSFULLY:
            return { ...state, data: payload };
        case CREATE_USER_SUCCESSFULLY:
            return { data: [...state.data, payload] };
        case UPDATE_USER_SUCCESSFULLY:
            return {
                data: state.data.map((user) =>
                    user.id === payload.id ? payload : user
                ),
            };
        case DELETE_USER_SUCCESSFULLY:
            return { data: state.data.filter((user) => user.id !== payload) };
        default:
            break;
    }
    return state;
};

export default user;
