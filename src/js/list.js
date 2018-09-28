function List (obj) {

    this.ID = obj.ID;
    this.UUID = obj.UUID;
    this.created = obj.created;
    this.updated = obj.updated;
    this.deleted = obj.deleted;

    this.items = obj.items,

    this.getItems = () => {
        return items;
    },

    this.getItem = () => {
        let item = {};
        //iterate through the items finding a match to the name
        //return the item object
        return item;
    },

    this.getListID = () => {
        return ID;
    },

    this.setListID = (string) => {
        if(string) {ID = string; return true; }
        return false;
    },

    this.getUUID = () => {
        return UUID;
    },

    this.setUUID = (string) => {
        if(string) { UUID = string; return true; }
        return false;
    },

    this.updateVotes = (string, array) => {
        //iterate through the items in the list and update the votes
        //if all is well, return true, else false
        return true;
    }
};

module.exports = List;