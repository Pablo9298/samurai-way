import profileReducer, {addPostActionCreator, deletePost, PostType, ProfileInfoType} from './profileReducer';

let state = {
    posts: [
        {id: 1, likesCounts: 10, message: 'Hey how its going ?'},
        {id: 2, likesCounts: 21, message: 'What are u doing today ?'},
        {id: 3, likesCounts: 13, message: 'It\'s my first post'},
    ] as Array<PostType>,
    profile: null as null | ProfileInfoType,
    status: ''
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4)
})

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[0].message).toBe('it-kamasutra.com')
})

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2)
})

