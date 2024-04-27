import { getTutorials } from '$lib/utils/getTutorials'

export function load() {
  return getTutorials();
	// return {
  //   menu: getTutorials().map((item) => ({
  //     link: item.link,
  //     title: item.title
  //   }))
  // }
}