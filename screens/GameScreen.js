import { useState, useEffect, useMemo } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else return rndNum;
}

let min = 1,
	max = 100,
	i = 1;

function GameScreen(props) {
	const initial = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initial);
	const [counter, setCounter] = useState(1);

	useEffect(() => {
		if (currentGuess === props.userNumber) {
			props.onGameOver(i);
		}
	}, [currentGuess, props.userNumber, props.onGameOver]);

	useEffect(() => {
		min = 1;
		max = 100;
		i = 1;
	}, []);

	function nextGuessHandler(direction) {
		if ((direction === "lower" && currentGuess < props.userNumber) || (direction === "higher" && currentGuess > props.userNumber)) {
			Alert.alert("Don't lie!", "You know this is wrong...", [{ text: "Sorry :)", style: "cancel" }]);
			return;
		}

		if (direction === "lower") {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}
		const newRndNum = generateRandomBetween(min, max, currentGuess);
		i++;

		setCurrentGuess(newRndNum);
		setCounter(i);
	}

	return (
		<View style={styles.screen}>
			<Title children="Opponent's guess" />
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler("higher")}>
							<Ionicons name="add-circle-outline" size={24} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler("lower")}>
							<Ionicons name="remove-circle-outline" size={24} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			{counter >= 6 ? (
				<View style={styles.outerAdd}>
					<View style={styles.innerAdd}>
						<Button title="&#9654;&#9654;" color="tan" onPress={() => props.onGameOver()} />
					</View>
				</View>
			) : null}
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
		paddingHorizontal: 15,
	},
	instructionText: {
		marginBottom: 20,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	innerAdd: {
		width: 100,
	},
	outerAdd: {
		width: "100%",
		alignItems: "center",
		marginTop: 20,
	},
});
