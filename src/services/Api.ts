import {Post} from '@screens/home/ListScreen/types';

export const fetchPosts = async (): Promise<Post[]> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};
