import React from "react";
import { render } from "react-dom";
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import { Main } from "./components/Main";
import { Weather } from "./components/Weather";
import { About } from "./components/About";
import { Example } from "./components/Example";

class RouterIndex extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Main }>
                    <Route path="about" component={ About } />
                    <Route path="examples" component={ Example } />
                    <IndexRoute component={ Weather } />
                </Route>
            </Router>
        );
    }
}
render(<RouterIndex/>, window.document.getElementById("app"));