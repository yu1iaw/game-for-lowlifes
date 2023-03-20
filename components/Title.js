import { StyleSheet, Text } from 'react-native';
import { Colors } from '../tools/colors';

function Title({children, style, withoutBorder}) {
    return <Text style={[styles.title, style, withoutBorder]}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'tilt',
        fontSize: 32,
        color: Colors.accent500,
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        marginBottom: 20
    }
});