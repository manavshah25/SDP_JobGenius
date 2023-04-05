const article = document.querySelector('article');
if (article)  {
    
    var {
        x, y, width, height,
      } = article.getBoundingClientRect();
    var cx = x + width / 2;
      var cy = y + height / 2;
      
      // following the mousemove event compute the distance betwen the cursor and the center of the card
      
      
      // following the mouseout event reset the transform property
     
      article.addEventListener('mousemove', handleMove);
  article.addEventListener('mouseout', handleOut);
  
    // do something with rect
  } else {
    console.log('Element does not exist');
  }
  function handleMove(e) {
    const { pageX, pageY } = e;
  
    // ! consider the relative distance in the [-1, 1] range
    const dx = (cx - pageX) / (width / 2);
    const dy = (cy - pageY) / (height / 2);
  
    // rotate the card around the x axis, according to the vertical distance, and around the y acis, according to the horizontal gap 
    this.style.transform = `rotateX(${20 * dy * -1}deg) rotateY(${20 * dx}deg)`;
  }
  function handleOut() {
    this.style.transform = 'initial';
  }

// to compute the center of the card retrieve its coordinates and dimensions


// following the mousemove event compute the distance betwen the cursor and the center of the card
