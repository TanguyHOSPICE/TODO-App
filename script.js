/**BuG Sur les li*** */
/* const container = document.getElementById('container'); //-1
const btn_list = document.getElementById('btn_list'); //-2
const input_nom = document.getElementById('name_list'); //-6

const mes_listes = []; //-5 ou new Array()

//-4
const createList = () => {
	//4-a
	const ma_section = document.createElement('section');
	const mon_titre = document.createElement('h2');
	const ma_liste_ul = document.createElement('ul');
	const mon_input = document.createElement('input'); //7-a
	const mon_bouton = document.createElement('button'); //7-b

	//4-b ==> 6-a
	// mon_titre.textContent = 'Ma liste' + (mes_listes.length + 1);
	mon_titre.textContent = input_nom.value;
	ma_liste_ul.setAttribute('id', 'list_ul_' + mes_listes.length); //9-b id dynamique
	mon_input.setAttribute('placeholder', 'Ajouter un item'); //8-b
	mon_input.setAttribute('type', 'text'); //8-a
	mon_input.setAttribute('id', 'nom_item_' + mes_listes.length); //8-c id dynamique
	mon_bouton.setAttribute('type', 'button'); //8-d
	mon_bouton.setAttribute('id', 'bouton_item_' + mes_listes.length); //8-e id dynamique
	mon_bouton.textContent = 'Ajouter un item'; //8-f

	//4-c
	ma_section.appendChild(mon_titre);
	ma_section.appendChild(ma_liste_ul);
	ma_section.appendChild(mon_input); //7-c
	ma_section.appendChild(mon_bouton); //7-d

	container.appendChild(ma_section);

	mon_bouton.addEventListener('click', addElement); //11-Cible le bouton de façon dynamique

	//5-a
	mes_listes.push(ma_section);
	input_nom.value = ''; //6-b on vide l'input
};

//-9
const addElement = (event) => {
	// console.log(event);
	//13-a evnt.target //<-- est l'élt qui à déclenché l'event
	const btn_id = event.target.id;
	//13-b mon_bouton_<id>
	const id_cible = btn_id.split('_')[2];

	const input_cible = document.getElementById('nom_item_' + id_cible); // Cherche l'input sur lequel on a cliqué
	const ul_cible = document.getElementById('liste_ul_' + id_cible); //9-c Cherche la liste sur laquelle on a cliqué

	let nouvel_item = document.createElement('li'); //10-a
	let nouvel_box = document.createElement('input');
	let nouveau_label = document.createElement('label');

	nouvel_box.setAttribute('type', 'checkbox');
	nouveau_label.textContent = input_cible.value; //10-b
	nouvel_item.appendChild(nouvel_box);
	nouvel_item.appendChild(nouveau_label);
	ul_cible.appendChild(nouvel_item); //10-c

	input_cible.value = ''; //12-on vide l'input
};

//-3
btn_list.addEventListener('click', createList); */

const conteneur = document.getElementById('conteneur'); //-1
const input_nom = document.getElementById('nom_liste'); //-6
const bouton_list = document.getElementById('bouton_list'); //-2

const mes_listes = []; //-5 ou new Array()

bouton_list.addEventListener('click', creer_liste); //-3
//-4
function creer_liste() {
	//4-a Création des éléments
	const ma_section = document.createElement('section');
	const mon_titre = document.createElement('h1');
	const ma_liste_ul = document.createElement('ul');
	const mon_input = document.createElement('input'); //7-a
	const mon_bouton = document.createElement('button'); //7-b

	//4-b ==> 6-a
	// mon_titre.textContent = 'Ma liste' + (mes_listes.length + 1);
	mon_titre.textContent = input_nom.value;
	ma_liste_ul.setAttribute('id', 'liste_ul_' + mes_listes.length); //9-b id dynamique
	mon_input.setAttribute('placeholder', 'Item à ajouter'); //8-b
	mon_input.setAttribute('type', 'text'); //8-a
	mon_input.setAttribute('id', 'nom_item_' + mes_listes.length); //8-c id dynamique
	mon_bouton.setAttribute('type', 'button'); //8-d
	mon_bouton.setAttribute('id', 'bouton_item_' + mes_listes.length); //8-e id dynamique
	mon_bouton.textContent = 'Ajouter un élément'; //8-f
	//4-c
	ma_section.appendChild(mon_titre);
	ma_section.appendChild(ma_liste_ul);
	ma_section.appendChild(mon_input); //7-c
	ma_section.appendChild(mon_bouton); //7-d

	conteneur.appendChild(ma_section);

	mon_bouton.addEventListener('click', ajouter_element); //11-Cible le bouton de façon dynamique

	mes_listes.push(ma_section);
	input_nom.value = ''; //6-b on vide l'input
}

//-9
function ajouter_element(event) {
	// console.log(event);
	//13-a evnt.target //<-- est l'élt qui à déclenché l'event
	const bouton_id = event.target.id; //Prend l'info du btn ici l'id
	//13-b mon_bouton_<id>
	const id_cible = bouton_id.split('_')[2]; // Récupère l'id du btn
	//Récupère l'input et l'ul créés dynamiquement
	const input_cible = document.getElementById('nom_item_' + id_cible); // Cherche l'input sur lequel on a cliqué
	const ul_cible = document.getElementById('liste_ul_' + id_cible); //9-c Cherche la liste sur laquelle on a cliqué
	//Création des éléments virtuels dont input et label avec une checkbox
	const nouvel_item = document.createElement('li'); //10-a
	const nouvel_box = document.createElement('input');
	const nouveau_label = document.createElement('label');

	nouvel_box.setAttribute('type', 'checkbox'); //On attribut un type checkbox
	nouvel_box.setAttribute('id', 'checkbox_AAA'); //14-c Add id unique à la checkbox choisie
	nouveau_label.textContent = input_cible.value; //10-b On injecte la valeur de l'input dans le label
	nouveau_label.setAttribute('id', 'label_AAA'); //14-d Add id au label 14-c
	nouvel_item.appendChild(nouvel_box);
	nouvel_item.appendChild(nouveau_label);
	ul_cible.appendChild(nouvel_item); //10-c
	input_cible.value = ''; //12-on vide l'input
	//14-on add un ecouteur d'event sur le changement ou non de la checkbox (soit on détecte le click ou soit le changement de valeur)
	nouvel_box.addEventListener('change', item_clicked);
}

//14-a
const item_clicked = (event) => {
	console.log(event); //14-b vérifie que l'event est bien détecté (qd on coche ou décoche la checkbox)
	const checkbox_id = event.target.id; //14-e récupère l'id de la checkbox
	const id_cible = checkbox_id.split('_')[1]; //14-f récupère l'id de la checkbox
	const label_cible = document.getElementById('label_' + id_cible); //14-g récupère le label correspondant à la checkbox
	//15- On test la checkbox
	if (event.target.checked) {
		label_cible.className = 'line_through'; //15-a si la checkbox est cochée on ajoute ou retire une classe au label => .line_through en CSS
	} else {
		//15-b si la checkbox n'est pas cochée
		label_cible.className = '';
	}
};
