import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertsReducer from "./alert/alert.reducers";
import currenciesReducer from "./currency/currency.reducers";
import userReducer from "./user/user.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  currencies: currenciesReducer,
  alerts: alertsReducer,
});

export default persistReducer(persistConfig, rootReducer);
