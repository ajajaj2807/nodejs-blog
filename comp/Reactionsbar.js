import Axios from 'axios'

export class Reactionsbar extends React.Component {

    state = {
        isLoading: true,
        title: '',
        content: '',
        author: '',
        error:false
    }


    async componentDidMount() {
        const { data } = await Axios.get('/api/all')
        const currentPost = data.filter(post => post._id == this.props.posturl.query.id)

        if(!currentPost[0]){
            this.setState({error: true, isLoading: false})
            console.log(this.props.posturl)
        }else if(currentPost[0]){
        this.setState({
            isLoading: false,
            likes: currentPost[0].likes,
            dislikes: currentPost[0].dislikes,
            id:currentPost[0]._id,
            title: currentPost[0].title,
            // author: currentPost[0].author,
            // date: currentPost[0].date,
            // content: currentPost[0].content,
            // viewCount: currentPost[0].viewCount
        })
    }
}

updateLikes = () => {
    console.log(this.state.id)
    Axios.post(`/api/reactions/${this.state.id}`, {likes: 1} ).then(
        (res) => {
            this.setState({likes: this.state.likes+1})
        }
    )
}

updateDislikes = () => {
    Axios.post(`/api/reactions/${this.state.id}`, {dislikes: 1} ).then(
        (res) => {
            this.setState({dislikes: this.state.dislikes+1})
        }
    )
}

    render() {
        if(this.state.isLoading)
        return(
            <>
            </>
        )
        else
        return (
            <div className="main-w">
                <span className="title">
                    Did you like this post?
                </span>

                <div className="reactions-w">
                    <button onClick={this.updateLikes}>😄</button>
                    <br/><span>{this.state.likes }</span>
                </div>
                <div className='reactions-w'>
                    <button onClick={this.updateDislikes}>😞</button>
                    <br/><span> {this.state.dislikes } </span>
                </div>
                <style jsx>
                    {`
                    .reactions-w{
                        display:inline-block;
                        text-align: center;
                    }
                    .reactions-w span{
                        text-align:center;
                        color: #778;
                        font-weight: 800;
                        font-size: 1.2em;
                    }
                    button{
                        cursor: pointer;
                        border:0;
                        background:#fff;
                        margin: 10px 0 0 0;
                        padding: 0.5em 1em;
                        font-size: 2em;
                        color:#fff;
                        font-weight: 700;
                        border-radius: 6px;
                        transition: all ease-in 0.3s;
                        transform: translateY(2px) scale(1);
                        transform-origin: center;
                    }
                    button:hover{
                        transform: translateY(-3px) scale(1.1);
                    }
                    button:focus,button:target,button:active{
                        outline: none;
                    }
                    .title{
                        display: block;
                        font-size: 1.6em;
                        font-weight: 800;
                        color:#445;
                    }
                    .main-w{
                        padding: 2em 0;
                        text-align:center;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 100%;
                        background:#fff;
                        border: 3px solid #4ca9e3;
                        border-radius: 10px;
                        margin-bottom: 70px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Reactionsbar
