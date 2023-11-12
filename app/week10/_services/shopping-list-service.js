import { db } from "../_utils/firebase";
import { collection, doc, getDocs, addDoc, deleteDoc, query } from "firebase/firestore";

// Fetch all items
export const getItems = async (userId) => {
  try {
    console.log("DB instance: ", db);
    console.log("UserId: ", userId);
    const userItemsCollectionRef = collection(db, "users", userId, "items");
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
    const userItemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(userItemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};


export const deleteItem = async (userId, itemId) => {
  try {
    const itemDocRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemDocRef);
  } catch (error) {
    console.error("Error in deleteItem: ", error);
  }
};