
const dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const titulo=document.getElementById('titulo');
const lista=document.getElementById('lista');
const seleccionar=document.getElementById('seleccionar');

/*
const elementoLista=document.createElement('li');

elementoLista.textContent='Lunes';


lista.appendChild(elementoLista);

*/

titulo.innerHTML='<span> Crear o insertar elementos </span>';

const contenedor=document.createDocumentFragment();
/*
for (const dia of dias) {

	const elementoLista=document.createElement('li');
	elementoLista.textContent=dia;
	contenedor.appendChild(elementoLista);

}
*/
for (const dia of dias) {
	const seleccionItem=document.createElement('option');
	seleccionItem.setAttribute('value',dia.toLowerCase());
	seleccionItem.textContent=dia;
	contenedor.appendChild(seleccionItem);

}

//lista.appendChild(contenedor);
seleccionar.appendChild(contenedor);




