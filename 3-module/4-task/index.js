function showSalary(users, age) {

let user1 = users.filter(item => item.age <= age);
let resultArray = []

for (let i = 0; i < user1.length; i++) { 
  let user = user1[i]
let userString = user.name + ', ' + user.balance;
resultArray.push(userString);
}
return resultArray.join('\n');
}










