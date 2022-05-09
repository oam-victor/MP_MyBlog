import React from 'react';
import './App.css';
import { GlobalStyle } from './styles/global';
import {Header} from "./components/headerFolder/index"
import { Blogbody } from './components/bodyFolder';

export function App(){
  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Blogbody/>
    </div>
  );
}