Table = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            results: Results.find({}, {sort: {service: 1}}).fetch()
        }
    },

    renderResults() {
        return this.data.results.map((result) => {
            return <Result key={result._id} result={result}/>;
        });
    },

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <table className="table table-hover ">
                            <thead>
                            <tr>
                                <th>Service</th>
                                <th>Path</th>
                                <th>Last checked</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderResults()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div id="modalReact"></div>
                </div>
            </div>
        )
    }
})