// import { Text } from 'react-native';
// import React, { Component } from 'react';
import { places, categories, services } from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getServiceName(serviceId) {
  let name;
  services.map(data => {
    if (data.serviceId == serviceId) {
      name = data.name;
    }
  });
  return name;
}

export function getServiceUrl(serviceId) {
  let url;
  services.map(data => {
    if (data.serviceId == serviceId) {
      url = data.photo_url;
    }
  });
  return url;
}

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

// functions for search
export function getPlacesByServiceName(serviceName) {
  const nameUpper = serviceName.toUpperCase();
  const placesArray = [];
  services.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
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
