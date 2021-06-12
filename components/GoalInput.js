import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View
                style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Course Goal"
                    value={enteredGoal}
                    style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button color="red" title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;