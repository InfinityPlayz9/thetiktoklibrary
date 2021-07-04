video_count =1;
videoPlayer = document.getElementById("auto");

function run(){
        video_count++;
        if (video_count == 16) video_count = 1;
        var nextVideo = "video"+video_count+".mp4";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
   };