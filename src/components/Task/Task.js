import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

// Components //
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

// Firebase //
import { db } from '../../config/firebase.settings';

const Task = () => {
    const [listTasks, setListTasks] = useState([]);

    const addTask = async (task) => {
        await db.collection('tasks').doc().set(task);
    };

    const getTasks = async () => {
        db.collection('tasks').onSnapshot((querySnapshot) => {
            const tasks = [];
            querySnapshot.forEach((doc) => {
                tasks.push({ ...doc.data(), id: doc.id });
            });
            setListTasks(tasks);
        });
    };

    const deleteTask = async (id) => {
        if (window.confirm('¿Estás seguro?')) {
            await db.collection('tasks').doc(id).delete();
        }
    };

    const updateTask = (e, id) => {
        db.collection('tasks').doc(id).update({
            completed: e.target.checked,
        });
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <Container className="container py-5 h-100">
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Col className="col col-xl-10">
                    <div className="card border-0">
                        <div className="card-body p-2 p-sm-5">
                            <h2 className="mb-3">Lista de tareas</h2>
                            <TaskForm addTask={addTask} />
                            <ul className="list-group mb-0">
                                {listTasks.map(({ id, name, completed }) => (
                                    <TaskItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        completed={completed}
                                        updateTask={updateTask}
                                        deleteTask={deleteTask}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Task;
