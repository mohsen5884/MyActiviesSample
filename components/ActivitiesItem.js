import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ActivitiesItem(props) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.activityContainer}>
        <View style={styles.activityItem}>
          <Text style={styles.activityName}>{props.name}</Text>
          <Text>: </Text>
          <Text style={styles.activityDate}>{props.date}</Text>
        </View>
        <Pressable style={styles.closeButton} onPress={props.onDeleteItem.bind(this,props.id)}>
          <Text>X</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,

  },
  activityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:8,
    backgroundColor: "#fff200",
    marginTop: 10,
    borderRadius:5,
  },
  activityItem: {
    flexDirection: "row",
    padding: 8,
  },
  activityName: {
    fontWeight:"bold",
  },
  activityDate: {
    marginHorizontal:5 ,
  },
  closeButton: {
    backgroundColor:'#ed1c24',
    paddingHorizontal:10,
    paddingVertical:5,
    opacity:0.5,
    borderRadius:20,
  },
});
