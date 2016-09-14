BlocJams.collection = (function() {
	var collectionItemTemplate = function(name, artist, albumArtUrl, songCount) {
		return '<div class="collection-album-container column fourth">' +
			'  <img src="' + albumArtUrl + '"/>' +
			'  <div class="collection-album-info caption">' +
			'    <p>' +
			'      <a class="album-name" href="album.html?album=' + name + '">' + name + '</a>' +
			'      <br/>' +
			'      <a href="album.html">' + artist + '</a>' +
			'      <br/>' +
			'      ' + songCount + ' songs' +
			'      <br/>' +
			'    </p>' +
			'  </div>' +
			'</div>';
	}

	var loadCollection = function(albums, collectionContainer) {
		collectionContainer.innerHTML = '';
		for (key in albums) {
			var album = albums[key];
			collectionContainer.innerHTML += collectionItemTemplate(album.name, album.artist, album.albumArtUrl, album.songs.length);
		}
	};

	return {
		loadCollection: loadCollection
	}
}());
