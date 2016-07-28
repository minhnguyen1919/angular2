var products = [];

var names = [
  'SH',
  'JK',
  'WC'
];

var images = [
  'http://www.hockeyireland.com/image/cache/data/Adidas/Shoes/2016/AQ6507-165x165.jpg',
  'http://www.hockeyireland.com/image/cache/data/Reece/breathable-comfort-jacket-unisex-navy_1-165x165.jpg',
  'http://priyojinish.com/image/cache/data/Jewellary/0000054_fancy-love-watch-for-ladies-165x165.jpeg'
];

var types = [
  'Shoes',
  'Jacket',
  'Watches'
];

var madeIn = [
  'Gemany',
  'USA',
  'Vietnam',
  'Thailand',
  'Japan'
];



for (var i = 0; i < 65; i++) {
  var randomType = Math.floor(Math.random() * 3) + 0;

  products.push({
    name: names[randomType] + '-' + Math.floor(Math.random() * 80) + 10,
    type: types[randomType],
    image: images[randomType],
    price: Math.floor(Math.random() * 99) + 30,
    quantity: Math.floor(Math.random() * 100) + 0,
    size: Math.floor(Math.random() * 25) + 20,
    madeIn: madeIn[Math.floor(Math.random() * 5) + 0]
  })
}

JSON.stringify(products);
