import { View, Text, StyleSheet} from 'react-native';
import { Colors } from '../tools/colors';

export function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: Colors.accent500,
        paddingVertical: 24,
        width: "100%",
        margin: 24,
        marginBottom: 0,
        borderRadius: 8
    },
    text: {
        fontSize: 40,
        fontFamily: 'tilt',
        color: Colors.accent500
    }
})