import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import uuid from 'react-native-uuid';
let moment = require('moment');

export async function Order(data,key,shipingAddress,paymentMethod,maxCost,deliveryTimeFrame){
  let date = moment().utcOffset('+03:00').format('YYYY-MM-DD');
  let order={
    singleOrder:data,
    orderId:uuid.v4(),
    CustomerID:key,
    shipingAddress:shipingAddress,
    paymentMethod:paymentMethod,
    maxCost:maxCost,
    deliveryTimeFrame:deliveryTimeFrame,
    dateOrdered:date
    
  }
  try {
    const docRef = await addDoc(collection(db, "Orders"), order);
    if(docRef.id!==null && docRef.id!=='' && typeof docRef.id!=="undefined")
    {
      console.log('Added to orders');
    }
  } catch (error) {
    console.log(error);
  }
}