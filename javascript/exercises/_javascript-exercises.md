# JavaScript Exercises

- [Exercise 01 - Replace](#ex01)
- [Exercise 02 - Format](#ex02)
- [Exercise 03 - Objects](#ex03)
- [Exercise 04 - DOM](#ex04)
- [Exercise 05 - Destructuring](#ex05)

## <a id="ex01"></a> Exercise 01 - Replace

Write a function `replaceItems` that takes in a string and returns a string where 'gold' is replaced by 'SHINY' and 'wander' is replaced by 'roam', regardless of the case of the letters.

```javascript
console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is shiny does not glitter'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
```

## <a id="ex02"></a> Exercise 02 - Format

Write a function `formatItems` that takes in an array of numbers and returns a string of the concatenated numbers, separated by commas and with each number having three digits after the decimal point.

```javascript
console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
```

## <a id="ex03"></a> Exercise 03 - Objects

Create functions for adding, deleting, looking up, and printing the items of an object.

```javascript
insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
```

## <a id="ex04"></a> Exercise 04 - DOM

In this exercise, you will take in user input and output that data back to the output elements in the DOM.

Part 1 - When the user clicks the 'copy' button, copy the user input to the output area. Fetch the JavaScript objects representing specific elements in the DOM. Add an event listener on the target element. Write a callback function to handle the 'click' event.

Part 2 - When the user enters input text, copy the user input to the output area. Fetch the JavaScript objects representing specific elements in the DOM. Add an event listener on the target element. Write a callback function to handle the 'input' event.

## <a id="ex05"></a> Exercise 05 - Destructuring

Write a function `destructureItems` that takes in a character object, destructures the name and parents of the characters, and returns the output as shown.

```javascript
console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
```
