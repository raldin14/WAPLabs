// 4. Implement following functions in data.js and test those in script.js:
// // data.js
import {add_item, get_items, update_item_title_by_id, delete_item_by_id, get_item_title_by_id} from './data.js';


add_item({title:"Advengers", id: 1});
add_item({title:"How I Met Your Mother", id: 2});
add_item({title:"The Big Bang Theory", id: 3});
// add_item({title:"Captain america", id: 3});

// console.log(get_items());

console.log(update_item_title_by_id(3, "Captain america"));
console.log(update_item_title_by_id(4, "Super man"));

console.log(get_items());

console.log(delete_item_by_id(2));
console.log(delete_item_by_id(2));
console.log(get_items());

// console.log(get_item_title_by_id(1));
// console.log(get_item_title_by_id(2));