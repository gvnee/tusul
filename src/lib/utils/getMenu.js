export function getMenu() {
	const allTutorials = import.meta.glob('/src/content/tutorial/**/*.md');

	let menu = {};
	for(let i in allTutorials){
		let link = i.replace("/src/content", "").replace(".md", "");
		let file = link.replace("/tutorial/", "");

		const arr = file.split('/');
		const tutorial = arr[0];
		const chapter = arr[1];
		const unit = arr[2];
		
		if(!menu[tutorial]) menu[tutorial] = {};
		if(!menu[tutorial][chapter]) menu[tutorial][chapter] = {};
		menu[tutorial][chapter][unit] = link;
	}
	return {menu};
};