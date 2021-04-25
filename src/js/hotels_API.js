import { async } from "regenerator-runtime";
const axios = require("axios");

const BASE_API_URL = `https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels`;

export async function getHotels(countryName) {
  //const url = `${BASE_API_URL}?q=${countryName}&appid=${API_KEY}`;
  const url = `${BASE_API_URL}`;
  console.log(countryName);
  const response = await axios.get(url);
  return {
    data: response.data,
  };
}

// const myData = '';

// async function getHotel() {
//   const url = `https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels`;
//   const response = await axios.get(url);
//   return {
//     data: response.data,
//   };
// }



export const data2 = [
  {
    Polska: [
      {
        name: "Jasek Premium Hotel Wrocław",
        stars: 3,
        price: 160,
        currency: "PLN",
        location: {
          country: "Polska",
          district: "Psie Pole",
          city: "Wrocław",
          postcode: "51-180",
          street: "ul. Sułowska",
          housNumber: "39",
          latitude: 51.174933153829116,
          longitude: 17.02323208059635,
        },
        facilities: [
          {
            name: "TV",
            description: "",
          },
          {
            name: "Sejf",
            description: "",
          },
          {
            name: "Bezpłatny parking",
            description: "Dotyczy tylko samochodów osobowych",
          },
        ],
      },
      {
        name: "Aparthotel Stare Miasto",
        stars: 4,
        price: 380,
        currency: "PLN",
        location: {
          country: "Polska",
          district: "Stare Miasto",
          city: "Kraków",
          postcode: "31-007",
          street: "ul. Gołębia",
          housNumber: "2",
          latitude: 50.06016992980446,
          longitude: 19.93581000379192,
        },
        facilities: [
          {
            name: "TV",
            description: "",
          },
          {
            name: "Sejf",
            description: "",
          },
          {
            name: "Bezpłatny parking",
            description: "Dotyczy tylko samochodów osobowych",
          },
        ],
      },
      {
        name: "Radisson Blu Resort Swinoujscie",
        stars: 5,
        price: 380,
        currency: "PLN",
        location: {
          country: "Polska",
          district: null,
          city: "Świnoujście",
          postcode: "72-600",
          street: "ul. Baltic Park Molo",
          housNumber: "2",
          latitude: 53.9194281603697,
          longitude: 14.260031632972321,
        },
        facilities: [
          {
            name: "TV",
            description: "",
          },
          {
            name: "Sejf",
            description: "",
          },
          {
            name: "Bezpłatny parking",
            description: "Dotyczy tylko samochodów osobowych",
          },
        ],
      },
    ],
  },
];
