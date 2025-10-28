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
  return `<img class="pictures" onclick="openDialog(${index})" src="${
    pictureArr[index]
  }" alt="Bild ${index}">
    <dialog id="pictureDialog-${index}" class="picture-dialog" onclick="closeDialog(${index})">
          <div class="dialog-container" onclick="event.stopPropagation()">
          <header>
            <h2>
              ${pictureArr[index].slice(15)}
            </h2>
            <button class="button" onclick="closeDialog(${index})">X</button>
          </header>
          <section>
            <img class="dialog-picture" src="${
              pictureArr[index]
            }" alt="Bild ${index}">
          </section>
          <footer>

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
