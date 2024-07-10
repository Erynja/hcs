let url = "http://localhost:3000/digimon";
let elDigi = document.querySelector("#digimon");
let fName = document.querySelector("#name");
let fSearch = document.querySelector("#digiSearch");
let searchButton = document.querySelector("btSearchDigimon");


function showDigi(digiItems) {
  //console.log(data);
  elDigi.innerHTML = "";
  
    elDigi.innerHTML += `<section class="digiItem"><h2>
        ${item.name}</h2></section>`;
  
}

// JavaScript code for search functionality

// Load JSON data
let data = JSON.parse('{"digimon":[{"id":1,"name":"Greymon","digiType":"Reptile Digimon","attack":"Mega Flame"},{"id":2,"name":"Agumon","digiType":"Reptile Digimon","attack":"Kleine Flamme"}]}');

// Get input element and results list
let search = document.getElementById('digiSearch');
let results1 = document.getElementById('results');
let results2 = document.getElementById('digimonDraw')


// Attach event listener to input element
search.addEventListener('keyup', function (event) {

  // Clear results list
  results1.innerHTML = '';
  results2.innerHTML = '';
  // Get search term
  let searchTerm = event.target.value.toLowerCase();

  // Loop through data and check for matches
  data.digimon.forEach(function (digi) {

    // Check if title or author contains search term
    if (digi.name.toLowerCase().indexOf(searchTerm) > -1) {

      // Create result item
      let linkItem = document.createElement('a')
      let sectionItem = document.createElement('section');
      linkItem.innerHTML = digi.name;
      linkItem.href = `digimon.html?name=${digi.name}`;
      linkItem.title = digi.name;
      sectionItem.dataset.digiName = digi.name.toLowerCase();
      sectionItem.className = "digiImage";
      results1.appendChild(linkItem);
      results2.appendChild(sectionItem);
    }
  });
});

const name = $('section.digiImage').attr('data-digi-name')
$('section.digiImage').css('background-image', 'url(images/' + name + '.jpg)', 'top center')

$(function showDigimon() {

  const ani = {
    frame_height: 690,
    num_frames: 77,
    loop_frame: 73,
    frame_duration: 50,
    cur_frame: 0
  };
  window.setInterval(
    function () {
      const name = $('section.digiImage').attr('data-digi-name')
      $('section.digiImage').css('background-image', 'url(images/' + name + '.jpg)', 'top center')
      $('section.digiImage').css('height', '100vh');
      $('section.digiImage').css('transform', 'translate(-175%, 40%)');
      $('section.digiImage').css('display', 'flex');
      $('section.digiImage').css('align-items', 'center');
      $('section.digiImage').css('mix-blend-mode', 'screen');
      $('section.digiImage').css('width', '920px');
      $('section.digiImage').css('height', '690px');
      $('section.digiImage').css('margin', '0', 'auto');
      $('section.digiImage').css('background-position-y',
        (-ani.frame_height * ani.cur_frame) + 'px'
      );
      ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
      if (ani.cur_frame == 0) ani.cur_frame = ani.loop_frame;
    },
    ani.frame_duration
  );
});





