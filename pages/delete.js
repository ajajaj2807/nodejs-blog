import Header from '../comp/Header'
import Head from 'next/head'
import Delete from '../comp/Delete'
const DeletePost = () => {


    return (
        <div className="main-w">
            <Head>
                <link rel="stylesheet" href="../static/main.css" />
            </Head>
            <Header />
            <Delete />

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

export default DeletePost