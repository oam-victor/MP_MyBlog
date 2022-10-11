import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/global';
import {Header} from "./components/headerFolder/index"
import { Blogbody } from './components/bodyFolder';
import Modal from 'react-modal'
import './App.css';
import { NewPostModal } from './components/newPostModalFolder';
import { PostsProvider } from './PostContext';

Modal.setAppElement('#root');

export function App(){
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  function handleOpenNewPostModal(): void{
      setIsNewPostModalOpen(true);
  }

  function handleCloseNewPostModal(): void{
      setIsNewPostModalOpen(false);
  }

  return(
    <PostsProvider>
      <GlobalStyle/>
      <Header onOpenNewPostModal={handleOpenNewPostModal}/>
      <Blogbody/>

      <NewPostModal 
        isOpen={isNewPostModalOpen}
        onRequestClose={handleCloseNewPostModal}
      ></NewPostModal>
    </PostsProvider>
  );
}