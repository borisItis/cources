const anton = {
  name: "Anton",
  year: 23,
  instrument: "Guitar",
  say: function () {
    console.log(1, this);
  },
};

const pasha = {
  name: "Pasha",
  year: 23,
  work: "Factory",
  say: function () {
    console.log(2, this);
  },
  sayMore: function () {
    console.log("Fuck", this.name);
  },
};

anton.__proto__ = pasha;
// Object.setPrototypeOf(anton, pasha);

console.log(anton);
console.log(anton.work);

anton.sayMore();
anton.__proto__.sayMore();

function BookConstructor(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

BookConstructor.prototype.sayAuthor = function () {
  console.log(this.author);
};
BookConstructor.prototype.writeInfo = function () {
  console.log(`${this.name} by ${this.author} was written in ${this.year}`);
};

const mirBook = new BookConstructor("Война и мир", "Толстой", 1888);

console.log(mirBook);

mirBook.writeInfo();
mirBook.sayAuthor();

//1. Создать конструктор ItCompany с вызовом логики конструктора Company
//Родительский конструктор
function Company(name, year, ceo, isStable) {
  this.name = name;
  this.year = year;
  this.ceo = ceo;
  this.isStable = isStable;
  this.checkIsStable = function () {
    return this.isStable ? "Все заебись" : "Антон просрал";
  };
}

Company.prototype.checkStable = function () {
  return this.isStable ? "Все заебись" : "Уёбы";
};

function ItCompany(name, year, ceo, isStable, specific) {
  Company.call(this, name, year, ceo, isStable); //вызываем конструктор родителя
  this.specific = specific;
}

// 2. Задать объекту `ItCompany.prototype` прототип от `Company`
Object.setPrototypeOf(ItCompany.prototype, Company.prototype);

// 3. Добавить новые методы к `ItCompany.prototype`
ItCompany.prototype.checkSpecific = function () {
  return (this.specific = "Web" ? "Топыыыы" : "Хмммм");
};

const abyron = new ItCompany("Abyron", 2019, "Yauheni", true, "Web");
console.log(abyron);
console.log(abyron.checkStable());
console.log(abyron.checkSpecific());

const torgMash = new Company("TorgMash", 1960, "Her", false);
console.log(torgMash);
console.log(torgMash.checkStable());
console.log(torgMash.checkSpecific()); // checkSpecific только существует в ItCompany

// Классы - синтаксический сахар
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }

  isGraduated() {
    return this.grade === 0;
  }
}
