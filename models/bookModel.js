const mongoose = require('mongoose');

// Define the weather data schema
const weatherDataSchema = new mongoose.Schema({
  // cityName where the weather data is recorded (String, Required)
  // temperature in degrees Celsius (Number, Required)
  // zipCode for the location (String, Required)
  // humidity percentage (Number, Required)
  // weatherDescription (e.g., "Partly Cloudy") (String, Required)
});

// Create a model for WeatherData using the schema

module.exports = WeatherData;
