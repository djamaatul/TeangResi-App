import { PixelRatio } from 'react-native';

export default (pixel) => {
	return PixelRatio.getPixelSizeForLayoutSize(pixel);
};
