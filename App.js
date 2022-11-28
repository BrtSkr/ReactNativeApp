import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Pressable, Animated
} from "react-native";
import styles from "./assets/components/styles";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!test
      </Text>
      
      <Pressable style={styles.button} onPress={(e) => alert('test')}>
        <Text style={styles.text}>Testtt</Text>
      </Pressable>

      

      <StatusBar style="auto" />
    </View>
  );
}
