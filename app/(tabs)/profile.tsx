import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HealthInsights from '@/components/assignment/HealthInsights';
import RecentActivities from '@/components/assignment/RecentActivities';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/017/173/322/small_2x/medical-flat-icons-elements-item-png.png'}}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Health Tracker!</ThemedText>
        <ThemedText style={styles.heart}>🧑🏻‍⚕️</ThemedText>
      </ThemedView>
      <HealthInsights />
                <RecentActivities />
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  heart: {
    fontSize:22
  },
  reactLogo: {
    height: 178,
    width: 320,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
