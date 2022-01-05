import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
    Button,
} from "react-native";
import db from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const NewFood = () => {

    // const [state, setState] = useState({
    //     nombre: 'nombre',
    //     precio: 'precio',
    //     desc: 'descripción'
    // });
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [desc, setDesc] = useState('');


    const handleTextInput = (input, value) => {
        // setState({ ...setState, [input]: value })
        if (input === 'nombre') setNombre(value);
        if (input === 'precio') setPrecio(value);
        if (input === 'desc') setDesc(value);
    }

    // Creación comida a la base de datos
    const saveNewFood = async () => {
        if (!nombre || !precio || !desc ) {
            Alert.alert('Por favor, llene todos los campos.')
        }
        else {

            // Alert.alert(`${nombre}, ${precio}, ${desc}`);
            console.log(`${nombre}, ${precio}, ${desc}`);
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    name: nombre,
                    price: precio,
                    desc: desc
                });
                Alert.alert("¡Comida guardada! \nDocument written with ID: ", docRef.id);
            } catch (e) {
                console.error("Ocurrió un error al añadir un registro a la base de datos: ", e);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.text_bold, styles.text_center, styles.title]}>Agregar nueva comida</Text>
            <View style={styles.inputgroup}>
                <TextInput
                    style={styles.inputform}
                    placeholder='Nombre'
                    value={nombre}
                    onChangeText={(value) => handleTextInput('nombre', value)} />
            </View>
            <View style={styles.inputgroup}>
                <TextInput
                    style={styles.inputform}
                    placeholder='Precio'
                    value={precio}
                    onChangeText={(value) => handleTextInput('precio', value)} />
            </View>
            <View style={styles.inputgroup}>
                <TextInput
                    style={styles.inputform}
                    placeholder='Descripción'
                    value={desc}
                    onChangeText={(value) => handleTextInput('desc', value)} />
            </View>
            <View style={styles.inputgroup}>
                <TouchableOpacity
                    style={styles.btnguardar}
                    onPress={() => saveNewFood()}>
                    <Text style={[styles.text_white, styles.text_bold, styles.text_center]}>
                        Guardar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default NewFood;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
    },
    inputgroup: {
        margin: 10,
    },
    inputform: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFCF9',
        borderBottomColor: '#EE9746',
        borderBottomWidth: 3,
        borderRadius: 6,
        fontSize: 18,
    },
    btnguardar: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#EE9746',
        borderRadius: 6,
        width: '30%',
        alignSelf: 'center'
    },
    text_white: {
        color: '#fff',
    },
    text_bold: {
        fontWeight: 'bold',
    },
    text_center: {
        textAlign: 'center',
    },
    text_negro: {
        color: '#000'
    },
    title: {
        fontSize: 22,
    }
});
