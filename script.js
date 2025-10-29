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

function render() {
  let contentRef = document.getElementById("content");
  for (let index = 0; index < pictureArr.length; index++) {
    contentRef.innerHTML += getNoteTemplate(index);
  }
}

function getNoteTemplate(index) {
  return `<button class="open-dialog-button" tabindex="0" onclick="openDialog(${index})"><img class="pictures" src="${pictureArr[index]}" alt="picture ${index}"></button>
    <dialog id="pictureDialog-${index}" class="picture-dialog" onclick="closeDialog(${index})">
          <div class="picture-dialog-container" onclick="event.stopPropagation()">
          <header>
            <h2>
              ${imgName(index)}
            </h2>
            <button class="button" onclick="closeDialog(${index})">X</button>
          </header>
          <section>
            <img class="dialog-picture" src="${pictureArr[index]}" alt="Bild ${index}">
          </section>
          <footer>
          <button class="button" onclick="nextLeft(${index})">←</button>
          <p>${getImgNumber(index)}/12</p>
          <button class="button" onclick="nextRight(${index})">→</button>
          </footer>
          </div>
        </dialog>`;
}

function openDialog(index) {
  document.getElementById(`pictureDialog-${index}`).showModal();
  document.getElementById(`pictureDialog-${index}`).classList.add("opened");
}

function closeDialog(index) {
  document.getElementById(`pictureDialog-${index}`).close();
  document.getElementById(`pictureDialog-${index}`).classList.remove("opened");
}

function imgName(index) {
  return pictureArr[index].slice(15);
}

function getImgNumber(index) {
  let ImgNumber = index + 1;
  return ImgNumber;
}

function nextLeft(index) {
  if (index == 0) {
    index = pictureArr.length - 1;
    closeDialog(0);
    openDialog(index);
    return;
  }
  let nextNumber = index - 1
  closeDialog(index);
  openDialog(nextNumber);
}

function nextRight(index) {
  if (index == pictureArr.length - 1) {
    index = 0;
    closeDialog(pictureArr.length - 1);
    openDialog(index);
    return;
  }
  let nextNumber = index + 1
  closeDialog(index);
  openDialog(nextNumber);
}

