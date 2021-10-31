// Components //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ id, name, completed, updateTask, deleteTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border-left-0 border-right-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className="d-flex align-items-center">
                <label htmlFor={id}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={id}
                        id={id}
                        checked={completed ? true : false}
                        onChange={(e) => {
                            updateTask(e, id);
                        }}
                    />
                    {name}
                </label>
            </div>
            <a
                href="#!"
                className="text-danger"
                onClick={() => deleteTask(id)}
                title="Remove item"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </a>
        </li>
    );
};

export default TaskItem;
