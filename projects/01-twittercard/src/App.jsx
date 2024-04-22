import './App.css'
import { TwitterFollowCardComponent } from './TwitterFollowCard'

const users =[
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        userName:'pheralb',
        name: 'Pablo Heraldo',
        isFollowing: true,
    },
    {
        userName:'pacohdezs',
        name: 'Paco Hernandez',
        isFollowing: false,
    },
    {
        userName:'Tmchein',
        name: 'Tomas',
        isFollowing: false,
    },
]
export function App(){
    return(
    <section className='App'>
    {
        users.map(user => {
            const {userName,name,isFollowing} = user
            
            return (
                <TwitterFollowCardComponent
                key={userName}
                username={userName} 
                initialIsFollowing={isFollowing}>
                {name}
                </TwitterFollowCardComponent>
            )
        })
    }
    </section>
    )  
}