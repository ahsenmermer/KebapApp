import { View, Alert } from 'react-native'
import React, { useState } from 'react'

import Input from '../components/Input';
import Button from "../components/Button"
import MemberResult from './MemberResult';

function MemberSign({ navigation }) {

  const [ userName, setUserName]  = useState(null);
  const [ userSurname, setUserSurname]  = useState(null);
  const [ userAge, setUserAge]  = useState(null);
  const [ userEmail, setUserEmail]  = useState(null);

  function handleSubmit() {

    if
      (!userName || !userSurname || !userAge || !userEmail) {
      Alert.alert("Spor Salonu", "Bilgiler Boş Bırakılamaz!");
      return;
    }



    const user = {
      userName,
      userSurname,
      userAge,
      userEmail
    };

    navigation.navigate("MemberResultScreen", { user });
  }
  return (
    <View>
      <Input label="Üye Adı" placeholder="üyenin adını giriniz" onChangeText={setUserName} />
      <Input label="Üye Soyadı" placeholder="üyenin soyadını giriniz" onChangeText={setUserSurname} />
      <Input label="Üye Yaş" placeholder="üyenin yaşını giriniz" onChangeText={setUserAge} />
      <Input label="Üye E-posta" placeholder="üyenin e-postasını giriniz" onChangeText={setUserEmail} />
      <Button text="Kaydı tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;