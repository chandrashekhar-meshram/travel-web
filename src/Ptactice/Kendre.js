import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from 'yup';

const validationObj = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter name")
});

const Kendre = () => {

    const initialObj = {
        name: ""
    }

    const onSubmit = (value, props) => {
        console.log("value", value);
        console.log("props", props);
        //console.log(validationObj);
    }

    return (
        <>
            <h1>Formik</h1>
            <Formik initialValues={initialObj}
                onSubmit={onSubmit}
                validationSchema={validationObj}
            >
                {() => (
                    <Form>

                        <Field
                            name="name"
                            helperText={<ErrorMessage name="name" />}
                        />
                        <button type="submit">Submit</button>

                    </Form>

                )}
            </Formik>

        </>
    )
}

export default Kendre