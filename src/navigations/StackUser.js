import { createStackNavigator } from '@react-navigation/stack';
import { Setting, About, User } from '../screens';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const StackUsers = () => {
	const strings = useSelector(({ languages }) => languages.languages);
	const theme = useSelector(({ theme }) => theme.theme);
	return (
		<Stack.Navigator
			initialRouteName='User'
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.secondary,
				},
				headerTintColor: theme.primary,
			}}
		>
			<Stack.Screen
				name='User'
				component={User}
				options={{
					headerTitle: strings.user,
				}}
			/>
			<Stack.Screen
				name='Setting'
				component={Setting}
				options={{
					headerTitle: strings.setting,
				}}
			/>
			<Stack.Screen
				name='About'
				component={About}
				options={{
					headerTitle: strings.about,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackUsers;
