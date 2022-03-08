import { View, Text, Pressable, Switch } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import CardList from '../components/CardList';

const User = ({ navigation }) => {
	const strings = useSelector(({ languages }) => languages.languages);
	const theme = useSelector(({ theme }) => theme.theme);
	const toSetting = () => navigation.navigate('Setting');
	const toAbout = () => navigation.navigate('About');
	return (
		<View style={{ flex: 1, backgroundColor: theme.secondary }}>
			<View style={{ marginVertical: 10 }}>
				<CardList
					onPress={toSetting}
					title={strings.language}
					subtitle={`${strings.theme} ${strings.and} ${strings.language}`}
					icon='ios-settings'
				/>
				<CardList
					onPress={toAbout}
					title={strings.about}
					subtitle={`${strings.about} , ${strings.contact}`}
					icon='person'
				/>
			</View>
		</View>
	);
};

export default User;
