import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../constants/theme';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    }
});