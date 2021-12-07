import chalk from 'chalk';
// 3c.
import myCollection from "./collection.js";

console.log(myCollection);
  
// 2c.
function describeItem (item) {

    if (item.count > 1) {
      console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s`);
      console.log(`Here's what I like about it: ${item.whatILike}`);
    } 
    else if (item.count <= 1) {
      console.log(`I have a ${chalk.cyan(item.name)}`);
      console.log(`Here's what I like about it: ${chalk.green(item.whatILike)}`);
    }
  }
  
  describeItem(myCollection[0]);

// 2d.

// function describeCollection(myCollection) {
//     for (i = 0; i < myCollection.length; i++) {
//         describeItem(myCollection[i]);
//     }

// }

// describeCollection(myCollection);

// refactoring

function describeCollection(collection) {
  collection.forEach(describeItem);
}

describeCollection(myCollection);
