import { View, TextInput, Text, Button, StyleSheet, Modal } from "react-native";
import {useState} from 'react';

export default function ActivityInput(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const NameChangeHandler=(text)=>{
    setName(text);
  }
  const DateChangeHandler=(text)=>{
    setDate(text);
  }

  const AddDataHandler=(nameActivity,dateActivity)=>{
    props.Add(nameActivity,dateActivity);
    setName("");
    setDate("");
  };
  return (
    <Modal visible={props.visibleBox} style={styles.modalContainer}>
      <View style={styles.activityContainer}>
        <Text style={styles.activityTitle}>Add New Activity</Text>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="My activity ... "
              onChangeText={NameChangeHandler}
              value={name}
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Complete Date ... "
              onChangeText={DateChangeHandler}
              value={date}
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add"  onPress={()=>AddDataHandler(name,date)}/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50,
    backgroundColor: "red",
  },
  activityContainer: {
    alignItems: "center",
    height: 250,
  },
  activityTitle: {
    color: "#ed1c24",
    fontSize: 25,
    fontWeight: "bold",
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#a8a8a8",
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
  },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: "#cccccc",
    borderWidth: 1,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 10,
  },
  button: {
    width: 130,
    margin: 8,
  },
});
