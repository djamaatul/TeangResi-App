import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import dp from '../utils/dp';
import Button from '../components/Button';

import API from '../config/api';
import dataKurir from '../static/kurir';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Resi = ({ navigation }) => {
	// const screenFocus = useIsFocused();
	const theme = useSelector(({ theme }) => theme.theme);
	const strings = useSelector(({ languages }) => languages.languages);

	const [kurir, setKurir] = useState('');
	const [resi, setResi] = useState('sicepat');

	const checkResi = async () => {
		try {
			const { data } = await API.get(
				`track?api_key=7335205a8b689309da8aa1c3a38fad7aa36b268a81dbe79f22d38130d44ef211&courier=${
					kurir ? kurir : 'sicepat'
				}&awb=${resi}`
			);
			navigation.navigate('Result', {
				detail: data.data.detail,
				history: data.data.history,
				message: data.data.summary,
				status: data.data.status,
			});
		} catch (error) {
			ToastAndroid.show(error.message, ToastAndroid.SHORT);
			console.log(error.message);
		}
	};
	return (
		<View style={{ flex: 1, paddingTop: 10, backgroundColor: theme.secondary }}>
			<SafeAreaView>
				<View
					style={{
						backgroundColor: theme.primary,
						marginHorizontal: dp(5),
						marginVertical: dp(2),
						paddingVertical: dp(4),
						paddingHorizontal: dp(8),
						borderRadius: 20,
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Ionicons name='search' size={dp(8)} color={theme.secondary} />
					<TextInput
						selectionColor='red'
						style={{ fontSize: dp(7), color: theme.secondary, marginLeft: dp(5), flex: 1 }}
						placeholderTextColor={theme.secondary}
						placeholder='Resi'
						onChangeText={(value) => setResi(value)}
					/>
				</View>
				<View
					style={{
						backgroundColor: theme.primary,
						borderRadius: 20,
						paddingHorizontal: dp(5),
						marginHorizontal: dp(5),
						marginVertical: dp(2),
					}}
				>
					<Picker
						selectedValue={kurir}
						onValueChange={(item) => {
							setKurir(item);
						}}
						style={{
							color: theme.secondary,
						}}
						dropdownIconColor={theme.secondary}
					>
						{dataKurir.map((e) => {
							return <Picker.Item key={e} label={e} value={e.toLowerCase()} />;
						})}
					</Picker>
				</View>
				<View style={{ flexDirection: 'row', paddingHorizontal: dp(5), paddingVertical: dp(2) }}>
					<Button title={strings.check} onPress={checkResi} />
					<Button title={strings.save} disable={true} />
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Resi;
