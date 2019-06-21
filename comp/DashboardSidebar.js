
export class DashboardSidebar extends React.Component {
    
    state = {
        active: 'all'
    }

    handleChange = (e) => {
        this.setState({active: e.target.name})
        this.props.handleMenuChange(e.target.name)
    }

    render() {
        return (
            <div className="sidebar-w">
                <div className="sidebar">
                <h1> Welcome, admin </h1>

                <div className="menu">
                    {
                        this.state.active == 'all' ? <a name="all" onClick={this.handleChange} className="active" href="#">All Posts</a> : <a name="all" onClick={this.handleChange} href="#">All Posts</a>
                    }
                    {
                        this.state.active == 'create' ? <a name="create" className="active" onClick={this.handleChange} href="#">Create</a> : <a name="create" onClick={this.handleChange} href="#">Create</a>
                    }
                    {
                        this.state.active == 'stats' ? <a name="stats" className="active" onClick={this.handleChange} href="#">My Stats</a> : <a name="stats" onClick={this.handleChange} href="#">My Stats</a>
                    }
                    {
                        this.state.active == 'profile' ? <a name="profile" className="active" onClick={this.handleChange} href="#">My Profile</a> : <a name="profile" onClick={this.handleChange} href="#">My Profile</a>
                    }
                    {
                        this.state.active == 'help' ? <a name="help" className="active" onClick={this.handleChange} href="#">Help</a> : <a name="help" onClick={this.handleChange} href="#">Help</a>
                    }
                </div>
                </div>

                <style jsx>
                    {`
                    .active{
                        background: #f9f9fb;
                    }
                    .sidebar-w{
                        font-family: Open Sans;
                        padding: 4em 0;
                        position: relative;
                        height: 100vh;
                    }

                    .sidebar{
                        position: fixed;
                        top: 0;
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        background: #fff;
                        border-right: 1px solid #eee;
                    }
                    h1{
                        font-weight: 800;
                        font-size: 1.3em;
                        padding: 50px 50px 0 50px;
                    }

                    .menu{
                        padding: 2em 2em;
                        margin-top: 50px;
                    }

                    a{
                        display: block;
                        width: 100%;
                        padding: 0.8em 50px;
                        text-transform: uppercase;
                        text-decoration: none;
                        color: #444;
                        margin-top: 5px;
                        border-radius: 30px;
                        background: #fff;
                        border: 1px solid #fff;
                    }

                    a:hover{
                        background:#fafbfe;
                        border:1px solid #fafbfe;
                    }

                    `}
                </style>
            </div>
        )
    }
}

export default DashboardSidebar
