import Axios from 'axios'
import Head from 'next/head'
const ReactMarkdown = require('react-markdown')

export class SinglePost extends React.Component {
    
    state = {
        isLoading: true,
        title: '',
        content: '',
        author: '',
        error:false
    }


    render() {

        const { id, error, isLoading, title, author, date, content, viewCount } = this.state
        if(1)
        return (
            <div className="post-w">
                <Head>
                    <title> 'Making MERN stack apps' </title>
                    <script id="dsq-count-scr" src="//ajajaj-blog.disqus.com/count.js" async></script>
                </Head> 
                <h1> Making MERN stack apps </h1>
                <div className="info-w">
                    Ajay Yadav . 28/07 . 58 Views
                </div>
                <div className="content">
                    <ReactMarkdown source={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in *culpa qui officiale ***deserunt mollit anim id est laborum.' } />
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
                        font-size: 3em;
                        background: #fff;
                        font-weight: 800;
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
            <Head>
                <title>Error :(</title>
            </Head> 
            <style jsx>
                {`
                .error-w{
                    font-family: Open Sans;
                    padding: 2em 0;
                    width: 70%;
                    margin-left:15vw;
                    background:#eee;
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
