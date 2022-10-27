let arrry = [];
const width = 1500;
const height = 700;

for (i = 0; i < width; i = i + 5) {
  for (j = 0; j < height; j = j + 5) {
    arrry.push({
      lat: i,
      lng: j,
    });
  }
}

console.log(arrry);
