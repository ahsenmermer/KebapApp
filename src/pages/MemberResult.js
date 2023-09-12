import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

 function MemberResult({route}) {

    const {user} =route?.params;

  return (
    <View>
        <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üye Ad: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyad: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userEmail}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:30,
        margin:5,
    },
    message:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    }
})

export default MemberResult;