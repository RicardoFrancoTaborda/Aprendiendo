function formulario(){
			var entrada=document.getElementById('caja');
			var nuevaEntrada=entrada.value;
			var listado=document.getElementById('lista');
			var li=document.createElement('li');
			var x = document.createElement('button');
			var u = document.createElement('button');
			li.innerHTML=nuevaEntrada + ' ';
			x.innerHTML= 'Delete';
			x.id="btn-delete";
			u.innerHTML='Update';
			u.id="btn-update";
			listado.appendChild(li);
			li.appendChild(x);
			li.appendChild(u);
			entrada.value='';
			x.onclick=function(){
				lista.removeChild(li);
			}
			u.onclick=function(){
				document.getElementById('caja').value=nuevaEntrada;
				lista.removeChild(li);
			}

		}
		
/*	$('#btn').addEventListener('click',function(){
						var input= document.createElement('input');
						input.setAttribute('type','textarea');
						input.setAttribute('id','textArea');
						input.setAttribute('placeholder','Insert Name Task');
						
						/*crear un nuevo elemento investigar para insertar un parrafo con las 
						caracteristicas de word task

						$('.new_task').appendChild(input);

					})

					function $(selector){
						return document.querySelector(selector);
					}

$('#btn1').addEventListener('click',function(){
						var input= document.createElement('input');
						input.setAttribute('type','textarea');
						input.setAttribute('id','textarea');
						input.setAttribute('placeholder','Insert Name Task');
						
						
						$('.new_task_1').appendChild(input);

					})

					function $(selector){
						return document.querySelector(selector);
					}
*/