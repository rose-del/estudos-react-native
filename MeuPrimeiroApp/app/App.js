import {Text, View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Hello World! 🌴</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    texto: {
      fontSize: 24,
    }
  });
  