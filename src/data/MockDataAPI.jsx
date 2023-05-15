import { Text } from 'react-native';
import React, { Component } from 'react';
import { places, categories, providers } from './dataArrays';

// interactuar con categoria
export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

// interactuar con lugares
export function getPlaces(categoryId) {
  const placesArray = [];
  places.map(data => {
    if (data.categoryId == categoryId) {
      placesArray.push(data);
    }
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

export function getPlacesByProvider(providerId) {
  const placesArray = [];
  places.map(data => {
    data.providers.map(index => {
      if (index[0] == providerId) {
        placesArray.push(data);
      }
    });
  });
  return placesArray;
}

// interactuar con proveedores
export function getProviderName(providerID) {
  let name;
  providers.map(data => {
    if (data.providerId == providerID) {
      name = data.name;
    }
  });
  return name;
}

export function getProviderUrl(providerID) {
  let url;
  providers.map(data => {
    if (data.providerId == providerID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getAllProviders(idArray) {
  const providersArray = [];
  idArray.map(index => {
    providers.map(data => {
      if (data.providerId == index[0]) {
        providersArray.push([data, index[1]]);
      }
    });
  });
  return providersArray;
}

// funciones de busqueda
export function getPlacesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const placesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlaces(data.id);
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

export function getPlacesByProviderName(providerName) {
  const nameUpper = providerName.toUpperCase();
  const placesArray = [];
  providers.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlacesByProvider(data.providerId);
      const unique = [...new Set(places)];
      unique.map(item => {
        placesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(placesArray)];
  return uniqueArray;
}
