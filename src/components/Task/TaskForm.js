import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const initialValues = { name: '', completed: false };
    const [values, setValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(values);
        setValues({ ...initialValues });
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <form
            className="d-flex justify-content-center align-items-center mb-4"
            onSubmit={handleSubmit}
        >
            <div className="form-outline flex-fill">
                <input
                    type="text"
                    className="form-control form-control"
                    name="name"
                    placeholder="Ejm. Hacer cardio"
                    onChange={handleInput}
                    value={values.name}
                    required
                />
            </div>
            <button type="submit" className="btn btn-dark btn ml-2">
                Agregar tarea
            </button>
        </form>
    );
};

export default TaskForm;
