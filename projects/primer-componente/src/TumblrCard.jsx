import { useState } from 'react'


export function TumblrCard ( children, userName, initialIsFollowing ) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TumblrCard] render with userName: ', userName)

  const text = isFollowing 
    ? 'Siguiendo' 
    : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const addAt = () => {return `@${userName}`}

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName} o {addAt(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

/*
export function TumblrCard2({attedUserName, mutual, userName,name, attedUserName}) {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar'
            alt="logo"
            src = {`https://unavatar.io/${userName}`} />  
            <div className='tw-followCard-info'>
            <strong>{name} </strong>
            <span className="tw-followCard-infoUserName">{attedUserName}</span>
            {attedUserName}
            </div>
            </header>
        
            <aside>
            <button className="tw-followCard-button">Click me</button>
            </aside>
        </article>
        )
    }*/