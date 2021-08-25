import React, { useState } from 'react';
import { 
    SafeAreaView,
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    TouchableOpacity 
} from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
        setNewSkill('');
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Welcome, Eric Nantes
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={.7} 
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginTop: 20 }]}>
                My Skills
            </Text>

            {mySkills.map(skill => (
                <TouchableOpacity key={skill} style={styles.skillButton}>
                    <Text style={styles.skillText}>{skill}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    skillButton: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center'
    },
    skillText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF"
    }
})