import { redirect } from "@sveltejs/kit";
import {getUnits} from '$lib/utils/getUnits'

export function load({params}){
  for(let link of getUnits(params.tutorial)){
    if(link.split('/')[3] == params.chapter){
      throw redirect(307, link);
    }
  }
}