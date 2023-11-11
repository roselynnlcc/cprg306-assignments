import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Fetch all items
export const getItems = async (userId) => {
  try {
    const userItemsCollectionRef = collection(db, `users/${userId}/items`);
    const itemsSnapshot = await getDocs(userItemsCollectionRef);
    const mappedItems = itemsSnapshot.docs.map((itemDoc) => ({
      id: itemDoc.id,
      ...itemDoc.data(),
    }));

    return mappedItems;
  } catch (fetchItemsError) {
    console.error("Error in getItems: ", fetchItemsError);
  }
};

export const addItem = async (userId, item) => {
  try {
    const userItemsCollectionRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(userItemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};
