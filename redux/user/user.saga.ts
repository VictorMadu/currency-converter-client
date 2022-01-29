import { takeLatest, call, put, all } from "redux-saga/effects";
import { changeUserSettings, loginUser } from "../../api";
import { PromiseReturnType } from "../../types";
import {
  changeSettingStart,
  changeSettingSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./user.actions";
import UserActionTypes from "./user.types";

function* loginAsyncSaga({ payload }: ReturnType<typeof loginStart>) {
  const data = (yield loginUser({ ...payload })) as PromiseReturnType<
    typeof loginUser
  >;
  if (!data)
    yield put(
      loginFailure("Error logging in. TODO: dispatch error msg from server")
    );
  else
    yield put(
      loginSuccess({
        app_theme: data.app_theme,
        notify: data.notify_opts,
        phone: data.phone,
        email: data.email,
        id: data.id,
        token: data.token,
      })
    );
}

function* changeSettingAsyncSaga({
  payload,
}: ReturnType<typeof changeSettingStart>) {
  const data = (yield changeUserSettings({
    token: payload.token,
    theme: payload.theme,
    notify_action: payload.notifyAction,
    notify_opts: payload.notifyOpt && [payload.notifyOpt],
  })) as PromiseReturnType<typeof changeUserSettings>;

  if (data?.user)
    yield put(
      changeSettingSuccess({
        app_theme: data.user.app_theme,
        notify: data.user.notify_opts,
      })
    );
}

function* loginInStartSaga() {
  yield takeLatest<any>(
    UserActionTypes.LOG_IN_START as ReturnType<typeof loginStart>["type"],
    loginAsyncSaga
  );
}

function* changeSettingStartSaga() {
  yield takeLatest<any>(
    UserActionTypes.CHANGE_SETTING_START as ReturnType<
      typeof changeSettingStart
    >["type"],
    changeSettingAsyncSaga
  );
}

export function* userSaga() {
  yield all([call(loginInStartSaga), call(changeSettingStartSaga)]);
}
