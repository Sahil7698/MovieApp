import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addRecord, updateRecord, deleteRecord} from '../redux/slice/demoSlice';
import {RootState} from '../redux/store/configureStore';

const DemoScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  //   const [records, setRecords] = useState<any | string[]>([]);
  const [editIndex, setEditIndex] = useState(-1);
  const dispatch = useDispatch();
  const records = useSelector((state: RootState) => state.demoSlice.records);
  const [colors, setColors] = useState('#d4efdf');
  const [buttonColor, setButtonColor] = useState('#58d68d');

  const ColorsData = [
    {id: 1, colorName: '#58d68d', bgColor: '#d4efdf'},
    {id: 2, colorName: '#f4d03f', bgColor: '#fcf3cf'},
    {id: 3, colorName: '#f5b041', bgColor: '#fae5d3'},
    {id: 4, colorName: '#a569bd', bgColor: '#e8daef'},
    {id: 5, colorName: '#5499c7', bgColor: '#d4e6f1'},
  ];

  const insertRecord = () => {
    if (!name.trim() || !age.trim()) {
      Alert.alert('Please Insert Name or Age');
    }
    if (editIndex !== -1) {
      // Update existing record
      //   const updatedRecords = [...records];
      //   updatedRecords[editIndex] = {name, age};
      //   setRecords(updatedRecords);
      dispatch(updateRecord({index: editIndex, name, age}));
      setEditIndex(-1); // Reset edit mode
    } else {
      // Add new record
      //   setRecords([...records, {name, age}]);
      dispatch(addRecord({name, age}));
    }
    setName('');
    setAge('');
  };

  const handleEdit = (index: number) => {
    const record = records[index];
    console.log('*&*&**&***', record);
    setName(record.name);
    setAge(record.age);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    // const updateRecords = records.filter((_, i: number) => i !== index);
    // console.log('*&*&**&***', updateRecords);
    // setRecords(updateRecords);
    dispatch(deleteRecord(index));
  };
  return (
    <View style={[styles.container, {backgroundColor: colors}]}>
      <TextInput
        value={name}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        style={styles.textInputStyle}
      />
      <TextInput
        value={age}
        placeholder="Enter Age"
        onChangeText={v => setAge(v)}
        style={styles.textInputStyle}
      />
      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor: buttonColor}]}
        onPress={insertRecord}>
        <Text style={styles.buttonText}>
          {editIndex !== -1 ? 'Update Record' : 'Add Record'}
        </Text>
      </TouchableOpacity>
      <View style={styles.themeColorContainer}>
        <FlatList
          data={ColorsData}
          contentContainerStyle={styles.themeRowColorStyle}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.themeButtonStyle,
                {
                  backgroundColor: item?.colorName,
                },
                colors === item.bgColor ? styles.selectedTheme : null,
              ]}
              onPress={() => {
                setColors(item?.bgColor);
                setButtonColor(item?.colorName);
              }}
            />
          )}
        />
      </View>
      <FlatList
        data={records}
        style={styles.flatListStyle}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.record}>
            <Text style={styles.recordText}>
              {item.name} - {item.age} year old
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => handleEdit(index)}>
                <Text>{'Edit'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text>{'Delete'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 50,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    width: '90%',
    padding: 12,
    marginBottom: 15,
  },
  buttonStyle: {
    width: '90%',
    height: 50,
    borderRadius: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
  },
  record: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  recordText: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 10,
  },
  flatListStyle: {
    width: '90%',
  },
  themeButtonStyle: {
    height: 50,
    width: 50,
    borderRadius: 30,
    margin: 10,
  },
  themeRowColorStyle: {
    flexDirection: 'row',
    height: 50,
  },
  themeColorContainer: {
    height: 70,
  },
  selectedTheme: {
    borderWidth: 3,
    borderColor: 'black',
  },
});
