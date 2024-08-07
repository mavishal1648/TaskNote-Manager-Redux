import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../redux/reducers/noteReducer";
import styles from "./NoteForm.module.css";
import { notificationSelector, reset } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(() => {
      dispatch(reset())
    },2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(noteActions.add(noteText))
    setNoteText("");
  };

  return (
    <div className={styles.noteContainer}>
     {
        message && 
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
