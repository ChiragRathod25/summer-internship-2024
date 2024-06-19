https://www.testdome.com/questions/javascript/song/110584/

class Song{
    name;
    nextSong;
    
    constructor(name) {
      this.name = name;
    }
    
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isInRepeatingPlaylist() {
      // Your code goes here
      let next = this.nextSong;
let current = this;
if(!next) return false;
while(current !== next){
    current = current.nextSong;
    next = next.nextSong;
    if(!next) return false;      
}
return false;
    }
  };
  
  let first = new Song("Hello");
  let second = new Song("Eye of the tiger");
  
  first.nextSong = second;
  second.nextSong = first;
  
  console.log(first.isInRepeatingPlaylist());