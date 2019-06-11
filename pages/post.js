import Header from '../comp/Header'
import Head from 'next/head'
import SinglePost from '../comp/singlePost'

const Post = (props) => {
    return (
        <div className="main-w">
            <Head>
                <link rel="stylesheet" href="../static/main.css" />
            </Head>
            <Header />
            <SinglePost url={props.url} />
            <style jsx>
                {`
                .main-w{
                    display:grid;
                    grid-template-columns: 1fr;
                }
                `}
            </style>
        </div>
    )
}

export default Post