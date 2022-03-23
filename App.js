import React, { useState } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/header/index";
import StartGameScreen from "./screens/startGameScreen/index";
import GameScreen from "./screens/gameScreen/index";

const App = () => {
  const [userNumber,setUserNumber] = useState();

  const [loaded] = useFonts({
    Megrim: require("./assets/fonts/Megrim-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
  });
  
  if (!loaded) {
    return null;
  }

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber) {
    content = <GameScreen userOption={userNumber}/>
  }
  
  return (
    <View style={{flex: 1}}>
      <Header 
      title="VAMOS A JUGAR"
       />
      {content}
    </View>
  );
}

export default App;