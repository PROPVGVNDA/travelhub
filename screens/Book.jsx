import React, { useContext, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Button,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MainContext } from '../MainContext.js';
import { Ticket } from '../Ticket.js';
import Icon from 'react-native-vector-icons/FontAwesome';

function generateRandomDouble() {
  var random = Math.random() * (300 - 100) + 100;
  var rounded = Math.floor(random);
  return rounded + 0.99;
}

export const BookScreen = ({ navigation }) => {
  const { addToCart } = useContext(MainContext);

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    const newTicket = new Ticket(
      fromInput,
      toInput,
      departDate,
      returnDate,
      adultCount,
      childCount,
      estimatedPrice
    );
    addToCart(newTicket);
    setModalVisible(true);
  };

  const resetForm = () => {
    setFromInput('');
    setToInput('');

    setDepartDate(new Date());
    setReturnDate(new Date());

    setAdultCount(0);
    setChildCount(0);

    setEstimatedPrice(generateRandomDouble());
  };

  const handleOkButton = () => {
    setModalVisible(false);
    resetForm();
  };

  const isAddToCartButtonEnabled = () => {
    const isValidFromCity = fromInput;
    const isValidToCity = toInput;
    const isPassengerCountValid = adultCount > 0 || childCount > 0;

    return isValidFromCity && isValidToCity && isPassengerCountValid;
  };

  const [estimatedPrice, setEstimatedPrice] = useState(generateRandomDouble());

  useEffect(() => {
    if (isAddToCartButtonEnabled()) {
      setEstimatedPrice(generateRandomDouble());
    }
  }, [fromInput, toInput, adultCount, childCount, departDate, returnDate]);

  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDepartPicker, setShowDepartPicker] = useState(Platform.OS === 'ios');
  const [showReturnPicker, setShowReturnPicker] = useState(Platform.OS === 'ios');

  const onChangeDepart = (event, selectedDate) => {
    const currentDate = selectedDate || departDate;
    setShowDepartPicker(Platform.OS === 'ios');
    setDepartDate(currentDate);
  };

  const onChangeReturn = (event, selectedDate) => {
    const currentDate = selectedDate || returnDate;
    setShowReturnPicker(Platform.OS === 'ios');
    setReturnDate(currentDate);
  };

  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const incrementAdult = () => setAdultCount((prevCount) => prevCount + 1);
  const decrementAdult = () => setAdultCount((prevCount) => prevCount - 1);
  const incrementChild = () => setChildCount((prevCount) => prevCount + 1);
  const decrementChild = () => setChildCount((prevCount) => prevCount - 1);

  const cities = ['Kyoto', 'Kyiv', 'New York', 'Los Angeles', 'London'];

  const updateFromSearch = (text) => {
    setFromInput(text);
    updateSuggestions(text, setFromSuggestions);
  };

  const updateToSearch = (text) => {
    setToInput(text);
    updateSuggestions(text, setToSuggestions);
  };

  const updateSuggestions = (text, setSuggestionsFunc) => {
    if (text.length > 1) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(text.toLowerCase())
      );
      setSuggestionsFunc(filteredCities);
    } else {
      setSuggestionsFunc([]);
    }
  };

  const selectFromCity = (city) => {
    setFromInput(city);
    setFromSuggestions([]);
  };

  const selectToCity = (city) => {
    setToInput(city);
    setToSuggestions([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, Mykyta</Text>
      </View>
      <Text style={styles.prompt}>Book Your Ticket Today</Text>
      <View style={styles.bookingCard}>
        <View style={styles.bookingCardContent}>
          <View style={styles.promptPair}>
            <Text style={styles.promptPairTitle}>From</Text>
            <TextInput
              style={styles.promptPairInput}
              onChangeText={updateFromSearch}
              value={fromInput}
              placeholder="Type a city name"
              placeholderTextColor={'#909090'}
            />
            <FlatList
              data={fromSuggestions}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => selectFromCity(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              style={styles.suggestionsList}
            />
          </View>
          <View style={styles.promptPair}>
            <Text style={styles.promptPairTitle}>To</Text>
            <TextInput
              style={styles.promptPairInput}
              onChangeText={updateToSearch}
              value={toInput}
              placeholder="Type a city name"
              placeholderTextColor={'#909090'}
            />
            <FlatList
              data={toSuggestions}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.suggestionItem} onPress={() => selectToCity(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              style={styles.suggestionsList}
            />
          </View>
          <View style={styles.promptPair}>
            <Text style={styles.promptPairTitle}>Depart-Return</Text>
            <View style={styles.datePickersContainer}>
              {showDepartPicker && (
                <DateTimePicker
                  minimumDate={new Date()}
                  style={styles.datePicker}
                  testID="dateTimePicker"
                  value={departDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeDepart}
                />
              )}
              {showReturnPicker && (
                <DateTimePicker
                  minimumDate={departDate}
                  style={styles.datePicker}
                  testID="dateTimePicker"
                  value={returnDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeReturn}
                />
              )}
            </View>
          </View>
          <Text style={styles.passengersTitle}>Passengers</Text>
          <View style={styles.passengerContainer}>
            <View style={styles.passengerCounter}>
              <TouchableOpacity
                onPress={decrementAdult}
                style={[styles.counterButton, adultCount === 0 && styles.disabledCounterButton]}
                disabled={adultCount === 0}
              >
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{adultCount}</Text>
              <Text style={styles.passengerLabel}>Adult</Text>
              <TouchableOpacity onPress={incrementAdult} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.passengerCounter}>
              <TouchableOpacity
                onPress={decrementChild}
                style={[styles.counterButton, childCount === 0 && styles.disabledCounterButton]}
                disabled={childCount === 0}
              >
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{childCount}</Text>
              <Text style={styles.passengerLabel}>Child</Text>
              <TouchableOpacity onPress={incrementChild} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isAddToCartButtonEnabled() && (
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Estimated price: ${estimatedPrice}</Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !isAddToCartButtonEnabled() && styles.disabledAddToCartButton]}
              disabled={!isAddToCartButtonEnabled()}
              onPress={handleAddToCart}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Item Added to Cart</Text>
            <Button onPress={handleOkButton} title="OK" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  arrowHeader: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  bookingCard: {
    marginTop: 12,
    width: '100%',
    backgroundColor: '#252525',
    paddingBottom: 'auto',
    marginVertical: 0,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookingCardContent: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    alignItems: 'left',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  prompt: {
    width: '60%',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promptPair: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  promptPairTitle: {
    color: '#fff',
  },
  promptPairInput: {
    paddingVertical: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  datePickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  datePicker: {
    backgroundColor: '#ff9000',
    flex: 0,
  },
  passengersTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#fff',
  },
  passengerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  passengerCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 10,
  },
  passengerLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  counterButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9000',
    marginHorizontal: 5,
  },
  disabledCounterButton: {
    backgroundColor: '#ccc',
  },
  counterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterValue: {
    paddingRight: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff9000',
    width: '90%',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledAddToCartButton: {
    marginTop: 15,
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceContainer: {
    paddingVertical: 25,
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
