function theBeatlesPlay(musicians, instruments) {
  var arrayName = [];
  for (var i = 0; i < musicians.length; i++) {
  arrayName.push(musicians[i] + " plays " + instruments[i]);
}
return arrayName; 
}

var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(facts) {
  var arrayName = []; 
  let i = 0;
  while (facts.length > i) {
    arrayName.push(`${facts[i]}!!!`);
    i = i+1;
  }
  return arrayName;
}

function iLoveTheBeatles(n) {
  var arrayName = [];
    do {
      console.log("I love the Beatles!");
    } while (n < 15);
  return arrayName; 
}