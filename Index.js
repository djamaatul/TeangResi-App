import { View } from 'react-native';
import Navigations from './src/navigations';
import { useSelector } from 'react-redux';

function Index() {
	const theme = useSelector(({ theme }) => theme);
	return (
		<View style={{ flex: 1, backgroundColor: theme.secondary }}>
			<Navigations />
		</View>
	);
}

export default Index;
