var products = [];
var comments = [];

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

var productIds = [];

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

for (var i = 0; i < 65; i++) {
  productIds.push(generateUUID());
}

for (var i = 0; i < 65; i++) {
  var randomType = Math.floor(Math.random() * 3) + 0;

  products.push({
    id: productIds[i],
    name: names[randomType] + '-' + Math.floor(Math.random() * 80) + 10,
    type: types[randomType],
    description: faker.lorem.paragraph(),
    image: images[randomType],
    price: Math.floor(Math.random() * 99) + 30,
    quantity: Math.floor(Math.random() * 100) + 0,
    size: Math.floor(Math.random() * 25) + 20,
    madeIn: madeIn[Math.floor(Math.random() * 5) + 0]
  })
}

for (var i = 0; i < 200; i++) {
  var randomProductIndex = Math.floor(Math.random() * 65) + 0;

  comments.push({
    id: generateUUID(),
    productId: productIds[randomProductIndex],
    user: faker.name.findName(),
    comments: faker.lorem.sentence()

  })
}

console.log(JSON.stringify({
  "products": products,
  "comments": comments
}));
