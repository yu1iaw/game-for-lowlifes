import { StyleSheet, View } from "react-native";
import { Colors } from "../tools/colors";

export function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
		width: '100%',
		alignItems: "center",
		padding: 16,
		marginTop: 30,
		marginHorizontal: 24,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 4,
	}
})