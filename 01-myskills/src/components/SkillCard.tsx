import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity style={styles.skillButton} {...rest}>
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