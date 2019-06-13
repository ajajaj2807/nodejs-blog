
export class UserDetails extends React.Component {
    render() {
        return (
            <div className="user-w">
                <p>ABOUT THE AUTHOR</p>
                <h2>Ajay Yadav</h2>

                <span className="des">
                    I am Ajay. I am a UG student at Indian Institute
                    of Technology, Kharagpur. I like web development.
                    I am new into blogging.
                </span>
                <a href="#">View Page</a>

                <style jsx>
                    {`
                    .user-w{
                        position:relative;
                        left:50px;
                        right: 50px;
                        font-family:Open Sans;
                        margin-top: 4em;
                        padding: 1em 4em 2em 2em;
                        border: 5px solid #f9f9fc;
                        border-radius: 10px;
                        height: max-content;
                        width: 420px;
                        cursor: default;
                    }

                    p{
                        font-size:0.9em;
                        font-weight: 700;
                        color:#898989;
                    }
                    .des{
                        display: block;
                        margin-top:-10px;
                        font-weight: 600;
                        color:#464646;
                    }
                    h2{
                        color: #345;
                        font-size: 2.2em;
                    }

                    a{
                        text-decoration: none;
                        color:#1399dc;
                        display: block;
                        font-weight: 700;
                        margin-top: 20px;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default UserDetails
