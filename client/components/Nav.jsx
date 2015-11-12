//static element, representing the Navigation bar
Nav = React.createClass({
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Monitoring Dashboard</a>
                        <button className="navbar-toggle" type="button" data-toggle="collapse"
                                data-target="#navbar-main">
                            <span className="icon-bar"> </span> <span className="icon-bar"> </span> <span
                            className="icon-bar"> </span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" target="_blank">Admin</a></li>
                            <li><a href="#" target="_blank">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
