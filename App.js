import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '2', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '3', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '4', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '5', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '6', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '7', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '8', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '9', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '10', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl:'https://i.pinimg.com/736x/40/75/19/40751990b33e1c20eff2b471e2005654.jpg' },
  { id: '11', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '12', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '13', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '14', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '15', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '16', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '17', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '18', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '19', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '20', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
  { id: '21', title: 'Villager Ganteng', price: 'Rp 200.000', imageUrl: 'https://i.pinimg.com/474x/53/0a/04/530a04418274e0899cba32d0d12f75b5.jpg' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://i.pinimg.com/236x/0b/0a/8d/0b0a8d2cd2d4d3e0727b24002a700e4c.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Toko Villager</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});

