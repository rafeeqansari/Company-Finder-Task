import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";

var loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));
}
