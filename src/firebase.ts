import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD2iGQrtCn8kWBOs-I4-nspGY7YJtsJDQY",
  authDomain: "file-sphere.firebaseapp.com",
  projectId: "file-sphere",
  storageBucket: "file-sphere.appspot.com",
  messagingSenderId: "310829502206",
  appId: "1:310829502206:web:edbf332905bbd34a43dfaf",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
