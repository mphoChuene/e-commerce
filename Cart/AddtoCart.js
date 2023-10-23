import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

export async function AddtoCart(data){
  try {
    const docRef = await addDoc(collection(db, "Cart"), data);
    if(docRef.id!==null && docRef.id!=='' && typeof docRef.id!=="undefined")
    {
      console.log('Added to cart');
    }
  } catch (error) {
    console.log(error);
  }
}