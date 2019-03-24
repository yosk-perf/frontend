import React from 'react';
import Details from "./details";
import Response from "./response";

class Results extends React.Component {
    render() {
        return (
            <div>
                <Details/>
                <Response/>
            </div>
        )
    }
}

export default Results;
