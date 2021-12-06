let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection);
  
function describeItem (item) {

    if (item.count > 1) {
      console.log(`I have ${item.count} ${item.name}'s`);
      console.log(`Here's what I like about it: ${item.whatILike}`);
    } 
    else if (item.count <= 1) {
      console.log(`I have a ${item.name}`);
      console.log(`Here's what I like about it: ${item.whatILike}`);
    }
  }
  
  describeItem(myCollection[0]);

//   👉 2d. Now make a function called describeCollection that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the myCollection array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your myCollection array).

function describeCollection(myCollection) {
    for (i = 0; i < myCollection.length; i++) {
        describeItem(myCollection[i]);
    }

}

describeCollection(myCollection);