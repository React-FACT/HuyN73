import { call, put, takeEvery } from 'redux-saga/effects';

import userAPI from '../api/userAPI';
import { statusCode } from '../constants/api.constants';
import userActions from '../redux/actions/userAction';
import {
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
} from '../constants/redux.constants';

function* getUser() {
    const { errorCode, results } = yield call(userAPI.getUser);
    if (errorCode === statusCode.success) {
        yield put(userActions.getUserSuccessfully(results));
    }
}

function* createUser({ user }) {
    const { errorCode, results } = yield call(userAPI.createUser, user);
    if (errorCode === statusCode.success) {
        yield put(userActions.createUserSuccessfully(results));
    }
}

function* updateUser({ id, user }) {
    const { errorCode, results } = yield call(userAPI.updateUser, id, user);
    if (errorCode === statusCode.success) {
        yield put(userActions.updateUserSuccessfully(results));
    }
}

function* deleteUser({ id }) {
    yield call(userAPI.deleteUser, id);
    yield put(userActions.deleteUserSuccessfully(id));
}

export function* mySaga() {
    yield takeEvery(GET_USER, getUser);
    yield takeEvery(CREATE_USER, createUser);
    yield takeEvery(UPDATE_USER, updateUser);
    yield takeEvery(DELETE_USER, deleteUser);
}
