//import { useState } from 'react'
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';


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

  const [Publications, setPublications] = useState([
  ])
  

  const [newPubText, setPubText] = useState('');

  function handleNewPubChange(){
    setPubText(event.target.value);
  }

  function handleCreatePub(){
    event.preventDefault()

    setPublications([newPubText, ...Publications])

    setPubText('')
}

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
            <div className={styles.NewPost}>
              <strong>Faça uma nova publicação</strong>
              <textarea name="newpost" value={newPubText} placeholder="Em que está pensando?" onChange={handleNewPubChange}></textarea>
              <button type="submit" className={styles.pubButton} onClick={handleCreatePub} disabled={newPubText.length === 0}>Publicar</button>
            </div>
              { Publications.map(publication => {
                return(
                  <Post 
                    author={user}
                    user = {user}
                    content={publication}
                    key={publication}
                    publishedAt = {new Date()}
                  />
                )
              })}
          </main>
        </div>
          
        
      </>
    )
      
}
