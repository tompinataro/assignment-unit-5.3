// Create an empty array named `myCollection`.
let myCollection = [];

//- Create a function named `addToCollection`. It should have this basic structure:
function addToCollection(collection, title, artist, yearPublished) {
  // Create a new object having the above properties.
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  // Add the new object to the end of the `collection` array.
  collection.push(album);

  // Return the newly created object.
  return album;
}

// Use and Test the `addToCollection` function:
let album1 = addToCollection(myCollection, "The Dark Side of the Moon", "Pink Floyd", 1973);
console.log(album1);
