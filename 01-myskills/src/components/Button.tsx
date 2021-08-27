import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={.7} 
        {...rest}
        >
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
    }
});