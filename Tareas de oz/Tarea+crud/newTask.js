

			elemento('#btn').addEventListener('click',function(){
				var input= document.createElement('input');
				input.setAttribute('id','caja');
				input.setAttribute('placeholder','Insert New Task');
				input.setAttribute('onkeyup','if(event.keyCode == 13)formulario()');
						
	
					elemento('.task-new').appendChild(input);

					})

					function elemento(selector){
						return document.querySelector(selector);
					}

		function formulario(){

			var drag='drag_indicator';
			var more='more_vert';

			var entrada = document.getElementById('caja');
	 		var nuevaEntrada=entrada.value;
	 		var listado=document.getElementById('formulario');
			
	 		
	 		var div=document.createElement('div');
	 		div.setAttribute('class','task-tag');
	 		div.setAttribute('style','background-color:black');
	 		
	 		var i=document.createElement('i');
	 		i.setAttribute('class','material-icons');
	 		i.setAttribute('id','puntos');
	 		i.innerHTML=drag;

	 		
	 		var p=document.createElement('p');
	 		p.setAttribute('id','word_task');
	 		p.innerHTML= nuevaEntrada + ' ';

	 		var f=document.createElement('f');
	 		f.setAttribute('class','material-icons');
	 		f.setAttribute('id','puntos');
	 		f.innerHTML=more;
	 		
	 		listado.appendChild(div);
	 		div.appendChild(i);
	 		div.appendChild(p);
	 		div.appendChild(f);
	 		entrada.value='';
	 		i.onclick=function(){
	 			listado.removeChild(div);
	 		}
	 		f.onclick=function(){
	 			document.getElementById('caja').value=nuevaEntrada;
	 			listado.removeChild(div);
	 		}
	 	}

	 	$('#btn1').addEventListener('click',function(){
						var input= document.createElement('input');
						input.setAttribute('id','caja');
						input.setAttribute('placeholder','Insert New Task');
						input.setAttribute('onkeyup','if(event.keyCode == 13)formulario()');
						
	
						$('.task-new1').appendChild(input);

					})

					function $(selector){
						return document.querySelector(selector);
					}

		function formulario1(){

			var drag='drag_indicator';
			var vert1='delete_outline';

			var entrada = document.getElementById('caja');
	 		var nuevaEntrada=entrada.value;
	 		var listado=document.getElementById('formulario1');
			
	 		
	 		var div=document.createElement('div');
	 		div.setAttribute('class','task-tag');
	 		div.setAttribute('style','background-color:black');
	 		
	 		var i=document.createElement('i');
	 		i.setAttribute('class','material-icons');
	 		i.setAttribute('id','puntos1');
	 		i.innerHTML=drag;

	 		
	 		var p=document.createElement('p');
	 		p.innerHTML= nuevaEntrada + ' ';

	 		var f=document.createElement('f');
	 		f.setAttribute('class','material-icons');
	 		f.setAttribute('id','puntos1');
	 		f.innerHTML=vert1;
	 		
	 		listado.appendChild(div);
	 		div.appendChild(i);
	 		div.appendChild(p);
	 		div.appendChild(f);
	 		entrada.value='';
	 		i.onclick=function(){
	 			listado.removeChild(div);
	 		}
	 		f.onclick=function(){
	 			document.getElementById('caja').value=nuevaEntrada;
	 			listado.removeChild(div);
	 		}
	 	}
		
		