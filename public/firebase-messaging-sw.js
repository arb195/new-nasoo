// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyABpERQvxdIDNKGDhncNzKTxkMwys3O3Fs",
    authDomain: "fabled-zone-290622.firebaseapp.com",
    projectId: "fabled-zone-290622",
    storageBucket: "fabled-zone-290622.appspot.com",
    messagingSenderId: "1095213314299",
    appId: "1:1095213314299:web:bd42d3f43de76aea28805e",
    measurementId: "G-LZQ6S5PBRS"  
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});