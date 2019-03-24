import React from 'react';
import Details from "./details";
import Response from "./response";
import Logs from "./logs";

class Results extends React.Component {
    render() {
        return (
            <div>
                <Details/>
                <Response/>
                <Logs/>
            </div>
        )
    }
}

export default Results;
