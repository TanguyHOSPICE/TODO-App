const container = document.getElementById('container'); //-1
const btn_list = document.getElementById('btn_list'); //-2

const mes_listes = []; //-5 ou new Array()

//-4
const createList = () => {
	//4-a
	const ma_section = document.createElement('section');
	const mon_titre = document.createElement('h2');
	const ma_liste_ul = document.createElement('ul');
	//4-b
	// mon_titre.textContent = 'Ma liste' + (mes_listes.length + 1);
	//4-c
	ma_section.appendChild(mon_titre);
	ma_section.appendChild(ma_liste_ul);
	container.appendChild(ma_section);
	//5-a
	mes_listes.push(ma_section);
	console.log(mes_listes);
	/* 
	for (let i = 0; i < 3; i++) {
		const item = document.createElement('li');
		list.appendChild(item);
	} */
};
//-3
btn_list.addEventListener('click', createList);
