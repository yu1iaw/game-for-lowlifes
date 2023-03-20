import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Colors } from "./tools/colors";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameOverScreen } from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"tilt": require("./assets/fonts/TiltNeon-Regular.ttf"),
		"overpass-semi": require("./assets/fonts/OverpassMono-SemiBold.ttf"),
		"pt-mono": require("./assets/fonts/PTMono-Regular.ttf"),
		"orbitron-semi": require("./assets/fonts/Orbitron-SemiBold.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.defaultImage} />
		);
	}

	function pickedUserNumber(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(quan) {
		setGameIsOver(true);
		setGuessRounds(quan);
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedUserNumber} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen roundsNumber={guessRounds} onResult={userNumber} onRestart={startNewGameHandler} />;
	}

	return (
		<>
			<StatusBar style="light" />
			<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
				<ImageBackground
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.25,
	},
	defaultImage: {
		opacity: 1,
	},
});
