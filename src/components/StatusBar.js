import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

const Statusbar = () => {
	const theme = useSelector(({ theme }) => theme.theme);
	return <StatusBar backgroundColor={theme.statusBar} />;
};

export default Statusbar;
