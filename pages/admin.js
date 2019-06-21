import Head from 'next/head'
import DashboardSidebar from '../comp/DashboardSidebar'
import DashboardMain from '../comp/DashboardMain'

 export class Admin extends React.Component{

    state = {
        active: 'all'
    }

    handleMenuChange = (e) => {
        this.setState({active: e})
    }

    render() {
        return (
            <div className="main-w">
                <Head>
                    <link rel="stylesheet" href="../static/main.css" />
                    <title>Dashboard || ydv blog</title>
                </Head>

                <DashboardSidebar handleMenuChange={this.handleMenuChange.bind(this)} />
                <DashboardMain active = {this.state.active} />

                <style jsx>
                    {`
                    .main-w{
                        display:grid;
                        grid-template-columns: 1fr 4fr;
                    }
                    `}
                </style>
            </div>
        )
    }
    
}

export default Admin