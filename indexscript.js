
//JS PARA LOS BOTONES DE CARGAR MAS PELICULAS

//CARGAR MAS PELICULAS MAS VISTAS

const loadmore1=document.getElementById('load-more-1');
const box1=document.getElementsByClassName('box1');
// console.log(loadmore1);
loadmore1.addEventListener('click',evento=>{
    //console.log(box1);
    // box1.style.display='inline-block';
    for (let i=4;i<box1.length; i++){
        box1[i].style.display='inline-block'
    }
    loadmore1.style.display='none'
});

//CARGAR MAS PELICULAS DE ACCION

const loadmore2=document.getElementById('load-more-2');
const box2=document.getElementsByClassName('box2');
// console.log(loadmore2);
loadmore2.addEventListener('click',evento=>{
    //console.log(box2);
    // box2.style.display='inline-block';
    for (let i=4;i<box2.length; i++){
        box2[i].style.display='inline-block'
    }
    loadmore2.style.display='none'
});


//CARGAR MAS PELICULAS DE ESTRENO

const loadmore3=document.getElementById('load-more-3');
const box3=document.getElementsByClassName('box3');
// console.log(loadmore3);
loadmore3.addEventListener('click',evento=>{
    //console.log(box3);
    // box3.style.display='inline-block';
    for (let i=4;i<box3.length; i++){
        box3[i].style.display='inline-block'
    }
    loadmore3.style.display='none'
});