import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const RecentActivities = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Recent Activities</ThemedText>
            <ScrollView >
                <View style={styles.activity}>
                    <ThemedText style={styles.activityTitle}>Morning Walk</ThemedText>
                    <ThemedText style={styles.activityTime}>30 min</ThemedText>
                </View>
                <View style={styles.activity}>
                    <ThemedText style={styles.activityTitle}>Yoga</ThemedText>
                    <ThemedText style={styles.activityTime}>45 min</ThemedText>
                </View>
                <View style={styles.activity}>
                    <ThemedText style={styles.activityTitle}>Cycling</ThemedText>
                    <ThemedText style={styles.activityTime}>20 min</ThemedText>
                </View>
                <View style={styles.activity}>
                    <ThemedText style={styles.activityTitle}>Weight Training</ThemedText>
                    <ThemedText style={styles.activityTime}>40 min</ThemedText>
                </View>
            </ScrollView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin:6,
        marginTop:30,
        // backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 4,
        borderColor: 'white', // White border color
         borderWidth: 0.1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // color: '#5A6268',
        marginBottom: 16,
        flexDirection:'column'
    },
    activity: {
        margin:12,
        // backgroundColor: '#F8F9FA',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        minWidth: 100,
        borderColor: 'white', // White border color
         borderWidth: 0.1,
         elevation:1,
    },
    activityTitle: {
        fontSize: 16,
        fontWeight: '600',
        // color: '#5A6268',
    },
    activityTime: {
        fontSize: 15,
        color: '#00B8A9',
        marginTop: 4,
    },
});

export default RecentActivities;
