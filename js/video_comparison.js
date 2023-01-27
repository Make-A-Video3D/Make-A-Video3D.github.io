// This is borrowed from the Ref-NeRF website.

// This is based on: http://thenewcode.com/364/Interactive-Before-and-After-Video-Comparison-in-HTML5-Canvas
// With additional modifications based on: https://jsfiddle.net/7sk5k4gp/13/

function playVids(videoId) {
  var videoMerge = document.getElementById(videoId + "Merge");
  var vid = document.getElementById(videoId);

  var position = 0.5;
  var vidWidth = vid.videoWidth / 2;
  var vidHeight = vid.videoHeight;

  var mergeContext = videoMerge.getContext("2d");

  if (vid.readyState > 3) {
    vid.play();

    function trackLocation(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = (e.pageX - bcr.x) / bcr.width;
    }

    function trackLocationTouch(e) {
      // Normalize to [0, 1]
      bcr = videoMerge.getBoundingClientRect();
      position = (e.touches[0].pageX - bcr.x) / bcr.width;
      if (e.cancelable) {
        e.preventDefault();
      }
    }

    videoMerge.addEventListener("mousemove", trackLocation, false);
    videoMerge.addEventListener("touchstart", trackLocationTouch, false);
    videoMerge.addEventListener("touchmove", trackLocationTouch, false);

    function drawLoop() {
      mergeContext.drawImage(
        vid,
        0,
        0,
        vidWidth,
        vidHeight,
        0,
        0,
        vidWidth,
        vidHeight
      );
      var colStart = (vidWidth * position).clamp(0.0, vidWidth);
      var colWidth = (vidWidth - vidWidth * position).clamp(0.0, vidWidth);
      mergeContext.drawImage(
        vid,
        colStart + vidWidth,
        0,
        colWidth,
        vidHeight,
        colStart,
        0,
        colWidth,
        vidHeight
      );
      requestAnimationFrame(drawLoop);

      var arrowLength = 0.09 * vidHeight;
      var arrowheadWidth = 0.025 * vidHeight;
      var arrowheadLength = 0.04 * vidHeight;
      var arrowPosY = vidHeight / 10;
      var arrowWidth = 0.007 * vidHeight;
      var currX = vidWidth * position;

      // Draw circle
      mergeContext.arc(
        currX,
        arrowPosY,
        arrowLength * 0.7,
        0,
        Math.PI * 2,
        false
      );
      mergeContext.fillStyle = "#FFD79340";
      mergeContext.fill();
      //mergeContext.strokeStyle = "#444444";
      //mergeContext.stroke()

      // Draw border
      mergeContext.beginPath();
      mergeContext.moveTo(vidWidth * position, 0);
      mergeContext.lineTo(vidWidth * position, vidHeight);
      mergeContext.closePath();
      mergeContext.strokeStyle = "#444444";
      mergeContext.lineWidth = 1;
      mergeContext.stroke();

      // Draw arrow
      mergeContext.beginPath();
      mergeContext.moveTo(currX, arrowPosY - arrowWidth / 2);

      // Move right until meeting arrow head
      mergeContext.lineTo(
        currX + arrowLength / 2 - arrowheadLength / 2,
        arrowPosY - arrowWidth / 2
      );

      // Draw right arrow head
      mergeContext.lineTo(
        currX + arrowLength / 2 - arrowheadLength / 2,
        arrowPosY - arrowheadWidth / 2
      );
      mergeContext.lineTo(currX + arrowLength / 2, arrowPosY);
      mergeContext.lineTo(
        currX + arrowLength / 2 - arrowheadLength / 2,
        arrowPosY + arrowheadWidth / 2
      );
      mergeContext.lineTo(
        currX + arrowLength / 2 - arrowheadLength / 2,
        arrowPosY + arrowWidth / 2
      );

      // Go back to the left until meeting left arrow head
      mergeContext.lineTo(
        currX - arrowLength / 2 + arrowheadLength / 2,
        arrowPosY + arrowWidth / 2
      );

      // Draw left arrow head
      mergeContext.lineTo(
        currX - arrowLength / 2 + arrowheadLength / 2,
        arrowPosY + arrowheadWidth / 2
      );
      mergeContext.lineTo(currX - arrowLength / 2, arrowPosY);
      mergeContext.lineTo(
        currX - arrowLength / 2 + arrowheadLength / 2,
        arrowPosY - arrowheadWidth / 2
      );
      mergeContext.lineTo(
        currX - arrowLength / 2 + arrowheadLength / 2,
        arrowPosY
      );

      mergeContext.lineTo(
        currX - arrowLength / 2 + arrowheadLength / 2,
        arrowPosY - arrowWidth / 2
      );
      mergeContext.lineTo(currX, arrowPosY - arrowWidth / 2);

      mergeContext.closePath();

      mergeContext.fillStyle = "#444444";
      mergeContext.fill();
    }

    requestAnimationFrame(drawLoop);
    requestAnimationFrame(() => vid.play());
  }
}

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};

function waitForElementLoad(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((_mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

// TODO: Unify this with function in index.html
function resizeAndPlay(element) {
  waitForElementLoad("#" + element.id + "Merge").then((mergeElement) => {
    const cv = mergeElement;
    cv.width = element.videoWidth / 2;
    cv.height = element.videoHeight;
    element.play();
    element.style.height = "0px"; // Hide video without stopping it
    var placeholder = document.getElementById(element.id + "PlaceHolder");
    if (placeholder) {
      placeholder.style.display = "none";
    }

    playVids(element.id);
  });
}
