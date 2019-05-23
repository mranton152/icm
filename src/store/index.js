import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";

// import { runAccountSaga } from "./action/account";
// import { runAssetsSaga } from "./action/assets";
// import { runFleetsSaga } from "./action/fleets";
// import { runSettingsSaga } from "./action/settings";
// import { runWorkfroceSaga } from "./action/workforce";
// import { runHelpSaga } from "./action/help";
// import { runSitesSaga } from "./action/sites";
// import { runUsersSaga } from "./action/users";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// sagaMiddleware.run(runAccountSaga);
// sagaMiddleware.run(runAssetsSaga);
// sagaMiddleware.run(runFleetsSaga);
// sagaMiddleware.run(runSettingsSaga);
// sagaMiddleware.run(runWorkfroceSaga);
// sagaMiddleware.run(runHelpSaga);
// sagaMiddleware.run(runSitesSaga);
// sagaMiddleware.run(runUsersSaga);

window.store = store;

export default store;
