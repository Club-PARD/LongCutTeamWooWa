import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
async function urlToFile(url, filename) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], filename);
}

class FirebaseStorageService {
  constructor() {
    this.storage = firebase.storage();
  }


  // Upload an image for a specific post
  async uploadPostImage(userId, postId, file) {
    let fileForm = null;
    if (typeof file === "string") {
      // Convert URL to File object
      try {
        const response = await fetch(file);
        const blob = await response.blob();
        fileForm = new File([blob], "file");
      } catch (error) {
        console.error("Error converting URL to File:", error);
        throw error;
      }
    } else {
      fileForm = file; // 'file' is already a File object
    }
    if(fileForm == null){
      console.log('cancel uploadPostImage job...');
      return;
    }
    
    try {
      const storageRef = this.storage.ref();
      const fileRef = storageRef.child(`users/${userId}/posts/${postId}/${fileForm.name}`);
      await fileRef.put(fileForm);
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
