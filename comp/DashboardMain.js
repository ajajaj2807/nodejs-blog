import AAll from './AAll'
import ACreate from './ACreate'
import AProfile from './AProfile'
import AStats from './AStats'
import AHelp from './AHelp'

export class DashboardMain extends React.Component {
    render() {
        return (
            <div className="main-w">
                {
                    (this.props.active == 'all') ? <AAll /> : <></>}
                    {
                    (this.props.active == 'create') ? <ACreate /> : <></>}
                    {
                    (this.props.active == 'profile') ? <AProfile /> : <></>}
                    {
                    (this.props.active == 'stats') ? <AStats /> : <></>}
                    {
                    (this.props.active == 'help') ? <AHelp /> : <></>
                    }
                

                <style jsx>
                    {`
                    .main-w{
                        padding: 1em 2em;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default DashboardMain
