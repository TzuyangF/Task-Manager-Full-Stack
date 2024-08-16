import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTask() {

  const [task, setTask] = useState({
    taskname: "",
    deadline: "",
    status: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/task/${id}`);
    setTask(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Task Details</h2>

          <div className="card">
            <div className="card-header">
              Details of task id : {task.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Task:</b>
                  {task.taskname}
                </li>
                <li className="list-group-item">
                  <b>Deadline:</b>
                  {task.deadline}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>
                  {task.status}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}