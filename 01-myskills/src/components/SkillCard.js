import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity key={skill} style={styles.skillButton}>
            <Text style={styles.skillText}>{skill}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
});