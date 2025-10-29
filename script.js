// Array containing all image file paths
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
  "./img/Pictures/villa.jpg",
];

/* 
  Renders all images on the page.
  For each image, a button and corresponding dialog are created.
*/
function render() {
  let contentRef = document.getElementById("content");
  for (let index = 0; index < pictureArr.length; index++) {
    contentRef.innerHTML += getNoteTemplate(index);
  }
}

/* 
  Returns the HTML structure for one image and its dialog.
  Includes navigation buttons, a header, and close functionality.
*/
function getNoteTemplate(index) {
  return `<button aria-haspopup="dialog" aria-controls="pictureDialog-${index}" class="open-dialog-button" tabindex="0" onclick="openDialog(${index})"><img class="pictures" src="${pictureArr[index]}" alt="picture ${index}"></button>
    <dialog id="pictureDialog-${index}" aria-labelledby="dialogAndPictureTitle" class="picture-dialog" onclick="closeDialog(${index})">
          <div class="picture-dialog-container" onclick="event.stopPropagation()">
          <header>
            <h2 id="dialogAndPictureTitle">
              ${imgName(index)}
            </h2>
            <button class="button" aria-label="close button" onclick="closeDialog(${index})">X</button>
          </header>
          <section>
            <img class="dialog-picture" src="${pictureArr[index]}" alt="Image ${index}">
          </section>
          <footer>
          <button class="button" aria-label="go to previous image" onclick="nextLeft(${index})">←</button>
          <p>${getImgNumber(index)}/12</p>
          <button class="button" aria-label="go to next image" onclick="nextRight(${index})">→</button>
          </footer>
          </div>
        </dialog>`;
}

/* 
  Opens the image dialog for the given index.
*/
function openDialog(index) {
  document.getElementById(`pictureDialog-${index}`).showModal();
  document.getElementById(`pictureDialog-${index}`).classList.add("opened");
}

/* 
  Closes the image dialog for the given index.
*/
function closeDialog(index) {
  document.getElementById(`pictureDialog-${index}`).close();
  document.getElementById(`pictureDialog-${index}`).classList.remove("opened");
}

/* 
  Extracts and returns the image file name from its path.
*/
function imgName(index) {
  return pictureArr[index].slice(15);
}

/* 
  Returns the image number (1-based index).
*/
function getImgNumber(index) {
  let ImgNumber = index + 1;
  return ImgNumber;
}

/* 
  Opens the previous image in the dialog.
  If the first image is reached, loops back to the last one.
*/
function nextLeft(index) {
  if (index == 0) {
    index = pictureArr.length - 1;
    closeDialog(0);
    openDialog(index);
    return;
  }
  let nextNumber = index - 1;
  closeDialog(index);
  openDialog(nextNumber);
}

/* 
  Opens the next image in the dialog.
  If the last image is reached, loops back to the first one.
*/
function nextRight(index) {
  if (index == pictureArr.length - 1) {
    index = 0;
    closeDialog(pictureArr.length - 1);
    openDialog(index);
    return;
  }
  let nextNumber = index + 1;
  closeDialog(index);
  openDialog(nextNumber);
}


