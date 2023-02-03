import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDOIBkU_VcI1HpDXkspkCpfuiqEH9KQEGw',
  authDomain: 'finalreactjs-cf8a2.firebaseapp.com',
  projectId: 'finalreactjs-cf8a2',
  storageBucket: 'finalreactjs-cf8a2.appspot.com',
  messagingSenderId: '764562920059',
  appId: '1:764562920059:web:33bde667905b8d53ae48de'
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export async function getProducts() {
  const productsRef = collection(firestore, 'products')
  const snapshot = await getDocs(productsRef)

  const products = snapshot.docs.map(elem => {
    const product = elem.data()
    product.id = elem.id
    return product
  })
  return (products)
}

export async function getProduct(idUrl) {
  const productsRef = collection(firestore, 'products')
  const docRef = doc(productsRef, idUrl)
  const snapshot = await getDoc(docRef)
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getProductsByCategory(categoryUrl) {
  const productsRef = collection(firestore, 'products')
  const q = query(productsRef, where('category', '==', categoryUrl))
  const snapshot = await getDocs(q)
  const products = snapshot.docs.map((elem) => {
    let product = elem.data()
    product.id = elem.id
    return product;
  })
  return (products)
}

export async function createOrder(order) {
  const orderRef = collection(firestore, "order");
  let respuesta = await addDoc(orderRef, order);
  return respuesta.id;
}

export default firestore
