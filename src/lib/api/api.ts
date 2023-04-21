import { SearchResponse } from '../../types/SearchResponse';
import { API_BASE_URL } from '../../utils/config';

async function fetchSearch(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const topStories: SearchResponse = await response.json();

  return topStories;
}

async function getNextPage(url: string) {
  return await fetchSearch(url);
}

async function getResultList(searchParam?: string) {
  const urlArr = API_BASE_URL.split('query=');
  const url = `${urlArr[0]}query=${searchParam}${urlArr[1]}`;
  return await fetchSearch(url);
}

export { getResultList, getNextPage };
