import { StyleSheet, Text } from 'react-native';

export default function Saudacao(props) {
    return (
        <Text style={style.texto}>A paz do Senhor, irmã {props.nome}!</Text>
    );
}

const style = StyleSheet.create({
    texto: {
        fontSize: 22,
    }
})