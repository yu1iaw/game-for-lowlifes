import {StyleSheet, View, Text, Dimensions} from 'react-native'
function Player({data, style}) {
    return (
		<View style={[styles.balls, style]}>
			{data.map((ball) => (
				<Text key={Math.random()}>{ball}</Text>
			))}
		</View>
	);
}
export default Player;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    balls: {
		flexDirection: "row",
		width: deviceWidth / 5,
	}
})