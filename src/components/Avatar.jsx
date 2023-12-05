import style from './Avatar.module.css'

export function Avatar(props){
    if(props.border == false){

        return(
            <img className={style.avatar} src={props.perfil}/>
        )
    
    } else {
        
        return(
            <img className={style.avatarWithBorder} src={props.perfil}/>
        )

    }


    
}