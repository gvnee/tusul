export async function load({params}){
  let path = "";
  for(const name in params){
    path = path.concat('/', params[name]);
  }
  const post = await import (`/src/content/tutorial${path}.md`);
  const content = post.default;
  return { content };
}