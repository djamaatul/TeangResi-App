import { createStore, combineReducers } from 'redux';
import theme from '../reducers/theme';
import languages from '../reducers/languages';

const store = createStore(combineReducers({ theme, languages }));

export default store;
