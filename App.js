import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, View } from "react-native";
import ActivityInput from "./components/ActivitiesInput";
import ActivitiesItem from "./components/ActivitiesItem";

export default function App() {
  const [visibleInput, setVisibleInput] = useState(false);
  const [listData, setListData] = useState([]);

  const ShowModalHandler = () => {
    setVisibleInput(true);
  };

  const HideModalHandler = () => {
    setVisibleInput(false);
  };

  const AddDataHandler = (nameActivity, dateActivity) => {
    setListData((List) => [
      ...List,
      { id: Math.random().toString(), name: nameActivity, date: dateActivity },
    ]);
    HideModalHandler();
  };

  const DeleteDataHandler = (id) => {
    setListData((List) => List.filter((a) => a.id !== id));
  };
  return (
    <View style={styles.AppContainer}>
      <StatusBar style="auto" />
      <Button
        title="Add New Activity"
        color="#ed1c24"
        onPress={ShowModalHandler}
      />
      <ActivityInput
        visibleBox={visibleInput}
        onCancel={HideModalHandler}
        Add={(nameActivity, dateActivity) =>
          AddDataHandler(nameActivity, dateActivity)
        }
      />
      <View style={styles.ListContainer}>
        <FlatList
          data={listData}
          renderItem={(DataItem) => {
            return (
              <ActivitiesItem
                name={DataItem.item.name}
                date={DataItem.item.date}
                id={DataItem.item.id}
                onDeleteItem={DeleteDataHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "#a8a8a8",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  ListContainer:{
    marginTop:10,
  }
});
