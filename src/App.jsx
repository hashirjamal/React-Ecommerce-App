import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/home/Homepage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInPage from "./pages/sign-in-page/SignInPage"
// import auth from "./firebase/firebase.utils"
import { getAuth,onAuthStateChanged } from 'firebase/auth'
// import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore'
import {auth} from "./firebase/firebase.utils"
function App() {
  
  let [userInfo,setUserInfo] = useState(null)
  useEffect(()=>{
    let unsub = onAuthStateChanged(auth,async (user)=>{
      // console.log(user,typeof(user));
      if(user){
        console.log("calling create-profile-doc...")
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef,snapshot=>{
            // console.log("Snapshot doc: ". snapshot.data() )
          setUserInfo(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }
          )
      })
    }
    else{
      setUserInfo(
        {
          currentUser: user
        }
      )
    }

    })
    
    return ()=>unsub();
  },[])
  
  console.log(userInfo)


  const routes = createBrowserRouter(
    [
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/shop",
        element: <ShopPage/>
      },
      {
        path:"/sign-in-sign-up",
        element: <SignInPage  />
      },
    ]
  )

  return (
    <>
   <Header currentUser ={userInfo} auth={auth} />
     <RouterProvider router={routes} />
    </>
  )
}

export default App
