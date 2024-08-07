
import { useSelector, useDispatch } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
import styles from "./NoteList.module.css";

function NoteList() {
    const notes=useSelector(noteSelector);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li className={styles.item} key={index}>
            <p>{note.createdOn}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button className={"btn btn-danger "+styles.button}
            onClick={()=> dispatch(noteActions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
