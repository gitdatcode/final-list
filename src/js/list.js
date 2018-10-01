import ListItem from './ListItem.js'

class List {

  constructor(ID, UUID) {
      this.ID = ID;
      this.UUID = UUID;
      this.name = "";
      this.items = {};
  }

  get name() { return this._name; }
  set name(n) { this._name = n; }

  get ID() { return this._id; }
  set ID(string) { if(!string) { console.log("there's no ID."); return; } this._id = string; }

  get UUID() { return this._uuid; }
  set UUID() { if(!string) { console.log('there is no UUID.'); return; } this._uuid = string; }

  get items() { return this._items; }
  set items(i) {
      if(!array) { console.log("there are no items"); return; }
      this._items = i;
  }

  getItem(name) {
    //check the items array for the item
      for(item in this.items) {
        //return it if it's fount
        if(item.name == name) {
            return item;
        }
      }
      //if not, return a null and log it
      console.log("item doesn't exist.");
      return null;
  }

  addItem(name) {
    //create the new item
    let _item = new ListItem(name);
    //check the items to see if it already exists
    for( item in this.items ){
      if(item.name == name ) { console.log('item exists.'); return; }  
    }
    //and if not, add it
    this.items.push(_item);
  }
}