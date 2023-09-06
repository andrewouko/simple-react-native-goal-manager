import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

export default function GoalInput(props) {
  const { isVisible, toggleModal } = props;
  const [goal, setGoal] = useState("");
  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
    toggleModal(false);
  }
  return (
    <Modal visible={isVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={toggleModal.bind(this, false)} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
