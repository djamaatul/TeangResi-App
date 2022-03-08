import { Dimensions } from 'react-native';

export default function vh(persen) {
	return Dimensions.get('screen').width * (persen / 100);
}
