import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

class FirebaseStorageService {
  constructor() {
    this.storage = firebase.storage();
  }

  // Upload an image for a specific post
  async uploadPostImage(userId, postId, file) {
    try {
      const storageRef = this.storage.ref();
      const fileRef = storageRef.child(`users/${userId}/posts/${postId}/${file.name}`);
      await fileRef.put(file);
      const downloadUrl = await fileRef.getDownloadURL();
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading post image:', error);
      throw error;
    }
  }

  // Retrieve the download URL of a post image
  async getPostImageDownloadUrl(userId, postId, fileName) {
    try {
      const storageRef = this.storage.ref();
      const fileRef = storageRef.child(`users/${userId}/posts/${postId}/${fileName}`);
      const downloadUrl = await fileRef.getDownloadURL();
      return downloadUrl;
    } catch (error) {
      console.error('Error getting post image download URL:', error);
      throw error;
    }
  }

  // Delete a post image
  async deletePostImage(userId, postId, fileName) {
    try {
      const storageRef = this.storage.ref();
      const fileRef = storageRef.child(`users/${userId}/posts/${postId}/${fileName}`);
      await fileRef.delete();
    } catch (error) {
      console.error('Error deleting post image:', error);
      throw error;
    }
  }
}
const storageService = new FirebaseStorageService();
export default storageService;
