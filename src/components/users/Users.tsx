import {UsersPropsType} from './UsersContainer';

export const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://chess-center.ru/wp-content/uploads/2022/09/2_4yls8wlami9frintdrgsya.jpeg',
                followed: false,
                fullName: 'Pablo',
                status: 'I am a Boss',
                location: {city: 'Tallinn', country: 'Estonia'}
            },
            {
                id: 2,
                photoUrl: 'https://chess-center.ru/wp-content/uploads/2022/09/2_4yls8wlami9frintdrgsya.jpeg',
                followed: true,
                fullName: 'Toivo',
                status: 'I am a Boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://chess-center.ru/wp-content/uploads/2022/09/2_4yls8wlami9frintdrgsya.jpeg',
                followed: false,
                fullName: 'Marcus',
                status: 'I am a Boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div><img style={{width: '50px', height: '50px'}} src={u.photoUrl} alt="dawdwad"/></div>
                        <div>{u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}</div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};