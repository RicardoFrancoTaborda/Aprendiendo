document.getElementById('btn').addEventListener('click', function(){

	var input= document.createElement('input');
	input.setAttribute('id','caja');
	input.setAttribute('placeholder','Insert New Task');
	var taskNew=document.getElementsByClassName('task-new')[0];


	input.addEventListener('keyup',(event)=>{

		if(event.key == 'Enter'){
			formulario();
			taskNew.removeChild(input);
			
		}
	});
			

	taskNew.appendChild(input);
	

});
	

		var div=document.getElementById('task1');
		div.addEventListener('click',()=>{
		div.style.display='none'
		});

		var div1=document.getElementById('task2');
		div1.addEventListener('click',()=>{
		div1.style.display='none'
		});

		var div2=document.getElementById('task3');
		div2.addEventListener('click',()=>{
		div2.style.display='none'
		});

		var div3=document.getElementById('task4');
		div3.addEventListener('click',()=>{
		div3.style.display='none'
		});

		var div4=document.getElementById('task5');
		div4.addEventListener('click',()=>{
		div4.style.display='none'
		});

		var div5=document.getElementById('task6');
		div5.addEventListener('click',()=>{
		div5.style.display='none'
		});

		var div6=document.getElementById('task7');
		div6.addEventListener('click',()=>{
		div6.style.display='none'
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
	div.setAttribute('style','background-color:black');
	
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






