import { combineReducers } from 'redux';
import users from './users';
import notes from './notes';
import tags from './tags';


export default combineReducers({
	users,
	notes,
	tags
});
