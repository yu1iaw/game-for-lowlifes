import { StyleSheet, Text } from "react-native"
import { Colors } from "../tools/colors"

export function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
		color: Colors.primary100,
		fontFamily: 'orbitron-semi',
		fontSize: 20,
		textShadowColor: "white",
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 1
	}
})