console.log("airtable demo");

var Airtable = require('airtable');
console.log("Airtable");
var base = new Airtable({apiKey:'keyY3S9eT0JvuuEhH'}).base('app9Yomg99t2fqlPG');

base('songs').select({view: "Grid view"})
.eachPage(gotPageOfSongs, gotAllSongs); 

const songs = [];

function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our books array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSongs();
  showSongs();
}

function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("Song:", song);
  });
}
function selectMonth(el) {
    // remove .selected class from existing elements
    document.querySelectorAll('.selected').forEach((e) => e.classList.remove('selected'));
    if (el) {
        el.classList.add('selected');
    }
}
let march2020 = document.querySelector('.js-march2020');

	march2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/march2020.jpg";
	}); 
let april2020 = document.querySelector('.js-april2020');

	april2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/april2020.jpg";
	}); 
let may2020 = document.querySelector('.js-may2020');

	may2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/may2020.jpg";
	}); 
let june2020 = document.querySelector('.js-june2020');

	june2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/june2020.jpg";
	}); 
let july2020 = document.querySelector('.js-july2020');

	july2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/july2020.jpg";
	}); 
let aug2020 = document.querySelector('.js-aug2020');

	aug2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/aug2020.jpg";
	});
let sept2020 = document.querySelector('.js-sept2020');

	sept2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/sept2020.jpg";
	}); 
let oct2020 = document.querySelector('.js-oct2020');

	oct2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/oct2020.jpg";
	}); 
let nov2020 = document.querySelector('.js-nov2020');

	nov2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/nov2020.jpg";
	});
let dec2020 = document.querySelector('.js-dec2020');

	dec2020.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/dec2020.jpg";
	}); 
let filterReset = document.querySelector('.js-reset');

	filterReset.addEventListener('click', () => {
		document.getElementById("mood").src = "moods/2020.jpg";
	}); 


function showSongs() {
  console.log("showSongs()");
  songs.forEach(song => {
    // create container for each song
    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    document.querySelector(".container").append(songContainer);

    // add song titles
    var Title = document.createElement("p");
    Title.classList.add("title");
    Title.innerText = song.fields.title;
    songContainer.append(Title);

    var nameOfArtist = document.createElement("h2");
    nameOfArtist.classList.add("song-artist");
    nameOfArtist.innerText = song.fields.artist;
    songContainer.append(nameOfArtist);

    var playlist = document.createElement("h3");
    playlist.classList.add("song-playlist");
    playlist.innerText = song.fields.playlist;
    songContainer.append(playlist);
    songContainer.classList.add(song.fields.playlist);
    
     var album_cover = document.createElement("img");
    album_cover.classList.add("album_cover");
    album_cover.src = song.fields.album_cover[0].url;
    songContainer.append(album_cover);

    var filterMarch = document.querySelector(".js-march2020");
 	filterMarch.addEventListener("click", function(){
 	selectMonth(filterMarch);
  	document.body.style.backgroundImage = "url('gradients/gradient9.jpg')";
 		if (songContainer.classList.contains("march2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
	})

 	var filterApril = document.querySelector(".js-april2020");
 	filterApril.addEventListener("click", function(){
 	selectMonth(filterApril);
 	document.body.style.backgroundImage = "url('gradients/gradient7.jpg')";
 		if (songContainer.classList.contains("april2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})

 	var filterMay = document.querySelector(".js-may2020");
 	filterMay.addEventListener("click", function(){
 	selectMonth(filterMay);
 	document.body.style.backgroundImage = "url('gradients/gradient12.jpg')";
 		if (songContainer.classList.contains("may2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})

 	var filterJune = document.querySelector(".js-june2020");
 	filterJune.addEventListener("click", function(){
 	selectMonth(filterJune);
 	document.body.style.backgroundImage = "url('gradients/gradient2.jpg')";
 		if (songContainer.classList.contains("june2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterJuly = document.querySelector(".js-july2020");
 	filterJuly.addEventListener("click", function(){
 	selectMonth(filterJuly);
 		document.body.style.backgroundImage = "url('gradients/gradient1.jpg')";
 		if (songContainer.classList.contains("july2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterAug = document.querySelector(".js-aug2020");
 	filterAug.addEventListener("click", function(){
 	selectMonth(filterAug);
 		document.body.style.backgroundImage = "url('gradients/gradient5.jpg')";
 		if (songContainer.classList.contains("aug2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterSept = document.querySelector(".js-sept2020");
 	filterSept.addEventListener("click", function(){
 	selectMonth(filterSept);
 		document.body.style.backgroundImage = "url('gradients/gradient11.jpg')";
 		if (songContainer.classList.contains("sept2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterOct = document.querySelector(".js-oct2020");
 	filterOct.addEventListener("click", function(){
 		selectMonth(filterOct);
 		document.body.style.backgroundImage = "url('gradients/gradient10.jpg')";
 		if (songContainer.classList.contains("oct2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterNov = document.querySelector(".js-nov2020");
 	filterNov.addEventListener("click", function(){
 		selectMonth(filterNov);
 		document.body.style.backgroundImage = "url('gradients/gradient3.jpg')";
 		if (songContainer.classList.contains("nov2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})
 	var filterDec = document.querySelector(".js-dec2020");
 	filterDec.addEventListener("click", function(){
 		selectMonth(filterDec);
 		document.body.style.backgroundImage = "url('gradients/gradient4.jpg')";
 		if (songContainer.classList.contains("dec2020")) {
 			songContainer.classList.remove("active", "hidden")
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.add("hidden");
 		}
 	})

 let filterReset = document.querySelector(".js-reset");
      filterReset.addEventListener("click", function(){
      	selectMonth(filterReset);
       document.body.style.backgroundImage = "url('gradients/gradient8.jpg')";
        // songContainer.style.display = "grid";
  if (songContainer.classList.contains(".container")) {
 			songContainer.classList.add("active");
 		}else {
 			songContainer.classList.remove("hidden");
 		}

    }); 
  });
}
	


	// function march2020(){
