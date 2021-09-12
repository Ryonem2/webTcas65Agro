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