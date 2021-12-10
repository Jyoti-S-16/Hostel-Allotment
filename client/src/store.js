import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
const i = 1;
const store =
  i === 2
    ? createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
      );
export default store;
