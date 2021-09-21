const a = document.getElementsByClassName('link-a');
const section = document.getElementsByClassName('section');
const first = document.getElementById('first');

// console.log(a.length);
// console.log(section.length);


for(let i = 0; i < a.length;i++){
    a[i].addEventListener('click', () => {
        for(let j =0; j<4 ;j++){
            section[j].style.display = 'none';
            first.style.display = 'none';
        }
        section[i].style.display = 'block';
        // console.log(i);
        // console.log(section);
    });
// console.log(i)
}

const imgCol = document.getElementsByClassName('img-col');
const bgModal = document.getElementsByClassName('bg-modal');

for(let i = 0 ; i < imgCol.length; i++) {
    imgCol[i].addEventListener('click', () => {
        bgModal[i].style.display = 'block';
    });
}

var span = document.getElementsByClassName("close");

for(let i = 0 ; i < span.length; i++) {
    span[i].addEventListener('click', () => {
        bgModal[i].style.display = 'none';
    });
}

const bgModalVid = document.getElementsByClassName('bg-modal-vid');
var span2 = document.getElementsByClassName("close-vid");
const btnVid = document.getElementsByClassName('noselect');

for(let i = 0 ; i < btnVid.length; i++) {
    btnVid[i].addEventListener('click', () => {
        bgModalVid[i].style.display = 'block';
    });
}

for(let i = 0 ; i < span2.length; i++) {
    span2[i].addEventListener('click', () => {
        bgModalVid[i].style.display = 'none';
    });
}


function ScrollToTarget(target)
{
     document.getElementById(target).scrollIntoView(true);
}

window.addEventListener("scroll", (event) => {
    // const navbar = document.querySelector('.hori-nav');
const LinkA = document.getElementsByClassName('change');
const ul = document.getElementsByClassName('ul-change');
var y = window.scrollY
// console.log(y)

if(y > 1400) {
    for(let i = 0 ; i < LinkA.length; i++) {

        LinkA[i].style.color = '#fff'
        ul[0].style.background = 'linear-gradient(90deg, rgba(0, 35, 122, 0.0) 0%, rgba(0, 35, 122, 0.35) 25%, rgba(0, 35, 122, 0.35) 75%, rgba(0, 35, 122, 0) 100%)'
    }
} else {
    for(let i = 0 ; i < LinkA.length; i++) {
        LinkA[i].style.color = '#00237a80'
        ul[0].style.background = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.35) 25%, rgba(255, 255, 255, 0.35) 75%, rgba(255, 255, 255, 0) 100%)'
    }
}

});


// Get the modal
const modal = document.querySelectorAll("#myModal-img");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.querySelectorAll("#major");
// console.log(img.length)
// const modalImg = document.getElementById("img01");
// const captionText = document.getElementById("caption-img");

for(let a =0 ; a < img.length ; a++) {
    img[a].addEventListener('click', () => {
        modal[a].style.display = 'block'
        // console.log(modal[a])
    });
}

// Get the <span> element that closes the modal
const spanImg = document.getElementsByClassName("close-img");
for(let a =0 ; a < img.length ; a++) {
    spanImg[a].addEventListener('click', () => {
        modal[a].style.display = 'none'
        // console.log(spanImg[a])
    });
}
// When the user clicks on <span> (x), close the modal
// spanImg.onclick = function() {
//   modal.style.display = "none";
// }

