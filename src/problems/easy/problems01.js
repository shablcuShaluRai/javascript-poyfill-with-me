// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books with already read text.

var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false
  }
];

function showLibrary(library) {
  return library.map((lib) => {
    const text = `' ${lib.title}' by ${lib.author}`;
    return lib?.readingStatus
      ? `Already read ${text}`
      : `you still need to read ${text}`;
  });
}

console.log("showLibrary", showLibrary(library));
