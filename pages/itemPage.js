import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    console.log(jsonValue);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
}


const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const getMyStringValue = async () => {
  try {
    return await AsyncStorage.getItem('@storage_key')
  } catch(e) {
    // read error
  }

  console.log('Done.')

}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}


const ItemPage = () => {
  
  const items ={
    itemName: '',
    price: '', 
    category: ''
  };

  const [values, setValues] = React.useState(items);

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

  };

  const handleSubmit = () => {
    console.log(values);
    storeData(values);
    
    

  };


  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
  
    console.log(keys);
    console.log(getData);
    //const obj = JSON.parse(getData);
    //console.log(obj.itemName);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }
  

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Add Item!</Text>

        <Box
          component="form"
          sx={{ 
            display: 'grid',
            '& > :not(style)': { m: 1},
          }}
          noValidate
          autoComplete="off"
        >
          
          
          
            <TextField name="itemName" onChange={handleChange} id="standard-item-name" value={values.name} type="text" label="Item Name" variant="outlined" />
            <TextField name="price" onChange={handleChange} id="standard-quantity" value={values.price} type="text" label="Price" variant="outlined" />
            <TextField name="category" onChange={handleChange} id="standard-quantity" value={values.category} type="text" label="Category" variant="outlined" />

            {/* <OutlinedInput
              id="outlined-adornment-weight"
              type="number"
              //value={values.weight}
              //onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            /> */}
            <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}> Add </Button>
          
            <Button onClick={()=>console.log(getData)} variant="contained">Async Storage</Button>
            <Button onClick={clearAll} variant="contained">Clear Async Storage</Button>
        </Box>


      </View>

    );
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default ItemPage;
