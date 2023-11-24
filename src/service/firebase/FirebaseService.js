import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseConfig } from './firebaseConfig';

class FirebaseService {
  constructor() {
    if (!FirebaseService.instance) {

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      this.firestore = firebase.firestore();

      FirebaseService.instance = this;
    }

    return FirebaseService.instance;
  }

  // Create a document
  async createDocument(collection, data) {
    try {
      const docRef = await this.firestore.collection(collection).add(data);
      return docRef.id;
    } catch (error) {
      console.error('Error creating document:', error);
      throw error;
    }
  }

  // Read a document by ID
  async getDocument(collection, id) {
    try {
      const docRef = await this.firestore.collection(collection).doc(id).get();
      if (docRef.exists) {
        return { id: docRef.id, ...docRef.data() };
      }
      return null;
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  }

  // Read multiple documents based on a provided where clause
  async getDocumentsByQuery(collection, whereClause) {
    try {
      const collectionRef = this.firestore.collection(collection);
      const querySnapshot = await collectionRef.where(...whereClause).get();

      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });

      return documents;
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error;
    }
  }

  // Update a document
  async updateDocument(collection, id, data) {
    try {
      await this.firestore.collection(collection).doc(id).update(data);
      console.log('Document updated successfully!');
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  // Delete a document
  async deleteDocument(collection, id) {
    try {
      await this.firestore.collection(collection).doc(id).delete();
      console.log('Document deleted successfully!');
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  // Create, Read, Update, Delete methods...
}

const instance = new FirebaseService();
Object.freeze(instance);

export default instance;