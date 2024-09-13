import { Image, StyleSheet,SafeAreaView,ScrollView, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Navbar from '@/components/assignment/Navbar';
import QuickActions from '@/components/assignment/QuickActions';
import Appointment from '@/components/assignment/Appointment';
import HealthInsights from '@/components/assignment/HealthInsights';
import RecentActivities from '@/components/assignment/RecentActivities';

 

export default function HomeScreen() {
  return (
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <>
        <Navbar />
        <Image
          source={require('@/assets/images/doctor.png')}
          style={styles.reactLogo}
        />
        </>
      }>
      
      
      
       

      <SafeAreaView style={styles.container}>
            <ScrollView>
                
                <ThemedView style={styles.titleContainer}>
               <ThemedText type="title">Welcome back, Priya!</ThemedText>
              <HelloWave />
              </ThemedView>
              <ThemedView>
              <QuickActions />
                <Appointment />
                <HealthInsights />
                <RecentActivities />
                
              </ThemedView>
                {/* <ThemedView style={styles.section}>
                    <ThemedText style={styles.title}></ThemedText>
                </ThemedView> */}
        
                
                {/* <Footer /> */}
            </ScrollView>
        </SafeAreaView>







      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 170,
    width: 210,
    bottom: 0,
    left: 0,
    position: 'absolute',
    elevation:40
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
},
section: {
    padding: 16,
    backgroundColor: '#fff',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5A6268',
},
});
