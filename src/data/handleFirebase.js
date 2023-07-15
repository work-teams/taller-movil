import { firebase } from './firebase'

export async function getCategoryById(categoryId) {
  const db = firebase.firestore();
  const categoryDoc = await db.collection('categories').doc(categoryId).get();

  if (categoryDoc.exists) {
    const categoryData = categoryDoc.data();
    return categoryData;
  }

  return null;
}

export async function getServiceName(serviceId) {
  const db = firebase.firestore();
  const serviceRef = db.collection('services').doc(serviceId);
  const serviceSnapshot = await serviceRef.get();

  if (serviceSnapshot.exists) {
    const serviceData = serviceSnapshot.data();
    return serviceData.name;
  }

  return null;
}

export async function getServiceUrl(serviceId) {
  const db = firebase.firestore();
  const serviceRef = db.collection('services').doc(serviceId);
  const serviceSnapshot = await serviceRef.get();

  if (serviceSnapshot.exists) {
    const serviceData = serviceSnapshot.data();
    return serviceData.photo_url;
  }

  return null;
}

// * * * * * * * * * * * * * * * * * * * *

export async function getServiceDescription(serviceId) {
  const db = firebase.firestore();
  const serviceDoc = await db.collection('services').doc(serviceId).get();

  if (serviceDoc.exists) {
    const serviceData = serviceDoc.data();
    return serviceData.description;
  }

  return null;
}

export async function getCategoryName(categoryId) {
  const db = firebase.firestore();
  const categoryDoc = await db.collection('category').doc(categoryId).get();

  if (categoryDoc.exists) {
    const categoryData = categoryDoc.data();
    return categoryData.name;
  }

  return null;
}

export async function getPlaces(categoryId) {
  const db = firebase.firestore();
  const placeDoc = await db.collection('places').doc(categoryId).get();

  if (placeDoc.exists) {
    const placeData = placeDoc.data();
    return placeData;
  }

  return null;
}

// * * * * * * * * * * * * * * * * * * * *
// modifica
export async function getPlacesByService(serviceId) {
  const placesArray = [];

  const db = firebase.firestore();
  const placesSnapshot = await db.collection('places').get();

  placesSnapshot.forEach((doc) => {
    const data = doc.data();
    const services = data.services;

    services.forEach((service) => {
      const serviceValues = Object.keys(service).map(Number);
      if (serviceValues.includes(serviceId)) {
        placesArray.push(data);
      }
    });
  });

  return placesArray;
}

export async function getNumberOfPlaces(categoryId) {
  const db = firebase.firestore();
  const placesSnapshot = await db.collection('places').get();

  let count = 0;
  placesSnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.categoryId === categoryId) {
      count++;
    }
  });

  return count;
}

export async function getAllServices(idArray) {
  const servicesArray = [];

  const db = firebase.firestore();
  const servicesSnapshot = await db.collection('services').get();

  idArray.forEach((index) => {
    const serviceId = index[0];
    const serviceName = index[1];

    servicesSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.serviceId === serviceId) {
        servicesArray.push([data, serviceName]);
      }
    });
  });

  return servicesArray;
}

// * * * * * * * * * * * * * * * * * * * *
// functions for search
export async function getPlacesByServiceName(serviceName) {

  const db = firebase.firestore();
  const servicesSnapshot = await db.collection('services').get();

  const nameUpper = serviceName.toUpperCase();
  const placesArray = [];

  servicesSnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.name.toUpperCase().includes(nameUpper)) {
      getPlacesByService(data.serviceId).then((places)=>{
        const unique = [...new Set(places)];
        unique.forEach(item => {
          placesArray.push(item);
        });
      })
      
    }

  })

  const uniqueArray = [...new Set(placesArray)];
  return uniqueArray;

}

export async function getPlacesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const placesArray = [];

  const db = firebase.firestore();
  const categoriesSnapshot = await db.collection('categories').get();

  categoriesSnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlaces(data.id); // return a vector of places
      places.forEach(item => {
        placesArray.push(item);
      });
    }
  });
  return placesArray;
}

export async function getPlacesByPlaceName(placeName) {
  const nameUpper = placeName.toUpperCase();
  const placesArray = [];

  const db = firebase.firestore();
  const placesSnapshot = await db.collection('places').get();

  placesSnapshot.forEach(doc => {
    const data = doc.data();
    if (data.title.toUpperCase().includes(nameUpper)) {
      placesArray.push(data);
    }
  });
  return placesArray;
}

// * * * * * * * * * * * * * * * * * * * *
// functions for users
export async function findUserByUsernameAndPassword(username, password) {
  const db = firebase.firestore();
  const usersRef = db.collection('users');
  const querySnapshot = await usersRef
    .where('username', '==', username)
    .where('password', '==', password)
    .get();

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    return userData;
  }

  return null;
}

export async function insertUser(username, password) {
  const db = firebase.firestore();
  const usersRef = db.collection('users');

  try {
    const newUserRef = await usersRef.add({
      username: username,
      password: password
    });

    return newUserRef.id;
  } catch (error) {
    return null;
  }
}
