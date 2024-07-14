import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx';
export function App(){
    const format = (userName) => `@${userName}`;
    const users = [
        {
            id: 1,
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            id: 2,
            userName: 'pheralb',
            name: 'Pablo H.',
            isFollowing: false
        },
        {
            id: 3,
            userName: 'PacoHdezs',
            name: 'Paco Hernandez',
            isFollowing: true
        },
    ];

    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing, id}) => {
                    return(
                        <TwitterFollowCard
                            key={id}
                            formatUserName={format}
                            userName={userName}
                            isFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}