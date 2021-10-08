let baseURL= 'https://api.nasa.gov/planetary/apod?api_key=Iebbg5I5hUVjfiAKtkPDhQx4Pv5DL5V4HeggeF2K'
let key= 'Iebbg5I5hUVjfiAKtkPDhQx4Pv5DL5V4HeggeF2K' 
// console.log(baseURL)

async function getNASA() {
    // console.log(baseURL)
     let x = await fetch(baseURL);
     let y = await x.json();
    // console.log(x)
    // console.log(y)
    displayResults(y);
  }
getNASA()

 function displayResults(json) {
    console.log(json);
    console.log(json.date)
      let newImage = document.createElement('img');
    // creating ^
      newImage.src = json.url;
    // Adding attributes ^
    console.log(newImage)
    //   thevariable.appendChild(newImage);
    // Putting it somewhere ^
 };


// console log, log like a journal
// read up on fetch after this
// local and global: think of fire departments needing help
// get rid of the display results on line 43
// placeholder/variable are synonyms
// console.log(json.title) is targeting something, look in the inspect and the console for the details
// Dom manipulation 1. create element. 2. add attributes to the element. 3. append (or put it somewhere) the element