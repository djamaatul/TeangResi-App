import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const CardList = ({ onPress, title, subtitle, icon, rightComponent }) => {
	const theme = useSelector(({ theme }) => theme.theme);
	return (
		<Pressable
			style={({ pressed }) => {
				return {
					backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.0)',
					flexDirection: 'row',
					alignItems: 'center',
					padding: 10,
					borderRadius: 10,
				};
			}}
			onPress={onPress}
		>
			<Ionicons name={icon} color={theme.text} size={24} />
			<View style={{ marginLeft: 20, flex: 1 }}>
				<Text style={{ color: theme.text, fontSize: 20 }}>{title}</Text>
				<Text style={{ color: theme.textSecondary }}>{subtitle}</Text>
			</View>
			<View style={{ marginLeft: 20, flex: 1 }}>{rightComponent}</View>
		</Pressable>
	);
};

export default CardList;
