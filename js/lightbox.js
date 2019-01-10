
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var viewBut = document.querySelector('#viewBut');
var viewBut2 = document.querySelector('#viewBut2');
var viewBut3 = document.querySelector('#viewBut3');
var viewBut4 = document.querySelector('#viewBut4');
var viewBut5 = document.querySelector('#viewBut5');
var viewBut6 = document.querySelector('#viewBut6');
var modalImg = document.querySelector("#frame");
var desc = document.querySelector('#imgInfo');
var title = document.querySelector('#imgTitle');

let myGallery = [];
let popText = document.querySelectorAll('.popText');
let galImg = document.querySelectorAll('.gal');

    function get_gallery() {

        fetch('./includes/index.php') // pass in the one or many query
          .then(res => res.json())
          .then(data => {
           
              myGallery = data;
    
              popText.forEach((textelement,index) => {
                textelement.textContent=data[index].gallery_title;
            })
            
            galImg.forEach((pic,i) => {
                pic.src += data[i].gallery_web_image;
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    
    window.addEventListener('load', () => {
    
    get_gallery();
    
    
    });

function openImg() {
    modal.style.display = "block";
    title.innerText = myGallery[0].gallery_title;
    modalImg.src = 'images/'+myGallery[0].gallery_original_img;
    desc.innerText = myGallery[0].gallery_description;
}

viewBut.addEventListener('click',openImg,false);

function openImg2() {
    modal.style.display = "block";
    title.innerText = myGallery[1].gallery_title;
    modalImg.src = 'images/'+myGallery[1].gallery_original_img;
    desc.innerText = myGallery[1].gallery_description;
}

viewBut2.addEventListener('click',openImg2,false);


function openImg3() {
    modal.style.display = "block";
    title.innerText = myGallery[2].gallery_title;
    modalImg.src = 'images/'+myGallery[2].gallery_original_img;
    desc.innerText = myGallery[2].gallery_description;
}

viewBut3.addEventListener('click',openImg3,false);


function openImg4() {
    modal.style.display = "block";
    title.innerText = myGallery[3].gallery_title;
    modalImg.src = 'images/'+myGallery[3].gallery_original_img;
    desc.innerText = myGallery[3].gallery_description;
}

viewBut4.addEventListener('click',openImg4,false);


function openImg5() {
    modal.style.display = "block";
    title.innerText = myGallery[4].gallery_title;
    modalImg.src = 'images/'+myGallery[4].gallery_original_img;
    desc.innerText = myGallery[4].gallery_description;
}

viewBut5.addEventListener('click',openImg5,false);


function openImg6() {
    modal.style.display = "block";
    title.innerText = myGallery[5].gallery_title;
    modalImg.src = 'images/'+myGallery[5].gallery_original_img;
    desc.innerText = myGallery[5].gallery_description;
}

viewBut6.addEventListener('click',openImg6,false);

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeBox(){
    modal.style.display = "none";
}

close.addEventListener('click',closeBox,false)