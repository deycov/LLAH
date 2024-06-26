import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons/faFaceLaugh';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faFaceSurprise } from '@fortawesome/free-regular-svg-icons/faFaceSurprise';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Esta es la app de llamale al helado!</Text>
      <View style={styles.faces}>
        <FontAwesomeIcon icon={ faFaceLaugh } color={'orange'} size={30}/>
        <FontAwesomeIcon icon={ faFaceSmile } color={'green'} size={30}/>
        <FontAwesomeIcon icon={ faFaceSurprise } color={'blue'} size={30}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faces: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100
  }
});
