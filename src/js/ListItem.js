class ListItem {
  constructor(name) {
    this.name = name;
    this.votes = {
      'ayy': 0,
      'meh': 0,
      'nah': 0
    };
  }

  get name(){ return this._name; }
  set name(n){ this._name = n; }

  get votes() { return this._votes; }
  set votes(v){ this._votes = v; }

  getVotes() { return this.votes; }

  upVote(vote) {
    switch(vote){
      case 'ayy':
      this.votes['ayy']++;
      break;
      
      case 'meh':
      this.votes['meh']++;
      break;

      case 'nah':
      this.votes['nah']++;
      break;

      default:
      console.log("this vote type doesn't exist lol wyd");
      break;
    }
  }

  downVote(vote){
    switch(vote){
      case 'ayy':
      this._votes['ayy']--;
      break;

      case 'meh':
      this._votes['meh']--;
      break;

      case 'nah':
      this._votes['nah']--;
      break;

      default:
      console.log("this vote type doesn't exist lol wyd");
      break;
    }
  }
}