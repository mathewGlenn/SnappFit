import React from "react";
import { Modal, TextInput, View, Text , StyleSheet, Pressable, TouchableOpacity} from "react-native";

export default function EditNameModal(props){
    return (
        <Modal
        visible={props.modalVisible}
        transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Name</Text>
            <TextInput onChangeText={props.onChangeText} style={styles.input}>{props.modalName}</TextInput>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={props.submit}>
              <Text style={styles.textStyle}>Save changes</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={StyleSheet.absoluteFill} onPress={props.onRequestCloseModal}></TouchableOpacity> */}
          </View>
        </View>

        
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
        width: 300,
      backgroundColor: "white",
      borderRadius: 20,
      paddingVertical:35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: 250,
      backgroundColor:"#4CD964"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color:"#444",
      fontFamily: 'montserrat_semi_bold'
    },
    input:{
        color:"#fff",
        backgroundColor:"#E3E3E3",
        width: 250,
        borderRadius:10,
        marginBottom: 10,
        color: "#444",
        fontFamily: 'montserrat_semi_bold',
        textAlign:"center"
    }
  });