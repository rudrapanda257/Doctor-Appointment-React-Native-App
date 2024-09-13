import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const HealthInsights = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Health Insights</ThemedText>
            <ThemedView style={styles.insights}>
                <ThemedView style={styles.arrange}>
                <View style={styles.insight}>
                    <ThemedText style={styles.value}>7,234</ThemedText>
                    <ThemedText style={styles.label}>Steps</ThemedText>
                </View>
                <Text style={{ color: '#5A6268', marginRight: 20 ,marginTop:15,fontSize: 36,}}>👟</Text>
                </ThemedView>



                <ThemedView style={styles.arrange}>
                <View style={styles.insight}>
                    <ThemedText style={styles.value}>76 bpm</ThemedText>
                    <ThemedText style={styles.label}>Heart Rate</ThemedText>
                </View>
                <Text style={{ color: '#5A6268', marginRight: 20 ,marginTop:15,fontSize: 36,}}>🫀</Text>
                </ThemedView>



                <ThemedView style={styles.arrange}>
                <View style={styles.insight}>
                    <ThemedText style={styles.value}>7 hrs</ThemedText>
                    <ThemedText style={styles.label}>Sleep</ThemedText>
                </View>
                <Text style={{ color: '#5A6268', marginRight: 20 ,marginTop:15,fontSize: 37,}}>🛌🏻</Text>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin: 6,
        marginTop: 40,
        // backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
         borderColor: 'white', // White border color
         borderWidth: 0.1, 
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
    },
    arrange:{
        flexDirection: 'row',
      
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // color: '#5A6268',
        marginBottom: 16,
        padding:12,
        
    },
    insights: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        
    },
    insight: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        padding:13
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00B8A9',
    },
    label: {
        fontSize: 14,
        
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginRight: 16,
    },
});

export default HealthInsights;
