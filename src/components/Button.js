import { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import dp from '../utils/dp';

const Button = ({ onPress, title, disable }) => {
	const [isPressed, setIsPressed] = useState(false);
	const theme = useSelector(({ theme }) => theme.theme);
	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			style={({ pressed }) => {
				return {
					backgroundColor: pressed ? theme.secondary : disable ? theme.secondary : theme.primary,
					borderColor: disable ? theme.primary : theme.secondary,
					borderWidth: 0.4,
					padding: dp(5),
					borderRadius: 20,
					flex: 1,
					marginHorizontal: 5,
					alignItems: 'center',
				};
			}}
		>
			<Text
				style={{
					color: isPressed ? theme.primary : disable ? theme.primary : theme.secondary,
					fontSize: dp(7),
				}}
			>
				{title}
			</Text>
		</Pressable>
	);
};

export default Button;
