
  // ДОП. ДЗ
  // Вывести в консоль 'Алла', 'Пугачёва'
  // используя (НЕ for in) for + Object.keys || Object.values

  let user8 = {
    firstName: 'Алла',
    lastName: 'Пугачёва',
  };


const keys = Object.keys(user8);
for (let i = 0; i < keys.length; i++) {
    console.log(user8[keys[i]]);
}





