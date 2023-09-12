import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

function Input({ label, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
        <TextInput style= {styles.input} placeholder={placeholder} onChangeText={onChangeText}/>
    </View>
  )
}

export default Input;