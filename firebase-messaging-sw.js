importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBZJZvAD5_2VxuZ-VRLVShISqTA-8ylIxU",
  authDomain: "the-lamp-55d80.firebaseapp.com",
  projectId: "the-lamp-55d80",
  storageBucket: "the-lamp-55d80.appspot.com",
  messagingSenderId: "24684558102",
  appId: "1:24684558102:web:41b16eb13d3ec097b74237",
  measurementId: "G-PZXVSM51BQ"
});

const messaging = firebase.messaging();

// Notification Display
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
