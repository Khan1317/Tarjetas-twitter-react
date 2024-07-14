import { useState } from "react";
export function TwitterFollowCard({formatUserName ,userName, children, isFollowing}){

    const [state, setState] = useState(isFollowing);
    const text = state ? 'Siguiendo' : 'Seguir';
    const buttonClassName = state 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () => {
        setState(!state);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}