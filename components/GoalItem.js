import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  const { text, onDeleteItem, id } = props;

  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.listText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listText: {
    color: "#fff",
    padding: 8,
  },
  pressed: {
    opacity: 0.5
  }
});
