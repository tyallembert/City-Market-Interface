import React from 'react';

import {article, brand, cta, feature, navbar} from './components'
import {Top, Footer} from './containers'
import './app.css'

const App = () =>{
    return(
        <div className = "App">
            <Top />
            <Footer />
        </div>
    )
}

export default App