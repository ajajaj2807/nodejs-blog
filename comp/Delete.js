import Axios from "axios";

class Delete extends React.Component {

    state = {
        posts: []
    }
    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        
        console.log(data)

        this.setState({
            posts: data
        })
    }

    deletePost = (e) => {
        Axios.get(`/api/delete/${e}`).then(() => {
            console.log(`Post no. ${e} deleted`)
        })
    }

    render() {
        return (
            <div className="post-w">
                {
                    this.state.posts.map(post => {
                        return <button onClick={this.deletePost(post._id)}>{post.title}</button>
                    })
                }
            </div>
        )
    }
}

export default Delete