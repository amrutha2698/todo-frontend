import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import { Navigate } from "react-router-dom";
import { addTask, getAllTasks, removeTask } from "../services/allApi";
import Task from "./Task";


function Home() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  // console.log(toDo);
  // const navigate = Navigate()
  // const toTask= ()=>{
  //     navigate('/task')
  // }

  const handleAddTask = async (e) => {
    // Header
    // const headerConfig = {
    //   "Content-Type": "multipart/form-data"
    // }
    const data = new FormData();
    data.append("toDo", toDo);
    // make api call to service
    const response = await addTask(data);
    // console.log(response);
  };
  const getTasks = async () => {
    const result = await getAllTasks();
    // console.log(result.data);
    setToDos(result.data);
    setToDo("")
  };

  const deleteTask=async (id)=>{
    // console.log(id);
    const response = await removeTask(id)
        // console.log(response);
        if (response.status === 200) {
            getTasks()
        } else {
            console.log("Error :", response);
        }
  }

  useEffect(() => {
    getTasks();
    // deleteTask()
  }, []);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TASK MANAGER</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input
          id="toDo"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        {/* <i onClick={()=>setToDos([...toDos,{id:Date.now() ,text:toDo,status:false}])}className="fas fa-plus"></i> */}
        <i onClick={handleAddTask} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    // console.log(e.target.checked);
                    // console.log(obj);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.task}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" id={obj._id} onClick={(e)=>{
                    deleteTask(e.target.id)
                }}></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Home;
