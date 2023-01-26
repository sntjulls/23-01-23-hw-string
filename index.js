// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// не використовувати регулярні вирази!

// спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)

const getVowels = (str, vowels = "aeiouy") => {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => (vowels.includes(cur) ? (acc += cur) : acc), "");
};

const vowels = getVowels("They should expect stormier weather ahead");

console.log(vowels.length);