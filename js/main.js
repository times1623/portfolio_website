//way point(animation) starts from here
  var webDes = document.querySelector('#des');
  var webDev = document.querySelector('#web');

  var waypoint = new Waypoint({
    element: webDes,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      graphAnime();
    },offset: 300
  })

  function graphAnime() {
      TweenMax.from(webDes, 3, {opacity:0});
  }

  var waypoint = new Waypoint({
    element: webDev,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      webAnime();
    },offset: 300
  })

  function webAnime() {
      TweenMax.from(webDev, 3, {opacity:0});
  }
  
  

  var waypoint = new Waypoint({
    element: webDes,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimation(this.element, ["brush_head"]);
    },offset: 300
  });

  function runAnimation(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animProps = {};
    switch (parent.id) {
        case "des":
        animProps = {x:-90, rotation:180, opacity:0, delay:.5};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, 1.5, animProps);
    })
}

webDes.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('.des'), ["brush_head"]);
})

var waypoint = new Waypoint({
  element: webDes,
  handler: function(direction) {
    console.log('Scrolled to waypoint!!!234!!');
    runAnimation(this.element, ["brush_stick"]);
  },offset: 300
});

function runAnimation(parent, elements){
  //should run on a waypoint or user interaction
  console.log("run animations here");

  let innerSVG = parent.contentDocument;
  
  //set up animation properties

  let animProps = {};
  switch (parent.id) {
      case "des":
      animProps = {x:-90, opacity:0, delay:.1};
      break;

      default:
      //do nothing
      break;
  }

  //simple vector animation with Greensock
  elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.from(target, 1.5, animProps);
  })
}

webDes.addEventListener("mouseover", function(){
  //debugger;
  //console.log(this);
  runAnimation(this.querySelector('.des'), ["brush_stick"]);
})

var waypoint = new Waypoint({
  element: webDev,
  handler: function(direction) {
    console.log('Scrolled to waypoint!!!234!!');
    runAnimation1(this.element, ["line1"]);
  },offset: 300
});

function runAnimation1(parent, elements){
  //should run on a waypoint or user interaction
  console.log("run animations here");

  let innerSVG = parent.contentDocument;
  
  //set up animation properties

  let animProps = {};
  switch (parent.id) {
      case "web":
      animProps = {x:-90, opacity:0, delay:.5};
      break;

      default:
      //do nothing
      break;
  }

  //simple vector animation with Greensock
  elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.from(target, 1.5, animProps);
  })
}

webDev.addEventListener("mouseover", function(){
  //debugger;
  //console.log(this);
  runAnimation1(this.querySelector('.web'), ["line1"]);
})

var waypoint = new Waypoint({
  element: webDev,
  handler: function(direction) {
    console.log('Scrolled to waypoint!!!234!!');
    runAnimation2(this.element, ["line2"]);
  },offset: 300
});

function runAnimation2(parent, elements){
  //should run on a waypoint or user interaction
  console.log("run animations here");

  let innerSVG = parent.contentDocument;
  
  //set up animation properties

  let animProps = {};
  switch (parent.id) {
      case "web":
      animProps = {x:-90, opacity:0, delay:1};
      break;

      default:
      //do nothing
      break;
  }

  //simple vector animation with Greensock
  elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.from(target, 1.5, animProps);
  })
}

webDev.addEventListener("mouseover", function(){
  //debugger;
  //console.log(this);
  runAnimation2(this.querySelector('.web'), ["line2"]);
})


var waypoint = new Waypoint({
  element: webDev,
  handler: function(direction) {
    console.log('Scrolled to waypoint!!!234!!');
    runAnimation3(this.element, ["line3"]);
  },offset: 300
});

function runAnimation3(parent, elements){
  //should run on a waypoint or user interaction
  console.log("run animations here");

  let innerSVG = parent.contentDocument;
  
  //set up animation properties

  let animProps = {};
  switch (parent.id) {
      case "web":
      animProps = {x:-90, opacity:0, delay:1.5};
      break;

      default:
      //do nothing
      break;
  }

  //simple vector animation with Greensock
  elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.from(target, 1.5, animProps);
  })
}

webDev.addEventListener("mouseover", function(){
  //debugger;
  //console.log(this);
  runAnimation3(this.querySelector('.web'), ["line3"]);
})


var waypoint = new Waypoint({
  element: webDev,
  handler: function(direction) {
    console.log('Scrolled to waypoint!!!234!!');
    runAnimation4(this.element, ["line4"]);
  },offset: 300
});

function runAnimation4(parent, elements){
  //should run on a waypoint or user interaction
  console.log("run animations here");

  let innerSVG = parent.contentDocument;
  
  //set up animation properties

  let animProps = {};
  switch (parent.id) {
      case "web":
      animProps = {x:-90, opacity:0, delay:2};
      break;

      default:
      //do nothing
      break;
  }

  //simple vector animation with Greensock
  elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.from(target, 1.5, animProps);
  })
}

webDev.addEventListener("mouseover", function(){
  //debugger;
  //console.log(this);
  runAnimation4(this.querySelector('.web'), ["line4"]);
})
