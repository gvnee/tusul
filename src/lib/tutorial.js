export const getTutorials = () => {
  const files = import.meta.glob('./tutorial/**/**.md');
  
  let tutorials = [];
  for(let file in files){
    let path = file.replace(".", "").replace(".md", "");
    let temp = file.replace("./tutorial/", "").replace(".md", "").split("/");
    let tutorial = temp[0];
    let chapter = temp[1];
    let text = temp[2];
    
    let l = tutorials.length;
    if(l == 0 || tutorials[l - 1].name != tutorial){
      tutorials.push({name: tutorial, sub: []});
      l++;
    }
    let l1 = tutorials[l-1].sub.length;
    if(l1 == 0 || tutorials[l-1].sub[l1-1].name != chapter){
      tutorials[l-1].sub.push({name: chapter, sub: []});
      l1++;
    }
    tutorials[l-1].sub[l1-1].sub.push({name: text, path: path});
  }
  return tutorials;
}

// ToT