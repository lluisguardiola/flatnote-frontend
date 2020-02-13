import { combineReducers } from 'redux';
import auth from './auth';
import notes from './notes';
import tags from './tags';


export default combineReducers({
	auth,
	notes,
	tags
});
