const BASE_URL = 'http://localhost:5001';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data =await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // Re-throw the error to handle it in the component
  }
};
