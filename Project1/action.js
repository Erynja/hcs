$(document).ready(function() {
    const digimonUrl = "http://localhost:3000/digimon";
    const elDigi = $('#digimon');
    const results = $('#results');
    const searchInput = $('#digiSearch');
    const searchButton = $('#btSearchDigimon');
    const digimonDraw = $('#digimonDraw');
    const infoBox = $('.infoBox');
    const digiLevel = $('#digiLevel');
    const digiType = $('#digiType');
    const digiAttack = $('#digiAttack');
    
  
    // Fetch and display Digimon data
    function fetchDigimon() {
        $.getJSON(digimonUrl)
            .done(function(data) {
                if (Array.isArray(data)) {
                    populateResults(data);
                } else {
                    console.error('Expected an array of digimon but received:', data);
                    results.text('Error: Unexpected data format.');
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching Digimon data:', textStatus, errorThrown);
                results.text('Error loading Digimon data.');
            });
    }
  
    // Populate the results section
    function populateResults(digimonItems) {
        elDigi.empty();
        digimonItems.forEach(item => {
            elDigi.append(`
                <section class="digiItem" data-name="${item.name}" data-level="${item.level}" data-type="${item.digiType}" data-attack="${item.attack}">
                    <h2>${item.name}</h2>
                    <p>Level: ${item.level}</p>
                    <p>Type: ${item.digiType}</p>
                    <p>Attack: ${item.attack}</p>
                </section>`);
        });
        elDigi.show(); // Show Digimon items after populating
    }
  
    // Show Digimon animation and info box
    function showDigimon(name, level, type, attack) {
        // Assuming you have images named like 'Greymon.jpg' in the /images/ directory
        const imageUrl = `/images/${name}.jpg`;
        console.log('Image URL:', imageUrl); // Debug the URL
        
        digimonDraw.empty().append(`<section class="digiImage" style="background-image: url('${imageUrl}');"></section>`);
        $('.digiImage').show(); // Show Digimon image
  
        console.log('Showing Digimon:', name, level, type, attack);
  
  
        // Example animation parameters; adjust as needed
        const ani = {
            frame_height: 690,
            num_frames: 77,
            loop_frame: 73,
            frame_duration: 50,
            cur_frame: 0
        };
  
        function updateAnimation() {
            $('.digiImage').css({
                'background-position-y': (-ani.frame_height * ani.cur_frame) + 'px'
            });
            ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
            if (ani.cur_frame === 0) ani.cur_frame = ani.loop_frame;
        }
  
        setInterval(updateAnimation, ani.frame_duration);
  
        updateInfoBox(level, type, attack); // Update info box with Digimon details
    }
  
    // Update the info box
    function updateInfoBox(level, type, attack) {
        digiLevel.text(level);
        digiType.text(type);
        digiAttack.text(attack);
        infoBox.show(); // Show info box
    }
  
    // Search functionality
    function searchDigimon() {
      const searchTerm = searchInput.val().toLowerCase();
      $.getJSON(digimonUrl)
          .done(function(data) {
              if (Array.isArray(data)) {
                  const filteredItems = data.filter(digi =>
                      digi.name.toLowerCase().includes(searchTerm)
                  );
  
                  // Populate results and show the image if a Digimon is found
                  populateResults(filteredItems);
                  
                  if (filteredItems.length > 0) {
                      // Assume we want to show the first matching Digimon's details
                      const firstItem = filteredItems[0];
                      console.log('First Item Details:', firstItem); // Debug output
                      showDigimon(firstItem.name, firstItem.level, firstItem.digiType, firstItem.attack);
                  } else {
                      digimonDraw.empty(); // Clear the image if no results
                      infoBox.hide(); // Hide info box if no results
                  }
              } else {
                  console.error('Expected an array of digimon but received:', data);
                  results.text('Error: Unexpected data format.');
              }
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
              console.error('Error fetching Digimon data:', textStatus, errorThrown);
              results.text('Error loading Digimon data.');
          });
  }
  
    // Event listeners
    searchButton.on('click', function() {
        searchDigimon();
    });
  
    elDigi.on('click', '.digiItem', function() {
        const name = $(this).data('name');
        const level = $(this).data('level');
        const type = $(this).data('type');
        const attack = $(this).data('attack');
        showDigimon(name, level, type, attack);
    });
  
    // Initial call to populate the page if needed
    fetchDigimon();
  });
  