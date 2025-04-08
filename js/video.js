//var video;

//window.addEventListener("load", function() {
//	console.log("Good job opening the window")

//});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

window.addEventListener("load", function () {
	const video = document.getElementById("player1");
	const playBtn = document.getElementById("play");
	const pauseBtn = document.getElementById("pause");
	const slowBtn = document.getElementById("slower");
	const fastBtn = document.getElementById("faster");
	const skipBtn = document.getElementById("skip");
	const muteBtn = document.getElementById("mute");
	const slider = document.getElementById("slider");
	const volumeDisplay = document.getElementById("volume");
	const oldSchoolBtn = document.getElementById("vintage");
	const originalBtn = document.getElementById("orig");
  
	// Initialize video
	video.autoplay = false;
	video.loop = false;
	video.load();
	volumeDisplay.textContent = `${video.volume * 100}%`;
  
	// Play
	playBtn.addEventListener("click", () => {
	  video.play();
	  volumeDisplay.textContent = `${video.volume * 100}%`;
	});
  
	// Pause
	pauseBtn.addEventListener("click", () => {
	  video.pause();
	});
  
	// Slow down
	slowBtn.addEventListener("click", () => {
	  video.playbackRate *= 0.9;
	  console.log(`Speed is ${video.playbackRate.toFixed(5)}`);
	});
  
	// Speed up
	fastBtn.addEventListener("click", () => {
	  video.playbackRate /= 0.9;
	  console.log(`Speed is ${video.playbackRate.toFixed(5)}`);
	});
  
	// Skip ahead
	skipBtn.addEventListener("click", () => {
	  if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	  } else {
		video.currentTime += 10;
	  }
	  console.log(`Current time: ${video.currentTime.toFixed(2)}`);
	});
  
	// Mute toggle
	muteBtn.addEventListener("click", () => {
	  video.muted = !video.muted;
	  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
	});
  
	// Volume slider
	slider.addEventListener("input", () => {
	  video.volume = slider.value / 100;
	  volumeDisplay.textContent = `${video.volume * 100}%`;
	});
  
	// Styled (old school)
	oldSchoolBtn.addEventListener("click", () => {
	  video.classList.add("oldSchool");
	});
  
	// Original (remove style)
	originalBtn.addEventListener("click", () => {
	  video.classList.remove("oldSchool");
	});
  });

