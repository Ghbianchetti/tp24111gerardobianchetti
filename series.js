
let pagina=1;

const btnAnterior=document.getElementById('btnAnterior')
const btnSiguiente=document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click',()=>{
    pagina+=1;
    if(pagina<=5){
        cargarSeries()
    }
    if(pagina==5){
        btnSiguiente.disabled=true;
        btnSiguiente.style.backgroundColor='grey';
        btnSiguiente.style.backgroundColor='withe'
    }
    if(pagina>=1){
        btnAnterior.disabled=false;
        btnAnterior.style.backgroundColor='#970000';
        
    }

})

btnAnterior.addEventListener('click',()=>{
    pagina-=1;
    if (pagina>=1){
        btnAnterior.style.backgroundColor='#970000';
        btnAnterior.style.backgroundColor='withe'
        cargarSeries()
    }
    
    if(pagina==1){
        btnAnterior.disabled=true;
        btnAnterior.style.backgroundColor='grey';
        // btnAnterior.style.color='transparent'
    }

    if(pagina!=5){
        btnSiguiente.disabled=false;
    }

    if(pagina<5){
        btnSiguiente.style.backgroundColor='#970000';
    }
        
    
      
       

})




const cargarSeries = async()=>{
    try{

        const respuesta = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=5041fb186006a172a0f3a65cfc2898b3&languaje=es&page=${pagina}`);  
                
        

        if (respuesta.status===200){
            const datos = await respuesta.json();
            console.log(datos);
                    
            let series='';
            datos.results.forEach(serie => {
                series+= 
                `
                    <div class="box1" id="box1">
                        <div class="content">
                            <img src= "https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="">
                            <h2 style="text-align:center ;">${serie.name}</h2>
                        </div >
                    </div>
                `
                
                //  console.log(serie.name)
                //  console.log(sectionSeries)
                //  sectionSeries.insert
                // console.log(serie.original_name)
                // console.log
            });
            document.getElementById('container1').innerHTML=series    
            // console.log(series)
            

        }else if(respuesta.status===401){
            console.log('Error en la llave')
        }else if(respuesta.status===404){
            console.log('La película buscada no existe')
        }
        else{
            console.log('Error de conexión al servidor')
        }

           
    }catch(error)
    {
      console.log(error)
    }
       
    
}

cargarSeries();