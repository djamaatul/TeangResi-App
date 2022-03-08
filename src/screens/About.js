import { View, Text, Image } from 'react-native';
import dp from '../utils/dp';

const About = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={require('../../assets/logo.png')}
				style={{ width: dp(50), height: dp(60), resizeMode: 'contain' }}
			/>
			<Text style={{ marginTop: 30 }}>Copyright and Develop By :</Text>
			<Text style={{ color: 'orange', fontSize: dp(8) }}>djamaatul anbiya</Text>
			<Text style={{ marginTop: 30 }}>Contact :</Text>
			<Text style={{ color: 'skyblue', fontSize: dp(8) }}>djamaatul.anbiya@gmail.com</Text>
			<Text style={{ color: 'black', fontSize: dp(8) }}>+6289697823201</Text>
		</View>
	);
};

export default About;
