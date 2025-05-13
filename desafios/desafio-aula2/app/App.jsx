import { View, StyleSheet } from 'react-native';
import MensagemMotivacional from '../components/MensagemMotivacional';

export default function App() {
    return (
        <View style={style.container}>
            <MensagemMotivacional nome="Rose"/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aa3450',
        justifyContent: 'center',
        alignItems: 'center'
    }
})