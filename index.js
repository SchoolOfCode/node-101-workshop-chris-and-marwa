
// Now import `myCollection` at the top of `index.js`. You should be able to then call your function just
//  as you did in part 1, but this time using `myCollection` imported from its separate file.

import myCollection from 'myCollection';

console.log(myCollection);
  
// 2c.
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

// 2d.
function describeCollection(myCollection) {
    for (i = 0; i < myCollection.length; i++) {
        describeItem(myCollection[i]);
    }

}

describeCollection(myCollection);

// Now let's neaten things up by moving the `myCollection` array to its own file. 
// With Node's power to export and import, everything doesn't have to all be in one file,
//  which makes for cleaner, more readable code.

// Use Node to run the `index.js` file again just to check that your console.logs are still coming through correctly!