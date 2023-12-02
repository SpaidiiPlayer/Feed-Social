//import { useState } from 'react'
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'
import './global.css'


export function App() {
  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar 
            name = "Matheus Vinagre"
            occupation = "Web Developer"
            perfil = "https://github.com/SpaidiiPlayer.png"
          />
          <main>
            <Post 
              perfil="https://github.com/lukeeplr.png"
              author="Gabigol" 
              content={`tirei foto de todos os trabalhos de complicadores pra caso ele perdesse eu ter como provar q fiz\ne realmente conseguir provar\ncomo é bom estar preparado😃`}
            />
            <Post 
              perfil="https://github.com/Luciano-Citroni.png"
              author="LulaNaro" 
              content={`Queria agradecer a todos que mandaram mensagens.\nFiquei muito feliz no meu aniversário.\nValeu de coração ❤️`} 
            />
          </main>
        </div>
          
        
      </div>
    )
      
}
