var products = [];

var names = [
  'SH',
  'JK',
  'WC'
];

var images = [
  'http://demo.harnishdesign.net/opencart/bigshop/v2/image/cache/catalog/demo/apple_cinema_30-175x175.jpg',
  'http://demo.harnishdesign.net/opencart/bigshop/v2/image/cache/catalog/demo/hp_1-175x175.jpg',
  'http://www.motorward.com/wp-content/images/2013/04/Ford-Mustang-50th-Anniversary-Shinola-Watch-175x175.jpg'
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
