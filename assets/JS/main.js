// Using innerText (similar to textContent)
// document.getElementById("guest-name").innerText = "Your text here";
// Setting text content
// document.getElementById("guest-name").textContent = "Brother";

// const full_name=prompt("Enter your name: ");
// const guest_name=document.getElementById("guest-name");
// Checking if input is not empty
// if(full_name){
//     guest_name.innerText=full_name;
// }
// else if(full_name==null){
//     guest_name.innerText="Anonymous";
// }
// else{
//     guest_name.innerText="Guest";
// }

const tripDistanceEl = document.getElementById("trip_distanceKM");
const fuelEffEl = document.querySelector("#fuel-efficiency");
const fuelCostEl = document.getElementById("fuel_price");
const calculateBtnEl = document.getElementById("calculate_btn");
const resetButtonEl = document.getElementById("reset_btn"); // assuming your reset button has this ID

// console.log(tripDistanceEl)

// const trip_distanceKM = tripDistanceEl.value;
// const fuel_efficiency = fuelEffEl.value;
// const fuel_price = fuelCostEl.value;
// const fuel_consumption=10;

// ====================
// Mileage calculator
// const mileage=trip_distanceKM/fuel_efficiency; // equals 11.11
// fuel cost per KM
// ====================
// const fuel_cost_per_km = (trip_distanceKM / fuel_efficiency) * fuel_price;
// const fuelCost = fuel_cost_per_km.toFixed(2);
// console.log(`Trip Fuel Cost: ${fuelCost}`)

// const result = document.getElementById("result");
// result.innerText = `Trip Fuel Cost: \u20B9 ${fuelCost}`;

// // rupee symbol
// const rupeeSymbol = '\u20B9';

// const fuel_distance=trip_distanceKM/mileage;
// const fuel_cost=fuel_distance*fuel_price;

// reset form
// window.resetForm = () => {
//     tripDistanceEl.value = "";
//     fuelEffEl.value = "";
//     fuelCostEl.value = "";
//     result.innerText = "";
// }

// calculate fuel cost
calculateBtnEl.addEventListener("click", (e) => {
    e.preventDefault();

    const trip_distanceKM = tripDistanceEl.value;
    const fuel_efficiency = fuelEffEl.value;
    const fuel_price = fuelCostEl.value;

    const fuel_cost_per_km = (trip_distanceKM / fuel_efficiency) * fuel_price;
    const fuelCost = fuel_cost_per_km.toFixed(2);

    const result = document.getElementById("result");
    result.innerText = `Trip Fuel Cost: \u20B9 ${fuelCost}`;
});

resetButtonEl.addEventListener("click", () => {
    tripDistanceEl.value = "";
    fuelEffEl.value = "";
    fuelCostEl.value = "";
    result.innerText = "";
});







// Fuel economy calculator
// const fuel_efficiency=document.getElementById("fuel-efficiency");
// const fuel_consumption=document.getElementById("fuel-consumption");
// const fuel_price=document.getElementById("fuel-price");
// const fuel_cost=document.getElementById("fuel-cost");
// const fuel_distance=document.getElementById("fuel-distance");
// const calculate_fuel_cost=()=>{
//     const fuel_efficiency_value=fuel_efficiency.value;
//     const fuel_consumption_value=fuel_consumption.value;
//     const fuel_price_value=fuel_price.value;
//     const fuel_distance_value=fuel_distance.value;

//     const fuel_cost_value=(fuel_distance_value/fuel_efficiency_value)*fuel_consumption_value*fuel_price_value;
//     fuel_cost.innerText=fuel_cost_value.toFixed(2);
// }

// fuel_efficiency.addEventListener("input",calculate_fuel_cost);
// fuel_consumption.addEventListener("input", calculate_fuel_cost);
// fuel_price.addEventListener("input", calculate_fuel_cost);

// calculate_fuel_cost();

// // Toggle menu
// const menu=document.getElementById("menu");

// menu.addEventListener("click",()=>{
//     menu.classList.toggle("show");
// });

// fuel cost for per kilometer
// const fuel_efficiency=document.getElementById("fuel-efficiency");
// const fuel_consumption=document.getElementById("fuel-consumption");

// const calculate_fuel_cost_per_km=()=>{
//     const fuel_efficiency_value=fuel_efficiency.value;
//     const fuel_consumption_value=fuel_consumption.value;

//     const fuel_cost_per_km=(fuel_consumption_value/fuel_efficiency_value);
//     fuel_cost_per_km.innerText=fuel_cost_per_km.toFixed(2);
// }
// fuel_efficiency.addEventListener("input", calculate_fuel_cost_per_km);
// fuel_consumption.addEventListener("input", calculate_fuel_cost_per_km);
// calculate_fuel_cost_per_km();

// // Toggle dark mode
// const dark_mode=document.getElementById("dark-mode");
// const body=document.querySelector("body");

// dark_mode.addEventListener("change",()=>{
//     body.classList.toggle("dark");
// });

// // Change background color

// const background_color=document.getElementById("background-color");

// background_color.addEventListener("input",()=>{
//     body.style.backgroundColor=background_color.value;
// });

// formula for trip distance along with vehicle's mileage with per litre of Fuel?


// Trip distance
//  fuel efficiency
// fuel cost

