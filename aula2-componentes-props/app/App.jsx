import { View, StyleSheet } from 'react-native';
import BemVinda from '../components/BemVinda';
import Saudacao from '../components/Saudacao';

export default function App() {
    return (
        <View style={styles.container}>
            <BemVinda />
            <Saudacao nome="Rose" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f332',
        justifyContent: 'center',
        alignItems: 'center'
    }
});