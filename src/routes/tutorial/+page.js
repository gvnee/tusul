import { getTutorials } from '$lib/tutorial.js'

export function load() {
  return {menu: getTutorials()}
	// return {
  //   menu: getTutorials().map((item) => ({
  //     link: item.link,
  //     title: item.title
  //   }))
  // }
}