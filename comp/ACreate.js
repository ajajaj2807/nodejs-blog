import CreatePost from './CreatePost'

export class ACreate extends React.Component {
    render() {
        return (
            <div>
                <h1> Create Post</h1>
                <CreatePost />
                <style jsx>
                    {`
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

export default ACreate
