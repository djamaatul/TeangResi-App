import { View, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import CardList from '../components/CardList';

import { useDispatch, useSelector } from 'react-redux';

import languages from '../static/languages';

const Setting = () => {
	const theme = useSelector(({ theme }) => theme.theme);
	const strings = useSelector(({ languages }) => languages.languages);
	const isLight = useSelector(({ theme }) => theme.isLight);
	const selectedLanguage = useSelector(({ languages }) => languages.id);
	const dispatch = useDispatch();
	const handleLight = () => {
		dispatch({ type: 'TOGGLE' });
	};
	const handleLanguage = (e) => {
		dispatch({ type: e.toUpperCase() });
	};
	return (
		<View style={{ flex: 1, backgroundColor: theme.secondary }}>
			<CardList
				title={strings.theme}
				subtitle={`${strings.theme} ${strings.light} or ${strings.dark} `}
				icon='ios-settings'
				rightComponent={<Switch value={isLight} onChange={handleLight} />}
			/>
			<CardList
				title={strings.language}
				subtitle={strings.language}
				icon='person'
				rightComponent={
					<Picker
						onValueChange={handleLanguage}
						selectedValue={selectedLanguage}
						dropdownIconColor={theme.primary}
						style={{ color: theme.primary }}
					>
						{Object.keys(languages).map((e) => {
							return (
								<Picker.Item
									key={languages[e]._id}
									value={languages[e]._id}
									label={languages[e]._name}
								/>
							);
						})}
					</Picker>
				}
			/>
		</View>
	);
};

export default Setting;
