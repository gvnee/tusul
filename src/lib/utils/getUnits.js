export function getUnits(tutorialParam) {
	const allTutorials = import.meta.glob('/src/content/tutorial/**/*.md');

	let units = [];
	for(let i in allTutorials){
		let link = i.replace("/src/content", "").replace(".md", "");
		let file = link.replace("/tutorial/", "");

		const arr = file.split('/');
		const tutorial = arr[0];
		if(tutorial == tutorialParam) units.push(link);
	}
	return units;
};