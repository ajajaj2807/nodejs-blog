import Posts from './Posts'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Recent Posts </h2>
                <Posts />

                <style jsx>
                    {`
                    h2{
                        font-family: Open Sans;
                        color:#9be;
                        margin-top: 60px;
                    }
                    .sidebar{
                        background:#fff;
                        margin-left: 50px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Sidebar
