var users = [];

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

for (var i = 45; i > 0 ; i--) {
  users.push({
    id: generateUUID(),
    username: faker.name.findName(),
    address: faker.address.streetAddress(),
    age: faker.random.number(99),
    email: faker.internet.email()
  })
}

console.log( JSON.stringify({ users: users }));
