import languages from '../static/languages';

const intialState = {
	languages: languages['id'],
	id: 'id',
};
const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'ID':
			// return { theme: theme.light };
			return { languages: languages['id'], id: 'id' };
		case 'EN':
			// return { theme: theme.dark };
			return { languages: languages['en'], id: 'en' };
		default:
			return state;
	}
};

export default reducer;
