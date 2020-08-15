import React from 'react';
import axios from 'axios'

class CoolThings extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
            console.log(res.data.slice(0, 10))
            this.setState({
                posts: res.data.slice(0, 10)
            })
        })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ?
            (
                posts.map(
                    post => {
                        return (
                            <div className="post card" key={post.id}>
                                <div className="card-content">
                                    <span className="card-title">
                                        {post.title}
                                    </span>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    }
                )


            ) : (
                <div className="center">No posts yet</div>
            )

        return (
            <div className="cool-things" >
                <div className="container">
                    <h4 className="center">Posts</h4>
                    {postList}
                </div>

            </div>

        )

    }
}

export default CoolThings