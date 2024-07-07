import {initializeApp} from "firebase/app"
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";


const config = {
    apiKey: "AIzaSyBD7z7F_bCPaoWflU6p7m-sFj8tyNZZFME",
  authDomain: "ecommerce-learning-project.firebaseapp.com",
  projectId: "ecommerce-learning-project",
  storageBucket: "ecommerce-learning-project.appspot.com",
  messagingSenderId: "454219879131",
  appId: "1:454219879131:web:5da4871c0aa88a787bf2fe",
  measurementId: "G-F9KKTVKR6F"

}


const app = initializeApp(config);


export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});
//this function opens the pop up window to log in with google
export const signinWithGoogle = ()=>signInWithPopup(auth,provider)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("info of signed in user");
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



  const db =  getFirestore(app);


export const addDisplayName = async (currentUser,id)=>{
let {displayName,email} = currentUser;
    try{

      await setDoc(doc(db,"users",id),{
        displayName,
        email,
        createdAt: new Date(),
        
      })
      console.log("Display Name updated")
    }
    catch(err){
      console.log(err.message,"Error while logging in new user")
    }

  }

  //this function checks if the user is signed in or not. If yes then it checks if the user info is stored in DB or not . If no then it stores it in the users collection in the db.
  export const createUserProfileDocument = async (currentUser,additionalData) =>{
    if(!currentUser) return;
      const userRef = doc(db,'users',`${currentUser.uid}`);
      const userSnap = await getDoc(userRef);
      console.log(userRef,userSnap);

      if(!userSnap.exists()){
        const {displayName,email} = currentUser;
        console.log(displayName,"create profile doc");
        try{

          await setDoc(doc(db,"users",currentUser.uid),{
            displayName,
            email,
            createdAt: new Date(),
            
          })
        }
        catch(err){
          console.log(err.message,"Error while logging in new user")
        }
      }
        
        

      return userRef;
  }