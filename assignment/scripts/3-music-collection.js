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

let album2 = addToCollection(myCollection, "Thriller", "Michael Jackson", 1982);
console.log(album2);

let album3 = addToCollection(myCollection, "Back in Black", "AC/DC", 1980);
console.log(album3);

let album4 = addToCollection(myCollection, "Nevermind", "Nirvana", 1991);
console.log(album4);

let album5 = addToCollection(myCollection, "Sgt. Pepper's Lonely Hearts Club Band", "The Beatles", 1967);
console.log(album5);

let album6 = addToCollection(myCollection, "Hotel California", "Eagles", 1976);
console.log(album6);

// After all are added, console.log the `myCollection` array
console.log(myCollection);

//- Create a function named `showCollection`. This function should:
function showCollection(collection) {
  // Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
}

// Test the `showCollection` function.
showCollection(myCollection);


//- Create a function named `findByArtist`. This function should:
function findByArtist(collection, artist) {
  // Create an empty array to hold any matching results, if any.
  let matchingAlbums = [];

  // Loop through the `collection` and add any album objects with a matching artist to the array.
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      matchingAlbums.push(collection[i]);
    }
  }

  // Return the array with the matching results. (If no results are found, an empty array should be returned.)
  return matchingAlbums;
}

// Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
console.log(findByArtist(myCollection, "Pink Floyd"));
console.log(findByArtist(myCollection, "The Beatles"));
console.log(findByArtist(myCollection, "Led Zeppelin"));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
