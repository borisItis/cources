// Задача №1 - Асинхронка
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

// Задача №2 - Массивы

function missingWord(nums, str) {
  let indexStr = [];
  str = str.split(" ").join("").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    indexStr.push(i);
  }
  return "No mission today";
}

// Задача №3 - Переворот (изи)
function reverseWords(str) {
  let result = [];
  str.split(" ").forEach((e) => {
    result.push(e.split("").reverse().join(""));
  });

  return result.join(" ");
}
console.log(reverseWords("This is an example!"));

// Задача №4 - Строка (изи)
function sentencify(words) {
  let str = words.join(" ");
  return str[0].toUpperCase() + str.slice(1) + ".";
}
console.log(sentencify(["this", "is", "a", "sentence"]));

// Задача №5 - Найс (алгебра)
function multiples(m, n) {
  let arr = [];
  for (let i = 1; i <= m; i++) arr.push(n * i);
  return arr;
}
console.log(multiples(3, 5.0));

// Задача №6 - Массив + строка
function scramble(str, arr) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }
  return result.join("");
}
console.log(scramble("abcd", [0, 3, 1, 2]));

// Задача №7 - Фибоначчи
function skiponacci(n) {
  let a = 1;
  let b = 1;
  const result = [];
  for (let i = 0; i < n; i++) {
    let t = a;
    a = b;
    b = t + a;
    result.push(i % 2 == 0 ? t : "skip");
  }
  return result.join(" ");
}
console.log(skiponacci(10));
