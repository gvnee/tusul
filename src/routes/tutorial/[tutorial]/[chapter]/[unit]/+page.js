import {getUnits} from '$lib/utils/getUnits'

export async function load({params}){
  let path = "";
  for(const name in params){
    path = path.concat('/', params[name]);
  }
  const post = await import (`/src/content/tutorial${path}.md`);
  return {
    Content: post.default,
    metadata: post.metadata,
    unitsList: getUnits(params.tutorial)
  };
}