let calculator = {
num1: 0,
num2: 0,

  read(a, b) {
   this.num1 = a, this.num2 = b;
  },

    mul() {
   return this.num1 * this.num2;
  },

    sum() {
   return this.num1 + this.num2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


// Доп ДЗ
// Решить через reduce
// https://learn.javascript.ru/array-methods#reduce-reduceright
