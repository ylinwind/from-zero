import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import reducer from './redux/reducers';
import Hello from './coms/Hello';

import Main from './redux';
import Mine from './redux/containers/personal/Personal';
import Artcles from './redux/containers/artcles/Artcles';

import './style/index';

const store = createStore(reducer);
render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Main} ></Route >
                <Route exact path="/mine" component={Mine} ></Route >
                <Route exact path="/artcle" component={Artcles} ></Route >
                {/* <Main /> */}
            </div>
        </Router>
    </Provider>,
  document.getElementById('container'));