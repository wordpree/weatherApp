import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import saga from "../saga";
//import logger from "redux-logger";

const storeConfig = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(sagaMiddleware))
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(saga);
  return store;
};

export default storeConfig;
