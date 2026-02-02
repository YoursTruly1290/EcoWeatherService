class WeatherService {
    static getForecast() {
      return Array.from({ length: 5 }, (_, index) =>
        WeatherService.getForecastForDate(new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000))
      );
    }
  
    static getForecastForDate(date) {
      
  
    static getSummary(temp) {
    
        return "Cool";
      } else if (temp > -10) {
        return "Chilly";
      } else if (temp > -20) {
        return "Bracing";
      } else {
        return "Freezing";
      }
    }
  
    static getRandomInt(min, max) {
      
    }
  }
  
  class WeatherForecast {
    constructor(date, temperatureC, summary) {
      this.date = date;

      this.summary = summary;
    }
  

}

module.exports = { WeatherService, WeatherForecast };
