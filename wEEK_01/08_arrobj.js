let arr = [
  "Jitesh",
  "20",
  {
    name: "kirat",
    age: 28,
    cities: [
      "delhi",
      "mumbai",
      "chennai",
      "bangalore",
      "jaipur",
      {
        country: "United Kingdom",
        city: "London",
      },
    ],
  },
];

console.log(arr[2]);
console.log(arr[2].cities);
console.log(arr[2].cities[5]);
console.log(arr[2].cities[5].city);

const vall_1 = arr[2];
console.log(vall_1);
