var myMedia = document.createElement('audio');
$(document).ready(function() {
    $("#volume").slider({
        range: "min",
        misn: 0,
        max: 100,
        value: 80,
        animate: true,
        slide: function(event, ui) {
            setVolume((ui.value) / 100);
        }
    });

    document.getElementById('player').appendChild(myMedia);
    myMedia.id = "myMedia";
    playMedia('ViewSource');
});

function playMedia(fileName) {


    mediaExt = (myMedia.canPlayType('audio/mp3')) ? '.mp3' : (myMedia.canPlayType('audio/ogg')) ? '.ogg' : '';


    if (mediaExt) {
        myMedia.src = "http://planetoftheweb.com/exercises/jsuislider/audio/" + fileName + mediaExt;
        myMedia.setAttribute('loop', 'loop');
        myMedia.play();
        setVolume(.8);
    }
}

function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
}