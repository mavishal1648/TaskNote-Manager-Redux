import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import styles from "./ToDoForm.module.css";
import {notificationSelector, reset } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector)

  if(message){
    setTimeout(() => {
      dispatch(reset())
    },2000);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodoText("");
    dispatch(todoActions.add(todoText));
  };

  return (
    <div className={styles.container}>
      {
        message && 
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }
     
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;