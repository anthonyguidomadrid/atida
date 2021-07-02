import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap'

const SearchRange = ({filterProductsRange, name, maximum, icon}) => {

    const [max, setMaxValue] = useState(maximum)
    const [min, setMinValue] = useState(0)

    const handleChangeMax = e => {
        const value = e.target.value
        setMaxValue(value)
    }

    const handleChangeMin = e => {
        const value = e.target.value
        setMinValue(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        filterProductsRange(min, max, name)
    }

    return(
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="maxValue">
                <Form.Label>Maximum {name}: {max}{icon}</Form.Label>
                <Form.Control type="range" min="0" max={maximum} onChange={e => handleChangeMax(e)} value={max}/>
            </Form.Group>
            <Form.Group controlId="minValue">
                <Form.Label>Minimum {name}: {min}{icon}</Form.Label>
                <Form.Control type="range" min="0" max={maximum} onChange={e => handleChangeMin(e)} value={min}/>
            </Form.Group>
            <Button variant="dark" type="submit">
                    Submit
            </Button>
        </Form>
    )
}

export default SearchRange