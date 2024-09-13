import React from 'react';
import { StyleSheet , ScrollView} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { faNotesMedical, faPrescriptionBottle, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const QuickActions = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Quick Actions</ThemedText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <ThemedView style={styles.actions}>
        <ThemedView style={styles.actionCard}>
          <FontAwesomeIcon icon={faVial} size={30} color="#00B8A9" />
          <ThemedText style={styles.actionText}>Lab Results</ThemedText>
        </ThemedView>
        <ThemedView style={styles.actionCard}>
          <FontAwesomeIcon icon={faNotesMedical} size={30} color="#00B8A9" />
          <ThemedText style={styles.actionText}>Medical Records</ThemedText>
        </ThemedView>
        <ThemedView style={styles.actionCard}>
          <FontAwesomeIcon icon={faPrescriptionBottle} size={30} color="#00B8A9" />
          <ThemedText style={styles.actionText}>Prescriptions</ThemedText>
        </ThemedView>
        <ThemedView style={styles.actionCard}>
          <FontAwesomeIcon icon={faVial} size={30} color="#00B8A9" />
          <ThemedText style={styles.actionText}>Lab Results</ThemedText>
        </ThemedView>
        
      </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 1,
    padding: 5
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    
  },
  actionCard: {
    // width: '25%',

    // backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    
    shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 6,
        borderColor: 'white', // White border color
        borderWidth: 0.1,    
    
  },
  actionText: {
    marginTop: 10,
    fontSize: 14,
    // color: '#5A6268',
  },
  scrollView: {
    paddingVertical: 20,
  },
});

export default QuickActions;
