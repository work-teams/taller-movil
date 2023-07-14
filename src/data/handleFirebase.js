import { places, categories, services } from './dataArrays';
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

export function getServiceDescription(serviceId) {
  let description;
  services.map(data => {
    if (data.serviceId == serviceId) {
      description = data.description;
    }
  });
  return description;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getPlaces(categoryId) {
  const placesArray = [];
  places.map(data => {
    if (data.categoryId == categoryId) {
      placesArray.push(data);
    }
  });
  return placesArray;
}

// * * * * * * * * * * * * * * * * * * * *
// modifica
export function getPlacesByService(serviceId) {
  const placesArray = [];
  places.map(data => {
    data.services.map(index => {
      if (index[0] == serviceId) {
        placesArray.push(data);
      }
    });
  });
  return placesArray;
}

export function getNumberOfPlaces(categoryId) {
  let count = 0;
  places.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllServices(idArray) {
  const servicesArray = [];
  idArray.map(index => {
    services.map(data => {
      if (data.serviceId == index[0]) {
        servicesArray.push([data, index[1]]);
      }
    });
  });
  return servicesArray;
}

// * * * * * * * * * * * * * * * * * * * *
// functions for search
export function getPlacesByServiceName(serviceName) {
  const nameUpper = serviceName.toUpperCase();
  const placesArray = [];
  services.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlacesByService(data.serviceId);
      const unique = [...new Set(places)];
      unique.map(item => {
        placesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(placesArray)];
  return uniqueArray;
}

export function getPlacesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const placesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlaces(data.id); // return a vector of places
      places.map(item => {
        placesArray.push(item);
      });
    }
  });
  return placesArray;
}

export function getPlacesByPlaceName(placeName) {
  const nameUpper = placeName.toUpperCase();
  const placesArray = [];
  places.map(data => {
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
