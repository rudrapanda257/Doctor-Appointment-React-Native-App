import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const Appointment = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Upcoming Appointment</ThemedText>
            <ThemedView style={styles.appointment}>
                <Image source={{ uri: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.avatar} />
                <ThemedView>
                    <ThemedText>Dr. Patel</ThemedText>
                    <ThemedText style={styles.details}>Cardiologist</ThemedText>
                    <ThemedText style={styles.time}>Today, 10:00 AM</ThemedText>
                </ThemedView>
            </ThemedView>
            <TouchableOpacity style={styles.button}>
                <ThemedText style={styles.buttonText}>Join Video Call</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
        margin:5,
        borderRadius: 10,
        shadowColor: '#000',
        color: 'white',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 6,
        borderColor: 'white', // White border color
         borderWidth: 0.1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    appointment: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginRight: 16,
        borderColor: 'white', // White border color
         borderWidth: 0.1,
         elevation:4
    },
    details: {
        fontSize: 14,
        // color: '#5A6268',
    },
    time: {
        fontSize: 14,
        color: '#00B8A9',
        marginTop: 4,
    },
    button: {
        marginTop: 16,
        padding: 12,
        backgroundColor: '#00B8A9',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Appointment;
