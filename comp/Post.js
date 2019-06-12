import Axios from "axios";
import Link from 'next/link'

export class Post extends React.Component {

    state = {
        title:'',
        author: '',
        date: ''
    }
    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        
        const currentPost = data.filter(post => post._id == this.props.id)
        console.log(currentPost)

        this.setState({
            title: currentPost[0].title,
            author: currentPost[0].author,
            date: currentPost[0].date
        })
    }

    render() {
        return (
            <div className="post-w">
                <Link as="/post" href={`/post?id=${this.props.id}`}> 
                <a>
                    {this.state.title}
                </a>
                </Link>
                <div className="info-w">
                    {this.state.date}
                </div>

                <style jsx>
                    {`
                    .info-w{
                        font-family: Open Sans;
                        font-size: 0.9em;
                        padding: 10px 0 0 0;
                        letter-spacing: 0.5px;
                        color:#666;
                        cursor:default;
                    }

                    .post-w{
                        padding:1em 2em;
                        box-sizing:border-box;
                        height:max-content;
                        width:100%;
                        background:#fafafa;
                        margin-top:10px;
                        border-radius:6px;
                    }
                    a{
                        font-family: Open Sans;
                        text-decoration: none;
                        font-size: 1.2em;
                        font-weight:600;
                        color:#333;
                    }
                    a:hover{
                        text-decoration:underline;
                    }
                    `} 
                </style>
            </div>
        )
    }
}

export default Post
