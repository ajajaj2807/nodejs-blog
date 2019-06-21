
export class Newsletter extends React.Component {
    state = {
        subscribed: false
    }

    setSubscribed = () => {
        this.setState({subscribed: true})
    }

    render() {
        if(!this.state.subscribed)
        return (
            <div className="m-wrap">
                <span className="title">
                    let's <b> get in touch</b>
                </span>
                <span className="info">
                    every post delivered to your mailbox
                </span>
                <input type="email" placeholder="Your Email"></input>
                <br/>
                <button onClick={this.setSubscribed}>subscribe</button>
                <br/>
                <span className="terms-w">
                    We won't spam you.
                    <br/>
                    You can unsubscribe anytime.
                </span>
                <style jsx>
                    {`
                    .terms-w{
                        display: block;
                        margin-top:20px;
                        font-size:0.8em;
                        color:#BBDEFB;
                        line-height: 20px;
                    }
                    .title b{
                        font-weight: 800;
                    }
                    button{
                        cursor:pointer;
                        border:0;
                        background:#222;
                        padding:0.6em 1em;
                        text-transform: uppercase;
                        color:#fff;
                        font-size: 1.1em;
                        margin-top: 12px;
                        font-weight: 600;
                        letter-spacing:2px;
                        font-family:Open Sans;
                    }
                    input{
                        font-family: Open Sans;
                        font-weight: 600;
                        margin-top: 50px;
                        border: 0;
                        background: #fff;
                        color:#2196f3;
                        width: 75%;
                        padding: 0.5em 1em;
                        font-size: 1.2em;
                    }
                    input::placeholder{
                        color:#2196f3;
                        text-transform:uppercase;
                        letter-spacing:2px;
                    }
                    .info{
                        display: block;
                        text-transform: uppercase;
                        font-weight: 700;
                        color: #333;
                        color:#fff;
                        margin-top:12px;
                        opacity:0.7;
                    }
                    .title{
                        text-transform:uppercase;
                        font-size: 2em;
                        color:#fff;
                        display:block;
                        margin-top: 40px;
                    }
                    .m-wrap{
                        margin-top: 80px;
                        text-align:center;
                        grid-column: 1/ 2 span;
                        background: #2196F3;
                        width: 50%;
                        position: relative;
                        left:50%;
                        transform: translateX(-50%);
                        padding: 1em 0;
                        border-radius:5px;
                    }
                    `}
                </style>
            </div>
        )
        else return(
            <div className='main-w'>

                <span className="title">
                <b>🎉</b>
                </span>
                <span className="info">
                    You have been successfully subscribed.
                </span>

                <style jsx>
                    {`
                    .title b{
                        font-weight: 800;
                    }
                    .info{
                        display: block;
                        text-transform: uppercase;
                        font-weight: 700;
                        color: #333;
                        color:#fff;
                        margin-top:12px;
                        opacity:0.7;
                    }
                    .title{
                        text-transform:uppercase;
                        font-size: 2em;
                        color:#fff;
                        display:block;
                    }
                    .main-w{
                        margin-top: 80px;
                        text-align:center;
                        grid-column: 1/ 2 span;
                        background: #2196F3;
                        width: 50%;
                        position: relative;
                        left:50%;
                        transform: translateX(-50%);
                        padding: 1em 0;
                        border-radius:5px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Newsletter
