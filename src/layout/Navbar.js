import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to ="/">
                Task Manager Application
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span classNameName="navbar-toggler-icon"></span>
            </button>

            <Link className="btn btn-outline-light" to="/addtask">Add Task</Link>
        </div>
      </nav>
    </div>
  )
}
