class WeatherService {
    static getForecast() {
      return Array.from({ length: 5 }, (_, index) =>
        WeatherService.getForecastForDate(new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000))
      );
    }
  
    static getForecastForDate(date) {
      const temp = WeatherService.getRandomInt(-30, 55);
      const summary = WeatherService.getSummary(temp);
      return new WeatherForecast(date, temp, summary);
    }
  
    s
      } else if (temp > -10) {
        return "Chilly";
      } else if (temp > -20) {
        return "Bracing";
      } else {
        return "Freezing";
      }
    }
  
    static getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
  class WeatherForecast {
    constructor(date, temperatureC, summary) {
      
      this.temperatureC = temperatureC;
      this.summary = summary;
    }
  
    get temperatureF() {

}

module.exports = { WeatherService, WeatherForecast };
