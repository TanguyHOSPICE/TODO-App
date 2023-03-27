const container = document.getElementById('container'); //-1
const btn_list = document.getElementById('btn_list'); //-2
const input_name = document.getElementById('name_list'); //-6

const mes_listes = []; //-5 ou new Array()

//-4
const createList = () => {
	//4-a
	const ma_section = document.createElement('section');
	const mon_titre = document.createElement('h2');
	const ma_liste_ul = document.createElement('ul');
	const input_item = document.createElement('input'); //7-a
	const btn_item = document.createElement('button'); //7-b

	//4-b ==> 6-a
	// mon_titre.textContent = 'Ma liste' + (mes_listes.length + 1);
	mon_titre.textContent = input_name.value;
	input_item.setAttribute('type', 'text'); //8-a
	input_item.setAttribute('placeholder', 'Ajouter un item'); //8-b
	input_item.setAttribute('id', 'name_item_' + mes_listes.length); //8-c id dynamique
	btn_item.setAttribute('type', 'button'); //8-d
	btn_item.setAttribute('id', 'btn_item_' + mes_listes.length); //8-e id dynamique
	btn_item.textContent = 'Ajouter un item'; //8-f

	//4-c
	ma_section.appendChild(mon_titre);
	ma_section.appendChild(ma_liste_ul);
	ma_section.appendChild(input_item); //7-c
	ma_section.appendChild(btn_item); //7-d

	container.appendChild(ma_section);
	//5-a
	mes_listes.push(ma_section);
	console.log(mes_listes);

	//6-b on vide l'input
	input_name.value = '';
};

const AddElement = (e) => {};
//-3
btn_list.addEventListener('click', createList);
