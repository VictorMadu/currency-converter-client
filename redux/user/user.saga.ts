import { takeLatest, call, put, all } from "redux-saga/effects";
import { loginUser } from "../../api";
import { PromiseReturnType } from "../../types";
import { loginFailure, loginStart, loginSuccess } from "./user.actions";
import UserActionTypes from "./user.types";

// function* loginAsyncSaga({ payload }: ReturnType<typeof loginStart>) {
//   const data = (yield loginUser(
//     payload.email,
//     payload.pwd
//   )) as PromiseReturnType<typeof loginUser>;
//   if (!data)
//     yield put(
//       loginFailure("Error logging in. TODO: dispatch error msg from server")
//     );
//   else yield put(loginSuccess(data));
// }

// function* loginInStartSaga() {
//   yield takeLatest<any>(
//     UserActionTypes.LOG_IN_START as ReturnType<typeof loginStart>["type"],
//     loginAsyncSaga
//   );
// }

export function* userSaga() {
  yield all([]);
}
