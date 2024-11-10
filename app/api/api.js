// src/api/api.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://localhost:3000/api/auth'; // Replace with your backend URL

// Function to set the authorization token in the headers
const setAuthToken = async (headers) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
};

// Generic fetch function
const fetchAPI = async (endpoint, method = 'GET', body = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  await setAuthToken(headers); // Set the token if available

  const response = await fetch(`${baseURL}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  // Check for response errors
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json(); // Return the response as JSON
};

// Exporting the API functions
export const register = (data) => fetchAPI('/register', 'POST', data);
export const login = (data) => fetchAPI('/login', 'POST', data);
export const getProfile = () => fetchAPI('/profile');
