import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Post} from '@screens/home/ListScreen/types';

interface PostsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostsStore = create<PostsState>()(
  persist(
    set => ({
      posts: [],
      setPosts: (posts: Post[]) => set({posts}),
    }),
    {
      name: 'posts-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
