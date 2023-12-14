import { Client, Databases, Account, ID,Query} from 'appwrite';
import conf from '../conf/conf';
class Auth {
   successURL = 'http://localhost:5173/';
  failureURL = 'http://localhost:5173/';
  client = new Client();
  account = new Account(this.client);
//   databases = new Databases(this.client);
  constructor() {
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(conf.appwriteProjectId);
  }
  // loginWithGoogle=()=>{
  //   this.account.createOAuth2Session('google',this.successURL , this.failureURL);
  //   return new Promise();
  // }
  loginWithGoogle = () => {
    return new Promise((resolve, reject) => {
          this.account.createOAuth2Session('google',this.successURL , this.failureURL)
              .then(() => {
          resolve(); // Resolve the promise when the OAuth2 session is created
        })
        .catch((error) => {
          reject(error); // Reject the promise if there is an error
        });
    });
  };

  getCurrentUser=async()=>{
    try {
      console.log("At getCurrentUser");
      const session = await account.getSession('current');
      console.log("CurrentUser data:",session);
      return session;
    } catch (error) {
      console.log("GetCurrentUser Error:",error);
      return error;
    }
  }
  createDocument=async(songName,songId,songImageId,songAuthor)=>{
    console.log("email and username",email,username);
    try {
      const response =await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        conf.appwriteDocumentId,
        { songName,
          songId,
          songImageId,
          songAuthor,
      }
    );
    return response;

     } catch (error) {
      console.log("Appwrite createDocument error:",error)
      throw error;
    }


  }

//   getAllSongs=async()=>{
//     try {
//       const response =await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId)
//       console.log(response.documents);
//       return response.documents;  
//     } catch (error) {
//       console.log("getUserDetailsDocument error:",error);
//       throw error.message;
      
//     }
//   }

//   updateDocument=async(username,totalPoints)=>{
//     try {
//       console.log("username at updataeDocument",username);
//     await  this.databases.updateDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         username,{
//           totalPoints:totalPoints+5

//         }
//         );
    
    
//     } catch (error) {
//       console.log("Error at updateDocument:",error);
//       throw error
//     }
//   }

//   getUserDetailsDocument=async(userEmail)=>{
//     try {
//       const response =await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,[
//         Query.equal("userEmail", [`${userEmail}`])
//       ]);
//       console.log(response.documents[0]);
//       return response.documents[0];  //response undefined need value to store at redux 
//     } catch (error) {
//       console.log("getUserDetailsDocument error:",error);
//       throw error.message;
      
//     }
//   };






}


const auth = new Auth();
export default auth;