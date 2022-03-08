import { Switch } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import StackResi from './StackResi';
import StackUser from './StackUser';

const Tabs = createBottomTabNavigator();
const intial = () => {
	const [toggle, setToggle] = useState();
	const theme = useSelector(({ theme }) => theme.theme);
	const dispatch = useDispatch();
	const toggleHandler = () => {
		setToggle(!toggle);
		if (toggle) {
			dispatch({
				type: 'LIGHT',
			});
		} else {
			dispatch({
				type: 'DARK',
			});
		}
	};
	return (
		<Tabs.Navigator
			initialRouteName='Resi'
			screenOptions={{
				headerStyle: { backgroundColor: theme.secondary },
				headerTitleStyle: {
					color: theme.primary,
				},
				tabBarShowLabel: false,
				tabBarInactiveTintColor: theme.primary,
				tabBarActiveTintColor: theme.primary,
				tabBarHideOnKeyboard: true,
				tabBarActiveBackgroundColor: theme.secondary,
				tabBarInactiveBackgroundColor: theme.secondary,
			}}
		>
			<Tabs.Screen
				name='Resi'
				component={StackResi}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, focused }) => {
						return focused ? (
							<Ionicons name='document' size={24} color={color} />
						) : (
							<Ionicons name='document-outline' size={24} color={color} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name='stackUser'
				component={StackUser}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, focused }) => {
						return focused ? (
							<Ionicons name='person' size={24} color={color} />
						) : (
							<Ionicons name='person-outline' size={24} color={color} />
						);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};

export default intial;
