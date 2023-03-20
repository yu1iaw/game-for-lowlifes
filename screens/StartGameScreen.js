import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../tools/colors";

export function StartGameScreen({ onConfirmNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(value) {
		setEnteredNumber(value);
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [
				{ text: "Okay", style: "cancel", onPress: () => setEnteredNumber("") },
			]);
			return;
		}
		onConfirmNumber(chosenNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess my number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={numberInputHandler}
					autoFocus={true}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => setEnteredNumber("")}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
		paddingHorizontal: 15

	},
	numberInput: {
		width: 55,
		height: 55,
		fontSize: 39,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontFamily: 'overpass-semi',
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	}
});
