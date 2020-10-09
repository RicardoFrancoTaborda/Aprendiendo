	
		var task=document.getElementById('task1');
		task.addEventListener('click',()=>{
		task.style.display='none'
		});
		

		var task1=document.getElementById('task2');
		task1.addEventListener('click',()=>{
		task1.style.display='none'
		});

		var task2=document.getElementById('task3');
		task2.addEventListener('click',()=>{
		task2.style.display='none'
		});

		var task3=document.getElementById('task4');
		task3.addEventListener('click',()=>{
		task3.style.display='none'
		});

		var task4=document.getElementById('task5');
		task4.addEventListener('click',()=>{
		task4.style.display='none'
		});

		var task5=document.getElementById('task6');
		task5.addEventListener('click',()=>{
		task5.style.display='none'
		});

		var task6=document.getElementById('task7');
		task6.addEventListener('click',()=>{
		task6.style.display='none'
		});



	document.getElementById('btn').addEventListener('click', function(){

	var input= document.createElement('input');
	input.setAttribute('id','caja');
	input.setAttribute('placeholder','Insert New Task');
	var taskNew=document.getElementsByClassName('task-new')[0];

	input.addEventListener('keyup',(event)=>{

		if(event.key == 'Enter'){

			formulario();
			setRandomColor();
			taskNew.removeChild(input);
						
		}

	});
		
	taskNew.appendChild(input);
	
	});
	


function formulario(){

	var drag='drag_indicator';
	var more='more_vert';

	var entrada = document.getElementById('caja');
	var nuevaEntrada=entrada.value;
	var listado=document.getElementById('formulario');
	var eliminar=document.getElementById('puntos');

	
	var div=document.createElement('div');
	div.setAttribute('class','task-tag');
	div.setAttribute('id','color-task');
	div.setAttribute('style','background-color:#000'); 

	var i=document.createElement('i');
	i.setAttribute('class','material-icons');
	i.setAttribute('id','puntos');
	i.setAttribute('onclick', 'click()');
	i.innerHTML=drag;

	var p=document.createElement('p');
	p.setAttribute('id','word_task');
	p.innerHTML= nuevaEntrada + ' ';

	var f=document.createElement('f');
	f.setAttribute('class','material-icons');
	f.setAttribute('id','puntos');
	f.setAttribute('onclick', 'click()');
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

		addEventListener('keyup',(event)=>{

		if(event.key == 'Enter'){
			
			p.replaceWith(entrada);
			listado.removeChild(div);
		}
	});
	}

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#color-task").css("background-color", getRandomColor());
}


