import { file } from "@babel/types";
import { Button, Linking, StatusBar, TextInput, View } from "react-native";


    const resp = await fetch('http://192.168.1.14:8000/api/upload' , {    
      method: "POST",
      body: data
    })
    body: data

    if(resp.status != 200){
      return alert(await resp.text()); 
    }
    return await resp.text();
  }

export const BarCodeSection = ({readyScan, scanned, mockScan}) => {
  if(!readyScan) return null;
  if(process.env.NODE_ENV == 'test' && mockScan){
    return scanned(mockScan)
  } 
  return(
    <View>
      <TextInput onChange={(text)=>scanned({data: text})} />
      <BarCodeScanner 
          accessibilityLabel="Barcode Scanner"
          onBarCodeScanned={scanned}
          style={StyleSheet.absoluteFillObject}
        />
    </View>
  )
}

  export default function App() {
    const [url, setUrl] = useState('');
    const [readyToScan, setReadyToScan] = useState(false);
    const readyScan = async () => {
      if(readyToScan) return setReadyToScan(false) 
      const {status} = process.env.NODE_ENV == 'test' ? {status:'granted'} : await BarCodeScanner.requestPermissoinsasync();
      if(status == 'granted') setReadyToScan(true);
  }

  const selectFile = async () => {
    const file = await DocumentPicker.getDocumentAsync();
    file.type = mimetype(file.name);
    if (file.type === undefined){
      alert("not allowed extention");
      return null;
    }
    let formDat = new FormData();
    formDat.append("file", file);
    const resp = await uploadDoc(formDat);
    serUrl(resp);
  }

  const scanner = ({data}) => {
    setUrl(data);
  }

  if(url) return (
    <View>
      <Text onPress={()=> Linking.openURL(url.replace('localhost', '192.168.1.14'))} >{url}</Text>
    </View>
  )


  return (
    <View style={styles.container} >
      <Text accessibilityLabel="Text" >Select File</Text>
      <Button accessibilityLabel="Select File" title="Select" onPress={selectFile} />
      <Text accessibilityLabel="Text" >OR</Text>
      <BarCodeSection scanned={scanner} readyToScan={readyToScan} />
      <Button accessibilityRole="Start Scanner" title={readyToScan ? "Close" : "Scan Code"} onPress={readyScan} />
      <StatusBar style={auto} />
    </View>
  );

}