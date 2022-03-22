import React, { useState } from "react";
import { View, /* AppLoading */ } from 'react-native';
/* import * as Font from "expo-font"; */

import Header from "./components/header/index";
import StartGameScreen from "./screens/startGameScreen/index";
import GameScreen from "./screens/startGameScreen/index";

/* const fetchFont = () => { 
  return Font.loadAsync({
    "lato": require(".\assets\fonts\Lato-Regular.ttf")
  })
}
 */
const App = () => {
  const [userNumber,setUserNumber] = useState();
  const [dataLoaded,setDataLoaded] = useState(false);
/*   const [loaded, error] = useFonts({
    "lato": require(".\assets\fonts\Lato-Regular.ttf")
  }) */

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber) {
    content = <GameScreen userOption={userNumber}/>
  }

/*   if(!dataLoaded){
    return(
      <AppLoading
      startAsync={fetchFont}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
      />
    )
  } */
  
  return (
    <View style={{flex: 1}}>
      <Header 
      title="Bienvenido" />
      {content}
    </View>
  );
}

export default App;