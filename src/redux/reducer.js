import {combineReducers} from 'redux';
// import persistStore from './persistStore';
// import Auth from './stores/auth/reducer';
import App from './stores/app/reducer';

const RootReducer = combineReducers({
  // Auth,
  App,
  // persistStore,
});

export default RootReducer;
