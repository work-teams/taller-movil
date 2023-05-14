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
