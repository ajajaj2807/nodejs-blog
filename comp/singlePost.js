
import Axios from 'axios'

const ReactMarkdown = require('react-markdown')

export class SinglePost extends React.Component {
    
    state = {
        isLoading: true,
        title: '',
        content: '',
        author: '',
        error:false
    }


    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        const currentPost = data.filter(post => post._id == this.props.url.query.id)

        if(!currentPost[0]){
            this.setState({error: true, isLoading: false})
        }else if(currentPost[0]){
        this.setState({
            isLoading: false,
            title: currentPost[0].title,
            author: currentPost[0].author,
            date: currentPost[0].date,
            content: currentPost[0].content
        })
    }
}


    render() {

        const { error, isLoading, title, author, date, content } = this.state

        if(isLoading) return <div className="loading-w"> 
        <style jsx>
            {`
            .loading-w{
                position:relative;
                top:50%;
                left: 50%;
                transform: translateX(-50%);
                border: 4px solid #f6f6f6;
                border-top: 4px solid #686868;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 2s linear infinite;
            }
              
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
        </style>
        </div>
        else if(!isLoading && !error)
        return (
            <div className="post-w">
                <h1> { title }</h1>
                <div className="info-w">
                    {author} . { date }
                </div>
                <div className="content">
                    <ReactMarkdown source={ content } />
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
                        margin-top: 40px;
                        padding-top: 30px;
                        border-top:4px solid #f6f6f6;
                    }

                    `}
                </style>
            </div>
        )
        else if(error) return(
            <div className="error-w"> An Unexpected Error occured
            
            <style jsx>
                {`
                .error-w{
                    font-family: Open Sans;
                    height:200px;
                    width:70%;
                    position:relative;
                    left:50%;
                    top:50%;
                    transform:translateX(-50%);
                    text-align:center;
                    font-size:2em;
                    font-weight: 700;
                    color:#565656;
                }
                `}
            </style>

            </div>
        )
    }
}

export default SinglePost
