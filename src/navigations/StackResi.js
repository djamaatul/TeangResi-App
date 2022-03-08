import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Resi, Result } from '../screens';

const Stack = createStackNavigator();

const StackResi = () => {
	const theme = useSelector(({ theme }) => theme.theme);
	return (
		<Stack.Navigator initialRouteName='ResiStack'>
			<Stack.Screen
				name='ResiStak'
				component={Resi}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Result'
				component={Result}
				options={{
					headerStyle: {
						backgroundColor: theme.secondary,
					},
					headerTintColor: theme.primary,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackResi;
