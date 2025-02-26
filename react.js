// Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfMGoHRGUjisHo-oCRND6XOlt_eG-5EC0",
  authDomain: "realtime-doc-editor-b3893.firebaseapp.com",
  projectId: "realtime-doc-editor-b3893",
  storageBucket: "realtime-doc-editor-b3893.firebasestorage.app",
  messagingSenderId: "360498904704",
  appId: "1:360498904704:web:b84f11c999ab89c3f4f065",
  measurementId: "G-5K34NEQMGH"
};
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database(app);
  
  // Get a reference to the editor element
  const editor = document.getElementById('editor');
  
  // Get a reference to the 'document' node in Firebase Realtime Database
  const documentRef = database.ref('document');
  
  // Listen for changes in the editor and update Firebase
  editor.addEventListener('input', () => {
    const content = editor.value;
    documentRef.set(content);  // Send the updated content to Firebase
  });
  
  // Listen for changes in Firebase and update the editor
  documentRef.on('value', (snapshot) => {
    const content = snapshot.val();
    if (content !== editor.value) {
      editor.value = content;  // Update the editor if the content in Firebase changes
    }
  });
  