import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import CreateProspecto from './views/CreateProspecto.js';
import ModalProspecto from './views/ModalProspecto';
import ProspectoList from './views/ProspectoList';

const Routes = () => {
 return (
    <BrowserRouter>
    <Switch>
        <Route path ="/" exact component= {App}/>
        <Route path ="/create" exact component= {CreateProspecto}/>
        <Route path ="/prospectolist" exact component= {ProspectoList}/>
        <Route path ="/prospecto/:_id" exact component = {ModalProspecto}/>
        {/* <Route path ="/login" exact component= {Login}/> */}
        {/* <Router Route path ="/listaProspectos" exact component= {Estaciones}/> */}
    </Switch>
 </BrowserRouter>
 );
};

export default Routes;