import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Test=() => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
  
      {/* Task Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
  
      {/* Add Task Button */}
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
  
      {/* Task List */}
      <View style={styles.content}>
        {tasks.map((e, index) => (
          <TouchableOpacity key={index} style={styles.task}>
            <Text style={styles.child}>{e}</Text>
            
            {/* Actions: Remove and Edit */}
            <View style={styles.actions}>
              <TouchableOpacity >
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity o>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
content: {
    gap: 13,         
    marginTop: 12,  
    padding: 23,     
    width: "30%",    
    
},
child:{
    color:"#f1ff"
},

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  task:{
    display: 'flex', 
    flexDirection:"row",
    backgroundColor:"#0f0f",
    justifyContent:"space-between",
    padding:12,
  },
  actions: {
    flexDirection: "row",
    gap: 10, 
  },
  remove: {
    color: "#FF3D00",
    fontWeight: "bold",
    marginRight: 10,
  },
  edit: {
    color: "#007BFF", 
    fontWeight: "bold",
  },
});

export default Test;