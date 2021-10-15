import React from 'react'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom';


const Nav = props => {
    return (
    <nav className="bg-gray-800 py-1 relative">
      <div className="container mx auto flex">

              <Link className="btn" to="/">Home</Link>
              <Link className="btn" to="/create">Create</Link>
              <Link className="btn" to="/prospectolist">Lista de prospectos</Link>
       </div> 
    </nav>    
    )
}


export default withRouter(Nav)
