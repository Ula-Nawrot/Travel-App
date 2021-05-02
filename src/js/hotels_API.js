import { async } from "regenerator-runtime";
//const axios = require("axios");
//const BASE_API_URL = `https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels`;

export const apiAccess = async function () {
  try{
    const res = await fetch(`https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels`);
    const data = await res.json();
    return data;
    //console.log(res,data);
    if(!res.ok) throw new Error (`${data.message}`)
  }
  catch (err){
    alert(err)
  }
}


// export default class ApiAccess {
//   async getHotels() {
//     try{
//           const res = await fetch(`https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels`);
//           const data = await res.json();
//           return data;
//         }
//         catch (err){
//           alert(err)
//         }
//   }
// }

// export async function getHotels(countryName) {
//   //const url = `${BASE_API_URL}?q=${countryName}&appid=${API_KEY}`;
//   const url = `${BASE_API_URL}`;
//   console.log(countryName);
//   const response = await axios.get(url);
//   return {
//     data: response.data,
//   };
// }

// async function getHotelsHandler() {
//   try {
//     const myData = await getHotels("Polska");
//     console.log(myData.data);
//   } catch (err) {
//     alert(err);
//   }
// }

// export default class ApiAccess {
//   constructor() {
//     //this.url = `${BASE_API_URL}?q=${countryName}&appid=${API_KEY}`;
//     this.url = `${BASE_API_URL}`;
//     this.dataHotels = {};
//   }

//   async testMaciek() {
//     try {
//       const res = await axios.get(this.url);
//       //console.log(res.data);
//       return res.data;
//     } catch (error) {}
//   }

//   async testMaciek2() {
//     const res = this.testMaciek();
//     return await res;
//   }

//   async getHotels() {
//     try {
//       console.log(this.url);
//       const response = await axios.get(this.url);
//       return {
//         data: response.data,
//       };
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   async getHotelsHandler() {
//     try {
//       const myData = await this.getHotels().then((v) => {
//         return v;
//       });
//       this.dataHotels = myData.data;
//       //console.log(this.dataHotels);
//     } catch (err) {
//       alert(err.message + `tu jest problem`);
//     }
//   }
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
