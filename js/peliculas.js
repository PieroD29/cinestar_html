const getPeliculas = async () =>
{
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/peliculas/${id}`)

    if(data.status==200){
        const peliculas = await data.json()

        let html=`<br/><h1>Cartelera</h1><br/>`

        peliculas.forEach(pelicula => {
            html +=
            `<div class="contenido-pelicula">
            <div class="datos-pelicula">
                <h2>${pelicula.Titulo}</h2><br/>
                <p>${pelicula.Sinopsis}</p>
                <br/>
                   <div class="boton-pelicula"> 
                       <a href="pelicula.html?id=${pelicula.id}" >
                           <img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       </a>
                   </div>
                   <div class="boton-pelicula"> 
                       <a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
                           <img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
                       </a>
                </div> 
            </div>
            <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
        </div>`           
        });
        document.getElementById('contenido-interno').innerHTML=html
    }
}

getPeliculas()





/*<br/><h1>Cartelera</h1><br/>
				<div class="contenido-pelicula">
					<div class="datos-pelicula">
						<h2>Locos de Amor 2 (+14) (HD - Doblada)</h2><br/>
						<p>¡Vuelve la comedia musical del año! Un hombre descorazonado que empieza a salir con una conductora que da consejos de amor en la radio. Una mujer desesperada por ser mamá ...</p>
						<br/>
                       	<div class="boton-pelicula"> 
                       		<a href="http://www.cinestar.com.pe/cartelera/pelicula/Locos-de-Amor-2" >
                       			<img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       		</a>
               			</div>
               			<div class="boton-pelicula"> 
               				<a href="https://www.youtube.com/v/v3fspveODBI" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
               					<img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
               				</a>
                        </div> 
					</div>
					<img src="img/pelicula/10.jpg" width="160" height="226"/><br/><br/>
				</div>*/ 