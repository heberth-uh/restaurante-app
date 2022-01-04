import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const NewFood = () => {
    return (
        <ScrollView style={ styles.container }>
            <Text style={ [styles.text_bold, styles.text_center, styles.title ] }>Agregar nueva comida</Text>
            <View style={ styles.inputgroup }>
                <TextInput
                    style={ styles.inputform }
                    placeholder='Nombre' />
            </View>
            <View style={ styles.inputgroup }>
                <TextInput
                    style={ styles.inputform }
                    placeholder='Precio' />
            </View>
            <View style={ styles.inputgroup }>
                <TextInput
                    style={ styles.inputform }
                    placeholder='Descripción'/>
            </View>
            {/* <View style={ styles.inputgroup }>
                <TextInput 
                    style={ styles.inputform }
                    placeholder='Disponible' />
            </View> */}
            <View style={ styles.inputgroup }>
                <TouchableOpacity style={ styles.btnguardar }>
                    <Text style={ [styles.text_white, styles.text_bold, styles.text_center] }>
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
