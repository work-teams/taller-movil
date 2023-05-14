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
