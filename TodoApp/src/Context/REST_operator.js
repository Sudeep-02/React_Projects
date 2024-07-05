let todo = { id: 1, text: "Complete assignment" };
let prev = [
  { id: 2, text: "Read a book" },
  { id: 3, text: "Go for a run" },
];

// Using [{...todo}, ...prev]
let result1 = [{ ...todo }, ...prev];
console.log(result1);
// Output: [ { id: 1, text: 'Complete assignment' }, { id: 2, text: 'Read a book' }, { id: 3, text: 'Go for a run' } ]

console.log([...prev]);
console.log({ ...todo }); //
