import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        {/* <TouchableOpacity onPress={console.log("Second press")}> */}
            <View style={styles.litItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    litItems: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;