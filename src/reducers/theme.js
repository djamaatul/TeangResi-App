import theme from '../static/themes';

const intialState = {
	isLight: false,
	theme: theme['light'],
};
const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'LIGHT':
			// return { theme: theme.light };
			return { theme: theme['light'], isLight: true };
		case 'DARK':
			// return { theme: theme.dark };
			return { theme: theme['dark'], isLight: false };
		case 'TOGGLE':
			return { theme: !state.isLight ? theme['dark'] : theme['light'], isLight: !state.isLight };
		default:
			return state;
	}
};

export default reducer;
