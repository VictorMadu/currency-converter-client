import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currenciesReducer from "./currencies/currencies.reducers";
import userReducer from "./user/user.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  currencies: currenciesReducer,
});

export default persistReducer(persistConfig, rootReducer);
