/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst muteBtn = document.getElementById(\"mute\");\nconst volumeRange = document.getElementById(\"volume\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst timeline = document.getElementById(\"timeline\");\nconst fullScreenBtn = document.getElementById(\"fullScreen\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst videoControls = document.getElementById(\"videoControls\");\nlet controlsTimeOut = null;\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst handlePlayClick = e => {\n  // if the video is playing, pause it\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtn.innerText = video.paused ? \"Play\" : \"Pause\";\n  // else play the video\n};\n\nconst handleMute = e => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtn.innerText = video.muted ? \"UnMute\" : \"Mute\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nconst handleVolumeChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText = \"Mute\";\n  }\n  volumeValue = value;\n  video.volume = value;\n};\nconst formatTime = seconds => new Date(seconds * 1000).toISOString().substring(14, 19);\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nconst handleTimelineChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  video.currentTime = value;\n};\nconst handleFullScreen = () => {\n  const fullscreen = document.fullscreenElement;\n  if (fullscreen) {\n    document.exitFullscreen();\n    fullScreenBtn.innerText = \"Enter Full Screen\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenBtn.innerText = \"Exit Full Screen\";\n  }\n};\nconst handleMouseMove = () => {\n  if (controlsTimeOut) {\n    clearTimeout(controlsTimeOut);\n    controlsTimeOut = null;\n  }\n  videoControls.classList.add(\"showing\");\n};\nconst handleMouseLeave = () => {\n  controlsTimeOut = setTimeout(() => {\n    videoControls.classList.remove(\"showing\");\n  }, 3000);\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMute);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\nvideo.addEventListener(\"mousemove\", handleMouseMove);\nvideo.addEventListener(\"mouseleave\", handleMouseLeave);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;