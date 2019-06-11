import axios from 'axios'
import Link from 'next/link'

export class FeaturedPost extends React.Component {

    state = {
        id: '',
        title: '',
        author: ''
    }

    async componentDidMount() {
        const { data } = await axios.get('/api/all')
        const feat = data[0]

        this.setState({
            id: feat._id,
            title: feat.title,
            author: feat.author
        })
    }

    render() {
        return (
            <div className="f-post">
                <div className="img"></div>
                <div className="overlay">
                <Link as="/post" href={`/post?id=${this.state.id}`}>
                    <a className="title">
                       { this.state.title}
                    </a>
                </Link>
                    <a href="#"> {this.state.author} </a>
                </div>

                <style jsx>
                    {`
                    .f-post{
                        box-sizing: border-box;
                        height:500px;
                        width:100%;
                        background:transparent;
                        position:relative;
                        border-bottom:4px solid #f6f6f6;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        background:#4399ec;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .overlay{
                        box-sizing:border-box;
                        height:auto;
                        width:100%;
                        position:absolute;
                        background:#fff;
                        bottom:0;
                        padding:1em;
                        left: 0;
                    }
                    .title{
                        display:block;
                        font-size: 1.8em;
                        color:#233;
                        font-family:Open Sans;
                        font-weight: 800;
                    }
                    a{
                        font-family: Open Sans;
                        font-weight: 600;
                        text-decoration: none;
                        color:#abd;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default FeaturedPost
