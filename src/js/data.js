export const data = [
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
  
  // const showHotel = async function () {
//     try{
//         const res = await fetch('https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels');

//         const data = await res.json();

//         if (!res.ok) throw new Error(`${data.message} (${res.status})`)
//         console.log(res,data);
//     } catch (err){
//         alert(err)
//     }
// };

// showHotel();