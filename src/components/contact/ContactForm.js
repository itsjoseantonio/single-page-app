import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Firebase //
import { db } from '../../config/firebase.settings';

const ContactForm = () => {
    const [successMessage, setSuccessMessage] = useState(false);

    const sendMessage = async (values) => {
        try {
            await db.collection('contact').doc().set(values);
            setSuccessMessage(true);
            setTimeout(() => {
                setSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                tel: '',
                email: '',
                message: '',
            }}
            validate={(values) => {
                const errors = {};

                // Validation name
                if (!values.name) {
                    errors.name = 'Campo requerido';
                }

                // Validation tel
                if (!values.tel) {
                    errors.tel = 'Campo requerido';
                }

                // Validation email
                if (!values.email) {
                    errors.email = 'Campo requerido';
                } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        values.email
                    )
                ) {
                    errors.email = 'Email inválido';
                }

                // Validation message
                if (!values.message) {
                    errors.message = 'Campo requerido';
                }

                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                sendMessage(values);
            }}
        >
            {({ errors }) => (
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Nombre</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="José Antonio"
                            />
                            <ErrorMessage
                                name="name"
                                component={() => (
                                    <span className="text-danger small">
                                        {errors.name}
                                    </span>
                                )}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Teléfono</label>
                            <Field
                                type="tel"
                                className="form-control"
                                id="tel"
                                name="tel"
                                placeholder="999999999"
                            />
                            <ErrorMessage
                                name="tel"
                                component={() => (
                                    <span className="text-danger small">
                                        {errors.tel}
                                    </span>
                                )}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Email</label>
                        <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="mail@mail.com"
                        />
                        <ErrorMessage
                            name="email"
                            component={() => (
                                <span className="text-danger small">
                                    {errors.email}
                                </span>
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Mensaje</label>
                        <Field
                            as="textarea"
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Message..."
                        />
                        <ErrorMessage
                            name="message"
                            component={() => (
                                <span className="text-danger small">
                                    {errors.message}
                                </span>
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark">
                            Enviar
                        </button>
                    </div>
                    {successMessage && (
                        <div className="alert alert-success" role="alert">
                            Mensaje enviado satisfactoriamente
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
