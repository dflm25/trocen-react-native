import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    ...theme,
    headerContainer: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        justifyContent: 'space-between',
        height: 80,
    },
    containerWhite: {
        // flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: theme.colors.white,
        marginTop: -10,
        padding: 20,
    }
});

export default styles;
