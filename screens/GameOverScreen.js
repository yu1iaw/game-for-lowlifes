import { useEffect } from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";
import Player from "../components/Player";
import { Colors } from "../tools/colors";

let mine = 0,
	alien = 0,
	myArr = [],
	oppArr = [];

export function GameOverScreen({ roundsNumber, onResult, onRestart }) {
	roundsNumber > 6 || roundsNumber === undefined
		? (mine++, myArr.push(<Ionicons name="tennisball" size={24} color="#e6c865" key={Math.random() * 10} />))
		: (alien++, oppArr.push(<Ionicons name="tennisball" size={24} color="#e6c865" key={Math.random() * 10} />));

	useEffect(() => {
		if (mine === 3 || alien === 3) {
			mine = 0;
			alien = 0;
			myArr = [];
			oppArr = [];
		}
	}, []);

	const text = mine === 3 || alien === 3 ? "Start New Game" : "Next Step",
		  url = mine === 3 ? require("../assets/images/success.png") : alien === 3 ? require("../assets/images/hanging-sloth.png") : require("../assets/images/compass.png"),
		  borderWidth =  alien !== 3 ? 3 : 5,
		  borderColor = mine === 3 ? '#fff' : alien === 3 ? '#55402b' : 'transparent',
		  backgroundColor = alien === 3 ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    	  color = mine === 3 || alien === 3 ? Colors.accent500 : "white",
		  marginBottom = !roundsNumber ? 22 : 12,
		  score = mine === 3 ? `You won!` : alien === 3 ? `You lost!` : mine > alien ? `You lead!` : mine < alien ? `Try better!` : `Parity!`;

	return (
		<View style={styles.screen}>
			{roundsNumber && <Title style={styles.title}>{onResult}</Title>}
			<View style={styles.scoring}>
				<Player data={myArr} style={styles.position_a}/>
				<Title withoutBorder={[styles.next_title, { color: color, marginBottom }]}>{score}</Title>
				<Player data={oppArr} style={styles.position_b}/>
			</View>
			<View style={[styles.imageContainer, {borderWidth, borderColor}]}>
				<Image source={url} style={[styles.image, {backgroundColor}]} />
			</View>
			{ roundsNumber && <Text style={styles.summaryText}>
				6 attempts max to win a ball. It took <Text style={styles.highlight}>{roundsNumber}</Text> attempts to guess the number{" "}
				<Text style={styles.highlight}>{onResult}</Text>.
			</Text> }
			{ !roundsNumber && <Text style={styles.summaryText}>6 attempts max to win a ball. There are <Text style={{color: Colors.primary500}}>already more</Text> than 6</Text> }
			<PrimaryButton onPress={onRestart}>{text}</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 15,
		justifyContent: "center",
		alignItems: "center"
	},
	imageContainer: {
		width: 180,
		height: 180,
		borderRadius: 90,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%"
	},
	title: {
		borderBottomColor: "transparent",
		fontFamily: "overpass-semi",
		fontSize: 55,
		marginBottom: 0,
		color: Colors.primary100,
		textShadowColor: "#fff",
		textShadowOffset: { width: -2, height: 1 },
		textShadowRadius: 1,
	},
	next_title: {
		borderBottomColor: "transparent"
	},
	summaryText: {
		marginVertical: 12,
		fontFamily: "orbitron-semi",
		fontSize: 18,
		textAlign: "center",
	},
	highlight: {
		fontFamily: "pt-mono",
		color: Colors.primary500,
	},
	scoring: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline"
	},
	position_a: {
		justifyContent: "flex-end"
	},
	position_b: {
		justifyContent: "flex-start"
	}
});

