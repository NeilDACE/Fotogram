
let pictureArr = [
  "./img/Pictures/clouds.jpg",
  "./img/Pictures/dust.jpg",
  "./img/Pictures/flow.jpg",
  "./img/Pictures/hills-and-clouds.jpg",
  "./img/Pictures/hills.jpg",
  "./img/Pictures/house.jpg",
  "./img/Pictures/lake.jpg",
  "./img/Pictures/landscape.jpg",
  "./img/Pictures/mountain-lakes.jpg",
  "./img/Pictures/see.jpg",
  "./img/Pictures/sunset.jpg",
  "./img/Pictures/villa.jpg"
];

function render() {
 let contentRef = document.getElementById("content")
 for (let index = 0; index < pictureArr.length; index++) {
    contentRef.innerHTML += getNoteTemplate(index);
    
 }    
}

function getNoteTemplate(index){
    return `<img class="pictures" src="${pictureArr[index]}" alt="Bild ${index}">`;
}
