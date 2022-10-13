import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as StudentReducer } from "./Student/student.reducer";
import { reducer as AuthReducer } from "./Auth/auth.reducer";
import { reducer as TestReducer } from "./Test/test.reducer";

const rootReducer = combineReducers({
  StudentReducer,
  AuthReducer,
  TestReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
