import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { messaging } from "./firebase-config";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
};

const VAPID_KEY =
  "BM49dU1vqBM3kGPDeZiR6sT9x9cNKlJg_kJQ7EuMOT7EYCQJ0dJok-53Ykj5OqJZSKmPfCVYmj8veNOjMamR_Dk";

const FCM_TOKEN_COLLECTION = "fcmTokens";

export async function requestNotificationPermission(uid) {
  console.log("Requesting notification permissions...");
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    await saveMessagingDevice(uid);
  } else {
    console.log("Unable to get permission to notify");
  }
}

export async function saveMessagingDeviceToken(uid) {
  const msg = await messaging();
  const fcmToken = await getToken(msg, { vapidKey: VAPID_KEY });

  if (fcmToken) {
    console.log("Got FCM device token: ", fcmToken);
    //Save device token to Firestore
    const tokenRef = doc(db, FCM_TOKEN_COLLECTION, uid);
    await setDoc(tokenRef, { fcmToken }); //overwrites document if alredy exists
  } else {
    //Need to request permission to show notifications
    requestNotificationPermission(uid);
  }
}

// function requestPermission() {
//   console.log("siema");
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granyed ");
//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BM49dU1vqBM3kGPDeZiR6sT9x9cNKlJg_kJQ7EuMOT7EYCQJ0dJok-53Ykj5OqJZSKmPfCVYmj8veNOjMamR_Dk",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken:", currentToken);
//         } else {
//           console.log("can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission");
//     }
//   });
// }

// requestPermission();
