import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Fit from './components/Fit/Fit';

const App = () => (
    <Router>
        <Route path= "/fit" component={Fit}/>
        <Route path= "/" exact component={Join} />
        <Route path= "/chat" component={Chat} />
    </Router>
);

export default App;
