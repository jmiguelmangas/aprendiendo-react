import { useState } from 'react'

import './TwitterFollowCard.css'
export function TwitterFollowCardComponent ({username ="unknown",children,initialIsFollowing}){
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    const imageSrc = `https://unavatar.io/${username}`
    const textButton = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? 
    'tw-follow-card-fwButton isFollowing'
    : 'tw-follow-card-fwButton'
    console.log(isFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' 
                src={imageSrc}
                alt={username}/>
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-username'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textButton}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
