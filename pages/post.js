import Header from '../comp/Header'
import Head from 'next/head'
import SinglePost from '../comp/singlePost'
import PostRef from '../comp/PostRef'

const Post = (props) => {
    return (
        <div className="main-w">
            <Head>
                <link rel="stylesheet" href="../static/main.css" />
            </Head>
            <Header />
            <SinglePost url={props.url} />
            <PostRef url={props.url} />
            
            <style jsx>
                {`
                .main-w{

                }
                `}
            </style>
        </div>
    )
}

export default Post