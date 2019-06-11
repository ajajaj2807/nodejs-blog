import Axios from 'axios'

export class SinglePost extends React.Component {
    
    state = {
        title: '',
        content: '',
        author: ''
    }


    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        const currentPost = data.filter(post => post._id == this.props.url.query.id)

        this.setState({
            title: currentPost[0].title,
            author: currentPost[0].author,
            date: currentPost[0].date,
            content: currentPost[0].content
        })
    }


    render() {

        const {title, author, date, content } = this.state

        return (
            <div className="post-w">
                <h1> { title }</h1>
                <div className="info-w">
                    {author} . { date }
                </div>
                <div className="content">
                    { content }
                </div>

                <style jsx>
                    {`
                    .post-w{
                        position:relative;
                        padding: 2em 0;
                        margin-left: 15vw;
                        width: 70%;
                        font-family: Open Sans;
                        background:#fff;
                    }
                    h1{
                        color:#363636;
                        background: #fff;
                    }
                    .info-w{
                        font-size: 0.9em;
                        display: block;
                        padding: 0 0 1em 0;
                        color:#96969f;
                        font-weight: 700;
                    }

                    .content{
                        margin-top: 100px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default SinglePost
