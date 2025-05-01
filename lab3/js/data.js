let data = [];
export function get_items() {
return data;
}
export function add_item(new_item) {
// add item (if id does not exist)
   let exist = data.find(item => item.id === new_item.id);
   if(!exist) {
        data.push(new_item);
        return true;
   }
   return false;
// return true if item is added successfully, false otherwise
}
export function update_item_title_by_id(id, new_title) {
// update the title (if id exist)
// return true if item is update successfully, false otherwise
    data.map(item => {
        if(item.id === id){
            item.title = new_title;
            return;
        }
    });
}
export function delete_item_by_id(id) {
// delete the item (if id exist)
// return true if item is deleted successfully, false otherwise
    data = data.filter(item => item.id !== id);
}
export function get_item_title_by_id(id) {
// return the item title by id (if id exist)

    let findtitle = data.find(item => item.id === id);
    if(findtitle) return findtitle.title;
    else return "Title not found";
}