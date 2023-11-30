//import { useState } from 'react'
import {Post} from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'
import './global.css'


export function App() {
  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              imagem="https://www.lance.com.br/galerias/wp-content/uploads/2021/03/gabigol-cassino-memes-1.jpg"
              author="Gabigol" 
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa facere consequatur perferendis ratione praesentium, quasi labore repellendus libero accusantium ducimus quo reiciendis error sit ut dolore quos quibusdam vel officia!" 
            />
            <Post 
              imagem="https://conteudo.imguol.com.br/c/tab/56/2019/11/08/ilustracoes-publicadas-no-twitter-com-traco-de-anime-com-as-figuras-de-lula-e-jair-bolsonaro-1573251277503_v2_4x3.jpg"
              author="LulaNaro" 
              content="Presidentes Brasileiros versão mangá" 
            />
          </main>

        </div>
          
        
      </div>
    )
      
}
