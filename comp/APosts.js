import APost from './APost'
import axios from 'axios'

class APosts extends React.Component {

    ids = []

    state = {
        posts: [],
        isLoading: true,
    }

    async componentDidMount() {
        
        const { data } = await axios.get('/api/all')
        this.setState({posts: data, isLoading: false})

        console.log(this.state.posts)

    }

    render() {
        const { posts, isLoading } = this.state

        if(isLoading) return <div></div>
        else
        return (
            <div className="posts-w">

                {
                    posts.map( post => {
                        return <APost id={post._id} /> 
                    })
                }

                <style jsx>
                    {`
                    .posts-w{
                        margin-top: 50px;
                        position:relative;
                        left:50%;
                        transform:translateX(-50%);
                    }
                    `}
                </style>

            </div>
        )
    }
}

export default APosts