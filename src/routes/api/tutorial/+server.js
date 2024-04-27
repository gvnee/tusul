import {getTutorials} from '$lib/utils/getTutorials.js';

export const GET = async () => {
  const allTutorials = await getTutorials();
  return new Response(allTutorials);
}