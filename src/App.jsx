//import { useState } from 'react'
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'
import './global.css'

const user = {
  nome : 'Matheus Vinagre',
  avatarUrl: 'https://github.com/SpaidiiPlayer.png',
  role: 'Web Developer',
}

const posts = [
  {
    id : 1,
    author: {
      avatarUrl : 'https://github.com/lukeeplr.png',
      nome : 'Lucas',
      role : 'Analista de Dados',
    },

    content: [
      {type: 'paragraph', content: 'tirei foto de todos os trabalhos de complicadores pra caso ele perdesse eu ter como provar q fiz'},
      {type: 'paragraph', content: 'e realmente conseguir provar\ncomo é bom estar preparado😃'},
      {type: 'link', content: '#compiladores'},
    ],
    publishedAt: new Date('2023-12-10 22:32:02'),
  },

  {
    id : 2,
    author: {
      avatarUrl : 'https://github.com/Luciano-Citroni.png',
      nome : 'Luciano',
      role : 'Professor de Inglês',
    },

    content: [
      {type: 'paragraph', content: 'Comecei a estudar espanhol!'},
      {type: 'paragraph', content: 'E realmente estou aprendendo, uhuuu!'},
      {type: 'link', content: '#LearningSpanish'},
    ],

    publishedAt : new Date('2023-12-8 22:40:02'),

  },

];

export function App() {
  return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar 
            name = {user.nome}
            occupation = {user.role}
            perfil = {user.avatarUrl}
          />
          <main>
            {posts.map(post => {
              return ( 
                <Post 
                  key={post.id}
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}
                  user = {user}
                />
              )
            })}
          </main>
        </div>
          
        
      </>
    )
      
}
