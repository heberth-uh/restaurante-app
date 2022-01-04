import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const NewOrder = () => {
    return (
        <ScrollView style={ styles.container }>
            <View>
                <TextInput placeholder='Nombre' />
            </View>
            <View>
                <TextInput placeholder='Precio' />
            </View>
            <View>
                <TextInput placeholder='Descripción' />
            </View>
            <View>
                <TextInput placeholder='Disponible' />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Guardar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default NewOrder;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
