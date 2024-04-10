const cars = require("../cars.json");

module.exports = async function displayCars(context, req) {
 try {
    context.res = {
        body: cars,
    };
    
 } catch (error) {
    context.res = {
        body: {message: "Error dispalying cars", error},
    };
 }
}