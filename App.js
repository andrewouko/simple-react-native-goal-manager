import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function addGoalHandler(goal) {
    setGoals((prev) => [...prev, { id: Math.random().toString(), text: goal }]);
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }
  function toggleModal(toggle) {
    setIsVisible(toggle);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={toggleModal.bind(this, true)}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isVisible}
          toggleModal={toggleModal}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={goals}
            renderItem={(item_data) => (
              <GoalItem
                id={item_data.item.id}
                text={item_data.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  listContainer: {
    flex: 5,
  },
});
