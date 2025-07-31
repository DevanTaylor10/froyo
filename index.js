function countFlavors() {
  //flavorString is where we're storing the flavors
  let flavorString = window.prompt(
    "enter a list of comma-separated froyo flavors"
  );
  const flavorObject = {}; //can you build an object to track which flavors you have counted so far?
  const words = flavorString.split(","); // parse the user input into an array of froto flavors
  for (let i = 0; i < words.length; i++) {
    if (flavorObject[words[i]]) {
      flavorObject[words[i]] += 1;
    } else {
      flavorObject[words[i]] = 1; // build an object to track which flavors you have counted so far?
    }
  }

  return flavorObject;
}

console.log(countFlavors());
