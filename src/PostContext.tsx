import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Post{
  id: number,
  author: string,
  title: string,
  post: string,
}
  
interface PostInput{
  author: string,
  title: string,
  post: string,
}

interface TransactionsProviderProps{
  children: ReactNode;
}

interface PostContextData{
  posts: Post[];
  createPost: (post: PostInput) => Promise<void>;
}

export const PostsContext = createContext<PostContextData>(
  {} as PostContextData
);

export function PostsProvider({children}: TransactionsProviderProps){

      const [posts, setPosts] = useState<Post[]>([]);
    
      useEffect(()=>{
          api.get('/posts')
              .then(response => setPosts(response.data.posts));
      }, []);
/*Criar Novo Post*/
      async function createPost(postInput: PostInput){ 
      
        const response = await api.post('/posts', postInput);
        let {post} = response.data;
      
        setPosts([
          ...posts,
          post,
        ])
      
      }
/**/
      return(
        <PostsContext.Provider value={{posts, createPost}}>
          {children}
        </PostsContext.Provider> 
      );
}