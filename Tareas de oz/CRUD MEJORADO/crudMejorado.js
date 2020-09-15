function nombres(){
	 		var entrada = document.getElementById('caja');
	 		var nuevaEntrada=entrada.value;
	 		var listado=document.getElementById('lista');
	 		var li=document.createElement('li');
	 		var x=document.createElement('span');
	 		var u=document.createElement('span');
	 		li.innerHTML=nuevaEntrada + ' ';
	 		x.innerHTML=' X ';
	 		u.innerHTML=' U ';
	 		listado.appendChild(li);
	 		li.appendChild(x);
	 		li.appendChild(u);
	 		entrada.value='';
	 		x.onclick=function(){
	 			listado.removeChild(li);
	 		}
	 		u.onclick=function(){
	 			document.getElementById('caja').value=nuevaEntrada;
	 			listado.removeChild(li);
	 		}
	 	}