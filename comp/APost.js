import Axios from "axios";
import Link from 'next/link'

export class APost extends React.Component {

    state = {
        title:'',
        author: '',
        date: '',
        viewCount:''
    }
    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        
        const currentPost = data.filter(post => post._id == this.props.id)
        console.log(currentPost)

        this.setState({
            title: currentPost[0].title,
            author: currentPost[0].author,
            date: currentPost[0].date,
            viewCount: currentPost[0].viewCount
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
                    {this.state.date} . {this.state.author} . {this.state.viewCount + ' Views'}
                </div>


                {/* add these functionalities */}
                <div className="options-w">
                    <a className="options" href="">Edit</a>
                    <a className="options" href="">Delete</a>
                </div>

                <style jsx>
                    {`
                    .options-w{
                        float:right;
                        position:relative;
                        bottom:20px;
                    }
                    .options{
                        display: inline-block;
                        font-size: 0.9em;
                        color: #46a;
                        margin-right: 20px;
                        text-decoration: underline;
                    }
                    .options:hover{
                        color:#244;
                    }
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
                        background:#fbfbfb;
                        border: 3px solid #fafafb;
                        margin-top:10px;
                        border-radius:0px;
                    }
                    a{
                        font-family: Open Sans;
                        text-decoration: none;
                        font-size: 1.2em;
                        font-weight:600;
                        color:#333;
                    }
                    .post-w:hover{
                        background:#f5f5f6;
                        border: 3px solid #eee;   
                    }
                    `} 
                </style>
            </div>
        )
    }
}

export default APost
