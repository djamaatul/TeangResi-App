import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import vw from '../utils/vw';
const Result = ({ route: { params } }) => {
	const theme = useSelector(({ theme }) => theme.theme);
	const strings = useSelector(({ languages }) => languages.languages);
	const sytles = {
		teks: { color: theme.primary },
	};
	return (
		<View style={{ flex: 1, backgroundColor: theme.secondary }}>
			<View style={{ borderBottomColor: theme.primary, borderBottomWidth: 1, padding: 10 }}>
				<Text style={sytles.teks}>{`${strings.sender} : ${params.detail.shipper}`}</Text>
				<Text style={sytles.teks}>{`${strings.address} : ${params.detail.origin}`}</Text>
				<Text style={sytles.teks}>No Resi : {params.message.awb}</Text>
				<Text style={sytles.teks}>{`${strings.date} : ${params.message.date}`}</Text>
				<Text
					style={sytles.teks}
					style={sytles.teks}
				>{`${strings.destination} : ${params.detail.receiver}`}</Text>
				<Text style={sytles.teks}>{`${strings.address} : ${params.detail.destination}`}</Text>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={params.history}
					keyExtractor={(e, i) => i}
					renderItem={({ item: e, index: i }) => {
						return (
							<View
								key={i}
								style={{
									marginVertical: 20,
									marginHorizontal: 10,
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<View style={{ padding: 5, marginRight: 10 }}>
									<Ionicons
										color={theme.primary}
										name={i == params.history.length - 1 ? 'md-logo-dropbox' : 'arrow-down-circle'}
										size={24}
									/>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={sytles.teks}>{e.date}</Text>
									<Text style={sytles.teks}>{e.desc}</Text>
								</View>
							</View>
						);
					}}
				/>
			</View>
		</View>
	);
};
export default Result;
