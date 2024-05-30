//JS PARA EL FORMULARIO DE REGISTRO COMIENZO=================================

const formulario=document.getElementById('inicio-sesion')
console.log(formulario);

formulario.addEventListener('submit', evento=>{
    //Detiene el envío del formulario - Para validar los datos
    //cargados en los campos
    // const enviado=document.getElementById('enviado')
    // enviado.style.visibility='visible';
    
    evento.preventDefault();

    //Validamos los campos del formulario
    if(validarFormulario()){
        //Si todos los campos están completos
           
        formulario.submit();
        
        
        
        
       
    }

})



//Funcion para validar los campos del formulario

function validarFormulario(){

    //Obtener los valores de los campos
    const email=document.getElementById('email').value;
    const contrasena=document.getElementById('contrasena').value;
    

    //Validar datos en email

    if(email==='' || validarEmail(email)== false ){
        mostrarError('email','coloque un email valido');
        
    }
    else{
        mostrarError('email','');
        var constataemail=true;
    }

    //Validar datos en contraseña
         
    if(contrasena==='' || validarContrasena(contrasena)==false){
        mostrarError('contrasena','CONTRASEÑA INVALIDA - La misma debe contener al menos 1 dígito, 1 letra minúscula, 1 letra mayúscula, 1 caracter especial, y ser al menos de 8 caracteres de largo.');
    }else{
        mostrarError('contrasena','');
        var constatacontrasena=true;
        
    }

    if(constataemail & constatacontrasena){
               
        return true;
    }
  
    
}


function mostrarError(campo,mensaje){
    const campoError=document.getElementById(`${campo}-error`);
    campoError.innerText = mensaje;
}   

function validarEmail(email){
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return expresionRegular.test(email)
}

function validarContrasena(contrasena){
    const expresionRegularContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return expresionRegularContrasena.test(contrasena)
}

//JS PARA EL FORMULARIO DE REGISTRO FIN=================================



// //JS PARA LOS BOTONES DE CARGAR MAS PELICULAS

// //CARGAR MAS PELICULAS MAS VISTAS

// const loadmore1=document.getElementById('load-more-1');
// const box1=document.getElementsByClassName('box1');
// // console.log(loadmore1);
// loadmore1.addEventListener('click',evento=>{
//     //console.log(box1);
//     // box1.style.display='inline-block';
//     for (let i=4;i<box1.length; i++){
//         box1[i].style.display='inline-block'
//     }
//     loadmore1.style.display='none'
// });

// //CARGAR MAS PELICULAS DE ACCION

// const loadmore2=document.getElementById('load-more-2');
// const box2=document.getElementsByClassName('box2');
// // console.log(loadmore2);
// loadmore2.addEventListener('click',evento=>{
//     //console.log(box2);
//     // box2.style.display='inline-block';
//     for (let i=4;i<box2.length; i++){
//         box2[i].style.display='inline-block'
//     }
//     loadmore2.style.display='none'
// });


// //CARGAR MAS PELICULAS DE ESTRENO

// const loadmore3=document.getElementById('load-more-3');
// const box3=document.getElementsByClassName('box3');
// // console.log(loadmore3);
// loadmore3.addEventListener('click',evento=>{
//     //console.log(box3);
//     // box3.style.display='inline-block';
//     for (let i=4;i<box3.length; i++){
//         box3[i].style.display='inline-block'
//     }
//     loadmore3.style.display='none'
// });

