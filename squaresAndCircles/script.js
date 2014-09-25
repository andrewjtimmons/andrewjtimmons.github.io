$(document).ready(function() {
  var htmlCanvas = document.getElementById('canvas');
  var context = htmlCanvas.getContext('2d');
  var numPhotos = 24
  var images = createImages();
  var i = 1;
  //var imageObj = new Image;

  initialize();

  function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }

  function createImages() {
    var images = []
    for (var i = 1; i <= numPhotos; i++) {
      images[i] = new Image;
      //images[i].src = "img/" + i + ".JPG";
      $(images[i]).load().attr('src', "img/" + i + ".JPG");
    }
    return images;
  }

  // Runs each time the DOM window resize event fires.
  // Resets the canvas dimensions to match window,
  // then draws the new borders accordingly.
  function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
  }
  
  setInterval(function() {
    redraw()
  }, 472);
  // Display custom canvas.
  // In this case it's a blue, 5 pixel border that 
  // resizes along with the browser window.                    
  function redraw() {
    //imageObj.src = "img/" + photoID + ".JPG";
    // imageObj.onload = function() {
    //   context.drawImage(images[1],0,0);
    // }
    if (i == 24) {
      i = 1;
    }
    context.drawImage(images[i],0,0, 1000*(window.innerWidth/1000),1000*(window.innerHeight/1000) );
    i++;
    // context.strokeStyle = 'blue';
    // context.lineWidth = '5';
    // context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
  }



});