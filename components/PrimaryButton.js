import {View, Text, Pressable, StyleSheet} from "react-native";
import {Colors} from "../tools/colors";

export function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={styles.buttonInnerContainer} 
                onPress={props.onPress} 
                android_ripple={{color: Colors.primary600}} >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: "white",
        fontFamily: 'orbitron-semi',
        fontSize: 17
    }
})
