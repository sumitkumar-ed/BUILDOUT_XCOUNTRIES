export const fetchCountries = async () => {
    try {
      const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };
  