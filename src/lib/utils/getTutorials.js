export const getTutorials = async () => {
	const allTutorials = import.meta.glob('/src/content/tutorial/**/*.md');

	let tutorials = [];
	for(let file in allTutorials){
		tutorials.push(file.replace("src/content/", "").replace(".md", ""));
	}
	return {tutorials};
	
	
	// const iterablePostFiles = Object.entries(allPostFiles);
	// return iterablePostFiles;
	// const allPosts = await Promise.all(
		// iterablePostFiles.map(async ([path]) => {
			// return {
				// path: path
			// };
		// })
	// );
	// console.log("final\n", allPosts);
	// return allPosts;
};