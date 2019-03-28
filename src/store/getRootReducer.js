import { combineReducers } from 'redux';
import teaFilter from './reducers/teaFilter';
import notification from './reducers/notification';
import auth from './reducers/auth';

export default function getReducer() {
  return combineReducers({
    teaFilter,
    notification,
    auth,
  });
}
