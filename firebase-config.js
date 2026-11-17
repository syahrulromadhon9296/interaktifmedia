// ===================================================================
//  PENGATURAN FIREBASE
//  1. Salin nilai dari Firebase Console → Project settings → Your apps
//  2. Tulis email admin di ADMIN_EMAILS (harus sama dengan firestore.rules)
//  Nilai di bawah ini aman untuk publik: keamanan data diatur oleh firestore.rules.
// ===================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDg2l4HEX3RelzqA3eB1OCFFPPNrG4LATs",
  authDomain: "interaktifmedia.firebaseapp.com",
  projectId: "interaktifmedia",
  storageBucket: "interaktifmedia.firebasestorage.app",
  messagingSenderId: "1034895929227",
  appId: "1:1034895929227:web:124f346e26e5ad7beb898e"
};

// Email yang boleh membuka dashboard admin (huruf kecil semua).
export const ADMIN_EMAILS = [
  "syahrulromadhon9296@gmail.com",
];
