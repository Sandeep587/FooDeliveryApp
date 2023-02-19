import React, { useRef, useState } from "react";
import MainApp from "./app/route";
import { TouchableOpacity, View , Text} from "react-native";
const App=()=>{
  const abc  = useRef(0)
  const [render, setRender] = useState(false)
  return(
     <MainApp/>
    // <View>
    //   <Text>
    // {abc.current}
    //   </Text>
    //   <TouchableOpacity
    //   onPress ={()=>{abc.current = abc.current+1, setRender(!render)}}
    //   >

    //     <Text>Click me</Text>
    //   </TouchableOpacity>
    // </View>
  )
}
export default App;