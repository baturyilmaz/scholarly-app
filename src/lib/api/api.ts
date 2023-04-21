import { ArticleResponse } from '../../types/ArticleResponse';
import { SearchResponse } from '../../types/SearchResponse';
import { API_BASE_URL, ARTICLE_URL } from '../../utils/config';

async function fetchAPI<T extends SearchResponse | ArticleResponse>(
  url: string
) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const topStories: T = await response.json();

  return topStories;
}

async function getNextPage(url: string) {
  return await fetchAPI<SearchResponse>(url);
}

async function getResultList(searchParam?: string) {
  const urlArr = API_BASE_URL.split('query=');
  const url = `${urlArr[0]}query=${searchParam}${urlArr[1]}`;
  return await fetchAPI<SearchResponse>(url);
}

async function getArticle(id?: string) {
  const urlArr = ARTICLE_URL.split('EXT_ID:');
  const url = `${urlArr[0]}EXT_ID:${id}${urlArr[1]}`;
  return await fetchAPI<ArticleResponse>(url);
}

export { getResultList, getNextPage, getArticle };
