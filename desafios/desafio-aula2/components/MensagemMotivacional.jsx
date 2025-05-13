import { Text, StyleSheet } from "react-native";

export default function MensagemMotivacional(props) {
    return (
        <Text style={style.texto}>Tudo posso naquele que me fortalece - Filipenses 4:13. Tenha fé e creia em Cristo, {props.nome}</Text>
    );
}

const style = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: '#ffffff'
    }
})