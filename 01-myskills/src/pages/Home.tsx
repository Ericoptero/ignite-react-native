import React, { useState } from 'react';
import { 
    SafeAreaView,
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    TouchableOpacity, 
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillProps {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillProps[]>([]);

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
        setNewSkill('');
    }

    function handleRemoveSkill(id: string) {
        const filteredMySkills = mySkills.filter(skill => skill.id !== id);

        setMySkills(filteredMySkills);
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

            <Button onPress={handleAddNewSkill}>Add</Button>

            <Text style={[styles.title, { marginTop: 20 }]}>
                My Skills
            </Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                    <SkillCard 
                    skill={item.name} 
                    onPress={() => handleRemoveSkill(item.id)} 
                />}
            />
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
})