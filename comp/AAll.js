import APosts from './APosts'

export class AAll extends React.Component {
    render() {
        return (
            <div className="main-w">
                <h1> All Posts</h1>
                <APosts />
                <style jsx>
                    {`
                    .main-w{
                        font-family: Open Sans;
                    }
                    h1{
                        font-weight: 800;
                        color:#446;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default AAll
