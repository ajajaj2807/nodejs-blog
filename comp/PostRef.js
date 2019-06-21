import Newsletter from './Newsletter'
import Reactionsbar from './Reactionsbar'

export class PostRef extends React.Component {
    render() {
        return (
            <div className="m-wrap">

                <Reactionsbar posturl={this.props.url} />
                 <span className="title">
                    Have something to say about this post? <a href="#"> Get in touch!</a>
                    <br/>
                    Want to read more? <a href="#">Visit the archive</a>
                </span>

                <Newsletter />

                <span className="thankyou">
                    Thank you for being here 😄
                </span>

                <style jsx>
                    {`
                    .thankyou{
                        font-weight: 800;
                        display:block;
                        text-align:center;
                        padding: 4em 0 3em 0;
                        color:#444;
                        font-size: 1.9em;
                    }
                    .title{
                        color:#999;
                        font-weight: 600;
                        font-size:1.3em;
                        line-height: 40px;
                    }
                    .title a{
                        color:#444;
                        text-decoration: none;
                    }
                    .m-wrap{
                        text-align:center;
                        grid-column: 1/ 2 span;
                        background: #fff;
                        height: 200px;
                        width: 70%;
                        position: relative;
                        left:50%;
                        transform: translateX(-50%);
                        padding: 3em 0;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default PostRef
