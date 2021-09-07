"use strict";
let arr1 = [
    1,
    2,
    3,
    0,
    0,
    ,
    ,
    0,
    0,
    4,
    5,
    1,
    2,
    2,
    5,
    7,
    9,
    0,
    0,
    ,
    0,
    0,
    ,
    213,
    2,
    ,
    4,
    8,
    6,
    4,
  ],
  arr2 = ["str", 1, 2, 3, 4, 0, 0, 0, 2, 3, 4];

// Task 1 lvl 1 variant 1

let summArr = (arr) =>
  arr.filter((el, i) => !(el % 2)).reduce((acc, value) => acc + value);

console.log(summArr(arr1));

// Task 1 lvl 1 variant 2
let summArr1 = (arr) => {
  let res = 0;
  arr.forEach((el) => {
    el % 2 == 0 ? (res += el) : "";
  });
  return res;
};

console.log(summArr1(arr1));

// Task 1 lvl 1 variant 3

let summArr2 = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) result += arr[i];
  }
  return result;
};

console.log(summArr2(arr1));

// Task 1 lvl 2 variant 1

let notNullArr = (arr) => arr.filter((key) => key > 0).join(" ");

console.log(notNullArr(arr1));

// Task 1 lvl 2 variant 2

let notNullArr1 = (arr) => {
  let result = [];

  arr.forEach((el) => {
    if (el > 0) result.push(el);
  });
  return result.toString();
};

console.log(notNullArr1(arr1));

// Task 1 lvl 2 variant 3

let notNullArr2 = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result += `${arr[i]},`;
  }
  console.log(typeof result);
  return result;
};

console.log(notNullArr2(arr1));

// Task 2 lvl 1 variant 1

let nullIndexArr = (arr) => {
  let res = [];
  arr.forEach((el, i) => {
    if (el == 0) res.push(i);
  });
  return res;
};

console.log(nullIndexArr(arr1));

// Task 2 lvl 1 variant 2

let nullIndexArr1 = (arr) => {
  let res = [];
  arr.filter((el, i) => {
    if (el == 0) res.push(i);
  });
  return res;
};
console.log(nullIndexArr1(arr1));

// Task 2 lvl 1 variant 3

let nullIndexArr2 = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] == 0 ? res.push(i) : "";
  }
  return res;
};

console.log(nullIndexArr2(arr1));

function nullIndexArr3(arr, i) {
  if (arr == 0) console.log(i);
}

arr1.filter(nullIndexArr3);

// Task 3 lvl 1 variant 1

let arrConcat = arr1.concat(arr2).join();
console.log(arrConcat);

// Task 3 lvl 1 variant 2

let arrConcat1 = `${arr1},${arr2}`;

console.log(arrConcat1);

// Task 3 lvl 1 variant 3

let arrConcat2 = (arr1, arr2) => {
  for (let i = arr1.length, j = 0; j < arr2.length; j++, i++) {
    arr1[i] = arr2[j];
  }
  return arr1.toString();
};

console.log(arrConcat2(arr1, arr2));

// Task 4 lvl 2 variant 1

let str = "1234";

let palindrome = (str) => {
  let revStr = str.split("").reverse().join("");
  str === revStr ? console.log("palindrome") : console.log("not palindrome");
};
palindrome(str);

// Task 4 lvl 2 variant 2

let palindrome1 = (str) => {
  let str1 = "",
    str2 = "";
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    (str1 += str[i]), (str2 += str[j]);
  }
  str1 == str2 ? console.log("palindrome") : console.log("not palindrome");
};

palindrome1(str);

// Task 2 lvl 2

let map = new Map();

let userObj1 = {
    id: 1,
    name: "Ivan",
    surname: "Petrichenko",
  },
  userObj2 = {
    id: 2,
    name: "Denis",
    surname: "Meschiryakov",
  };
map.set(userObj1.id, userObj1.name);
map.set(userObj2.id, userObj2.name);
console.log(map);

// Task 5 lvl 2

let worker = {
  name: "Ivan",
  surname: "Petrichenko",
  exp: 7,
  wages: 5000,
  fullName: function () {
    return this.name + " " + this.surname;
  },
  surcharge: function () {
    if (this.exp >= 5 && this.exp < 8) {
      return this.wages * 1.05;
    } else if (this.exp >= 8) {
      return this.wages * 1.1;
    } else {
      return this.wages;
    }
  },
};

console.log(worker.fullName());
console.log(worker.surcharge());

// Task 6 lvl 2

class worker1 {
  name() {
    return "Ivan";
  }
  surname() {
    return "Petrichenko";
  }

  wages() {
    return 5000;
  }
  fullName() {
    return this.name() + " " + this.surname();
  }
  surcharge() {
    if (this.exp >= 5 && this.exp < 8) {
      return this.wages() * 1.05;
    } else if (this.exp >= 8) {
      return this.wages() * 1.1;
    } else {
      return this.wages();
    }
  }
  constructor(exp) {
    this.exp = exp;
  }
}

let user = new worker1(13);
console.log(user.surcharge());

class worker2 {
  constructor(name, surname, wages, exp, ed) {
    (this.name = name),
      (this.surname = surname),
      (this.wages = wages),
      (this.exp = exp),
      (this.education = ed);
  }

  fullName() {
    return this.name + " " + this.surname;
  }

  surcharge() {
    if (this.exp >= 5 && this.exp < 8) {
      return this.wages * 1.05;
    } else if (this.exp >= 8) {
      return this.wages * 1.1;
    } else {
      return this.wages();
    }
  }
}
class education {
  constructor(yearStart, yearEnd, univ) {
    (this.yearStart = yearStart),
      (this.yearEnd = yearEnd),
      (this.university = univ);
  }
}
class education1 extends worker2 {
  constructor(
    name,
    surname,
    wages,
    exp,
    yearOfStarting,
    yearOfEnding,
    university
  ) {
    super(name, surname, wages, exp);
    (this.yearOfStarting = yearOfStarting),
      (this.yearOfEnding = yearOfEnding),
      (this.university = university);
  }
}
let ed1 = new education(2007, 2012, "ZNTY");
let user1 = new worker2("Denis", "Mescheryakov", 5000, 7);
let user2 = new worker2("Petr", "Sidorov", 15000, 19, ed1);
let education2 = new education1(
  "Denis",
  "Mescheryakov",
  5000,
  7,
  2007,
  2012,
  "ZNMY"
);
console.log(user1.fullName());
console.log(user1.surcharge());
console.log(user2.fullName());
console.log(user2.surcharge());
console.log(user2);
console.log(education2);
console.log(education2.fullName());
console.log(education2.surcharge());
