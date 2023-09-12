import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Welcome from "./pages/Welcome";
import memberSign from "./pages/memberSign";
import MemberResult from "./pages/MemberResult";

const Stack = createNativeStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="WelcomeScreen" component={Welcome} options={{headerShown:false}} />
                <Stack.Screen name="MemberSignScreen" component={memberSign} />
                <Stack.Screen name="MemberResultScreen" component={MemberResult} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;