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
	const btn_effacer = document.createElement('span'); //18-a
	const unique_id = new Date().getTime(); //18-d pour remplacer mes_listes.length (car pb en cas de suppression)

	ma_section.setAttribute('id', 'section_' + unique_id); //18-f id dynamique
	btn_effacer.textContent = '🚮'; //18-b ajout emoji
	//4-b ==> 6-a
	// mon_titre.textContent = 'Ma liste' + (mes_listes.length + 1);
	mon_titre.textContent = input_nom.value;
	btn_effacer.setAttribute('id', 'effacer_ul_' + unique_id); //18-e id dynamique
	btn_effacer.className = 'effacer_section'; //19-a
	ma_liste_ul.setAttribute('id', 'liste_ul_' + unique_id); //9-b id dynamique
	mon_input.setAttribute('placeholder', 'Item à ajouter'); //8-b
	mon_input.setAttribute('type', 'text'); //8-a
	mon_input.setAttribute('id', 'nom_item_' + unique_id); //8-c id dynamique
	mon_bouton.setAttribute('type', 'button'); //8-d
	mon_bouton.setAttribute('id', 'bouton_item_' + unique_id); //8-e id dynamique
	mon_bouton.textContent = 'Ajouter un élément'; //8-f
	//4-c
	ma_section.appendChild(btn_effacer); //18-e bis
	ma_section.appendChild(mon_titre);
	ma_section.appendChild(ma_liste_ul);
	ma_section.appendChild(mon_input); //7-c
	ma_section.appendChild(mon_bouton); //7-d

	conteneur.appendChild(ma_section);

	mon_bouton.addEventListener('click', ajouter_element); //11-Cible le bouton de façon dynamique
	btn_effacer.addEventListener('click', effacer_liste); //18-c

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
	const nouveau_span = document.createElement('span'); //16-a on crée un span(inline)
	const unique_id = new Date().getTime(); //14-e Affecte un id en déterminant la date du jour et récupérant l'heure en ms

	nouvel_box.setAttribute('type', 'checkbox'); //On attribut un type checkbox
	nouveau_label.textContent = input_cible.value; //10-b On injecte la valeur de l'input dans le label
	nouveau_span.textContent = '🚮'; //16-c on injecte la valeur de l'input dans le span
	nouveau_span.className = 'effacer_item'; //19-b on ajoute une classe au span (19-a = css)

	nouvel_box.setAttribute('id', 'checkbox_' + unique_id); //14-c Add id unique à la checkbox choisie
	nouveau_label.setAttribute('id', 'label_' + unique_id); //14-d Add id au label 14-c
	nouvel_item.setAttribute('id', 'li_' + unique_id); //16-on donne un id à l'elts li
	nouveau_span.setAttribute('id', 'span_' + unique_id); //16-b on donne le même id au span que celui de l'elts li

	nouvel_item.appendChild(nouvel_box);
	nouvel_item.appendChild(nouveau_label);
	nouvel_item.appendChild(nouveau_span); //16-e on ajoute (affiche) le span à l'elts li
	ul_cible.appendChild(nouvel_item); //10-c
	input_cible.value = ''; //12-on vide l'input
	//14-on add un ecouteur d'event sur le changement ou non de la checkbox (soit on détecte le click ou soit le changement de valeur)
	nouvel_box.addEventListener('change', item_clicked);
	//16-d on ajoute un écouteur d'event sur le span
	nouveau_span.addEventListener('click', item_deleted);
}

//14-a
const item_clicked = (event) => {
	//console.log(event); //14-b vérifie que l'event est bien détecté (qd on coche ou décoche la checkbox)
	const checkbox_id = event.target.id; //14-f récupère l'id de la checkbox
	const id_cible = checkbox_id.split('_')[1]; //14-g récupère l'id de la checkbox
	const label_cible = document.getElementById('label_' + id_cible); //14-h récupère le label correspondant à la checkbox
	//15- On test la checkbox
	if (event.target.checked) {
		label_cible.className = 'line_through'; //15-a si la checkbox est cochée on ajoute ou retire une classe au label => .line_through en CSS
	} else {
		//15-b si la checkbox n'est pas cochée
		label_cible.className = '';
	}
};

//17-
const item_deleted = (event) => {
	//console.log(event); //17-a vérifie que l'event est bien détecté (qd on clique sur le span)
	const span_id = event.target.id; //17-b récupère l'id du span
	const id_cible = span_id.split('_')[1]; //17-c récupère l'id du span
	const li_cible = document.getElementById('li_' + id_cible); //17-d récupère l'elts li correspondant au span
	//console.log(li_cible); //17-a bis
	li_cible.remove(); //17-e supprime l'elts li
};

//18-d
const effacer_liste = (event) => {
	//console.log(event); //18-e vérifie que l'event est bien détecté (qd on clique sur le btn)
	const effacer_id = event.target.id; //18-g récupère l'id du btn
	const id_cible = effacer_id.split('_')[2]; //18-h récupère l'id du btn
	const section_cible = document.getElementById('section_' + id_cible); //18-i récupère l'elts ul correspondant au btn
	//console.log(ul_cible); //18-j
	section_cible.remove(); //18-k vide l'elts section
};
