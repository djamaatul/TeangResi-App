import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs';

const Index = ({ children }) => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default Index;
