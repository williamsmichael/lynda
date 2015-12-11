var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red", 
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange", // no image
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg", // no color
  link: "heirloomRose"
});

var tantalizingTulips = new app.singleFlower({
  name: "Tantalizing tulips",
  price: 18.95,
  color: "blue"
});

var fleurDeLis = new app.singleFlower({
  name: "Fleur-de-lis",
  price: 28.75,
  color: "gold"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses
]);

var europeanFlower = new app.FlowersCollection([
  tantalizingTulips, fleurDeLis
]);

// flowerGroup.add(heirloomRoses);
// flowerGroup.remove(redRoses);

tantalizingTulips.set("originCountry", "Holland");

console.log(flowerGroup.toJSON());
console.log(europeanFlower.toJSON());

