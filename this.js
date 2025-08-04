console.log(this);

function myFunction() {
  console.log(this);
}

// Вызовем функцию
myFunction();

const school = {
  name: "Shag",
  year: 2015,
  info: function () {
    console.log(this);
  },
  sentence: function () {
    console.log(this.name + this.year);
  },
};

console.log(school.info());
school.sentence();

const obj1 = {
  breed: "cat",
  hello: function () {
    console.log("Hello world");
    return this;
  },
  say: function () {
    console.log(this.breed);
  },
  changeBreed: function (newBreed) {
    this.breed = newBreed;
  },
  obj2: {
    breed: "Pasha",
    speak: function () {
      console.log("woof!");
      return this;
    },
    say: function () {
      console.log(this);
    },
    whoIsBitch: function (who) {
      console.log(`${this.breed} and ${who} are bitches`);
    },
  },
};

obj1.say();
// obj1.obj2.say();
// obj1.obj2.whoIsBitch("Anton");

obj1.changeBreed("Boris");
obj1.say();
console.log(obj1.breed);
// console.log(obj1);
// console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
// console.log(obj1.obj2);
// console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2

var objReg = {
  hello: function () {
    return this;
  },
}; //обычная функция - контекст привязывается в момент определения

console.log(objReg.hello());

var objArrow = {
  hello: () => this,
}; //стрелочная функция - контекст привязывается в момент исполнения

console.log(objArrow.hello()); //исполнил/вызвал в глобальной среде

const obj = {
  breed: "cat",
  hello: function () {
    console.log("Hello world");
    return this;
  },
  say: function () {
    console.log(this.breed);
  },
  changeBreed: function (newBreed) {
    this.breed = newBreed;
  },
  say2: function () {
    this.obj2.say();
  },
  obj2: {
    breed: "Pasha",
    speak: function () {
      console.log("woof!");
      return this;
    },
    say: function () {
      console.log(this);
    },
    whoIsBitch: function (who) {
      console.log(`${this.breed} and ${who} are bitches`);
    },
  },
};

// obj.obj2.say() //контекст - глобальный
obj.obj2.say.call(obj);
obj.obj2.whoIsBitch("Anton");
obj.obj2.whoIsBitch.call(obj, "dog"); //изменили контекст + параметры через заятую
obj.obj2.whoIsBitch.apply(obj, ["dog"]); //изменили контекст + параметры в массиве

function test() {
  console.log("hello world");
  console.log(this);
}

test.apply(obj);

function getInfo() {
  return `${this.name} is ${this.year} old`;
}

function getInfoWithData(addition, addition1) {
  return `${this.name} is ${this.year} old and ${addition}, ${addition1}`;
}

const student = {
  name: "Anton",
  year: 23,
};

console.log(getInfo.apply(student));
console.log(getInfoWithData.apply(student, ["employed", 1]));
console.log(getInfoWithData.call(student, "has money", 1));

var dog = {
  breed: "Beagles",
  lovesToChase: "rabbits",
};

function chase() {
  console.log(this.breed + " loves chasing " + this.lovesToChase + ".");
}

dog.foo = chase;
dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

chase(); //так эту функцию лучше не вызывать

chase.apply(dog); //контекст + параметры в массиве
chase.call(dog); //контекст + параметры через запятую

const chaseDog = chase.bind(dog); //в 2 этапа, на 1 - привязка контекста
console.log(chaseDog);
chaseDog(); // вызов с обычными параметрами

// NEW
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.writeInfo = function () {
    console.log(`${this.name} by ${this.author} was written in ${this.year}`);
  };
}

const mir = new Book("Война и мир", "Толстой", 1888);
console.log(mir);
mir.writeInfo();
mir.writeInfo.apply(window);
mir.writeInfo();
