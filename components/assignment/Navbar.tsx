import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const Navbar = () => {
  return (
    <ThemedView  style={{  paddingVertical: 18, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      elevation: 4, // For Android shadow effect
      zIndex: 2000,  }}>
      <ThemedView >
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00B8A9',marginTop:15, zIndex: 2000, }}>Wekitsak</Text>
      </ThemedView>
      <ThemedView  style={{ flexDirection: 'row' ,marginLeft:20}}>
        <TouchableOpacity>
          <Text style={{ color: '#5A6268', marginRight: 20 ,marginTop:15}}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: '#5A6268', marginRight: 20 ,marginTop:15}}>⚙️</Text>
        </TouchableOpacity>
        <Image source={{ uri: '/api/placeholder/32/32' }} style={{ width: 32, height: 32, borderRadius: 16 }} />
      </ThemedView >
    </ThemedView >
  );
};

export default Navbar;
