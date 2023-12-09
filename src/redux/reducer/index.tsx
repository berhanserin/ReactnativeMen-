import {combineReducers} from 'redux';

import {reducer as AppReducer} from './AppRedux';

export default combineReducers({
  app: AppReducer,
});

const rootReducer = combineReducers({
  app: AppReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
