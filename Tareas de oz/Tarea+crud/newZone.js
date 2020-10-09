
var zone=document.getElementById('zones1');
zone.addEventListener('click',()=>{
zone.style.display='none';
})

var zone1=document.getElementById('zones2');
zone1.addEventListener('click',()=>{
zone1.style.display='none';
})

var zone2=document.getElementById('zones3');
zone2.addEventListener('click',()=>{
zone2.style.display='none';
})

var zone3=document.getElementById('zones4');
zone3.addEventListener('click',()=>{
zone3.style.display='none';
})

var zone4=document.getElementById('zones5');
zone4.addEventListener('click',()=>{
zone4.style.display='none';
})

var zone5=document.getElementById('zones6');
zone5.addEventListener('click',()=>{
zone5.style.display='none';
})

var zone6=document.getElementById('zones7');
zone6.addEventListener('click',()=>{
zone6.style.display='none';
})


document.getElementById('btn1').addEventListener('click', function(){

	var input= document.createElement('input');
	input.setAttribute('id','caja');
	input.setAttribute('placeholder','Insert New Zone');
	var zoneNew=document.getElementsByClassName('zone-new')[0];

	input.addEventListener('keyup',(event)=>{

		if(event.key == 'Enter'){
			formulario1();
			zoneNew.removeChild(input);
			
		}
	});
		
	zoneNew.appendChild(input);
	
	});

function formulario1(){

	var drag='drag_indicator';
	var del='delete_outline';

	var entrada = document.getElementById('caja');
	var nuevaEntrada=entrada.value;
	var listado=document.getElementById('formulario1');
	var eliminar=document.getElementById('puntos1');

	var zon=document.createElement('div');
	zon.setAttribute('class','zone-tag');
	zon.setAttribute('style','background-color: #E2E2ED;');
	
	var i=document.createElement('i');
	i.setAttribute('class','material-icons');
	i.setAttribute('id','puntos1');
	i.setAttribute('onclick', 'click()');
	i.innerHTML=drag;

	var p=document.createElement('p');
	p.setAttribute('id','word_zone');
	p.innerHTML= nuevaEntrada + ' ';

	var f=document.createElement('f');
	f.setAttribute('class','material-icons');
	f.setAttribute('id','vert1');
	f.setAttribute('onclick', 'click()');
	f.innerHTML=del;
	
	listado.appendChild(zon);
	zon.appendChild(i);
	zon.appendChild(p);
	zon.appendChild(f);
	entrada.value='';

	
	f.onclick=function(){
		
		listado.removeChild(zon);
	}


	i.onclick=function(){

		addEventListener('keyup',(event)=>{

		if(event.key == 'Enter'){
			
			p.replaceWith(entrada);
			listado.removeChild(zon);
		}
	});
	}

}