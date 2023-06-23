import FirebaseService from './FirebaseService';

const collection = 'posts';

class PostService {
    
    constructor() {
      // Create an instance of the FirebaseService
      this.firebaseService = FirebaseService;
    }

    async verifyPostOwnership(postId, userId) {
        const post = await this.getPost(postId);
        return post && post.userId === userId;
    }

    async updatePost(postId, userId, postData) {
        try {
            const isOwner = await this.verifyPostOwnership(postId, userId);

            if (isOwner) {
                await FirebaseService.updateDocument(collection, postId, postData);
                console.log('Post updated successfully!');
            } else {
                console.error('Post not found or unauthorized to update.');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }
    
    async deletePost(postId, userId) {
        try {
            const isOwner = await this.verifyPostOwnership(postId, userId);

            if (isOwner) {
                await FirebaseService.deleteDocument(collection, postId);
                console.log('Post deleted successfully!');
            } else {
                error('Post not found or unauthorized to delete.');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }
  
    // Create a post
    async createPost(userId, postData) {
      try {
        // Combine the userId with the post data
        const post = {
          'userId' : userId,
          ...postData,
        };
  
        // Specify the collection where the posts are stored
        
  
        // Create the post document using the FirebaseService
        const postId = await this.firebaseService.createDocument(collection, post);
  
        return postId;
      } catch (error) {
            console.error('Error creating post:', error);
        throw error;
      }
    }

    async getPost(postId, userId) {
        try {
            const post = await FirebaseService.getDocument(collection, postId);
            
            if (post && post.userId === userId) {
                return post;
            }
            
            return null;
        } catch (error) {
            console.error('Error getting post:', error);
            throw error;
        }
    }
  
    async getUserPosts(userId) {
        try {
            const whereClause = ['userId', '==', userId];
            const posts = await FirebaseService.getDocumentsByQuery(collection, whereClause);
            return posts;
        } catch (error) {
            console.error('Error getting user posts:', error);
            throw error;
        }
    }

  }
  
  const postService = new PostService();
  export default postService;
  