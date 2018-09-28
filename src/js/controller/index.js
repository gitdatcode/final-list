import List from '../list.js'

module.exports = {
    getList: function(string) {
        //make a GET request to the database and retrieve the list
        //create a new List object with the retrieved data
        let list = new List();
        //return the list object
        return list;
    },

    postList: function() {},
    updateList: function() {}
}