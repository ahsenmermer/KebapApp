import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button';


function Welcome({ navigation }) {

  const goTomemberSign = () => {
    navigation.navigate("MemberSignScreen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spor Salonu</Text>
      <Button text={'Üye Kaydı OLuştur'} onPress={goTomemberSign} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default Welcome;