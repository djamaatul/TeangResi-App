import { View, Text, Pressable } from 'react-native';
import React from 'react';

const ResiCard = () => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => {
				return {
					backgroundColor: theme.primary,
					padding: dp(5),
					borderRadius: 20,
					flex: 1,
					marginHorizontal: 5,
				};
			}}
		>
			Text
		</Pressable>
	);
};

export default ResiCard;
