import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [tasks, setTasks] = useState([]);

    const {id} = useParams()

    useEffect(() => {
      loadTasks();
        
    },[]);

    const loadTasks = async () =>{
        const result = await axios.get("http://localhost:8080/tasks")
        setTasks(result.data);
    }
    const deleteTask = async (id) =>{
        await axios.delete(`http://localhost:8080/task/${id}`)
        loadTasks()
    }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Deadline</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>

            {
                tasks.map((task, index)=>(
                  <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{task.taskname}</td>
                    <td>{task.deadline}</td>
                    <td>{task.status}</td>
                    <td>
                        <Link className='btn btn-primary mx-2'
                        to={`/viewtask/${task.id}`}
                        >
                        View
                        </Link>
                        <Link className='btn btn-outline-primary mx-2'
                        to={`/edittask/${task.id}`}
                        >
                        Edit
                        </Link>
                        <button className='btn btn-danger mx-2'

                        onClick={() => deleteTask(task.id)}

                        >
                        Delete
                        </button>
                    </td>
                    
                  </tr>
                ))
            }
         
    </tbody>
    </table>
        </div>
    </div>
  )
}
