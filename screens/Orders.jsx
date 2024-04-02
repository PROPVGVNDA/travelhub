import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MainContext } from '../MainContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export const OrdersScreen = ({ navigation }) => {
  const { orders } = useContext(MainContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={orders}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              margin: 10,
              padding: 10,
              borderColor: '#fff',
              borderWidth: 1,
              backgroundColor: '#ff9000',
            }}
          >
            <Text style={styles.listText}>From: {item.from}</Text>
            <Text style={styles.listText}>To: {item.to}</Text>
            <Text style={styles.listText}>Depart: {item.depart.toDateString()}</Text>
            <Text style={styles.listText}>Return: {item.returnDate.toDateString()}</Text>
            <Text style={styles.listText}>Adults: {item.adult}</Text>
            <Text style={styles.listText}>Children: {item.child}</Text>
            <Text style={styles.listText}>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 70,
    paddingHorizontal: 20,
    backgroundColor: '#151515',
  },
  header: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  list: {
    width: '80%',
  },
  listText: {
    color: '#000',
  }
});
