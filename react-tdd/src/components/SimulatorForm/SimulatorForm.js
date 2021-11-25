import React from 'react';
import { useFormik } from 'formik';
import { Form, Input, Label, Button, Row } from "./styles";

const SimulatorForm = () => {

    const formik = useFormik({
        initialValues: {
            matematica: '',
            linguagens: '',
            natureza: '',
            humanas: '',
            redacao: ''

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Label htmlFor="matematica">Matemática</Label>
                <Input
                    id="matematica"
                    name="matematica"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.linguagens}
                />

                <Label htmlFor="linguagens">Linguagens</Label>

                <Input
                    id="linguagens"
                    name="linguagens"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.linguagens}
                />

                <Label htmlFor="natureza">Natureza</Label>
                <Input
                    id="natureza"
                    name="natureza"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.natureza}
                />

                <Label htmlFor="humanas">Humanas</Label>
                <Input
                    id="humanas"
                    name="humanas"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.humanas}
                />
            </Row>

            <Label htmlFor="redacao">Redação</Label>
            <Input
                id="redacao"
                name="redacao"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.redacao}
            />
            <Button type="submit">Simular</Button>

        </Form>
    );
};

export default SimulatorForm;