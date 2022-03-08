import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigations';
import { Provider } from 'react-redux';
import store from './src/stores';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Statusbar from './src/components/StatusBar';
import Index from './Index';

export default function App() {
	return (
		<View style={styles.container}>
			<SafeAreaProvider>
				<Provider store={store}>
					<Statusbar />
					<Index />
				</Provider>
			</SafeAreaProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
