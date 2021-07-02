import React, { useState } from "react"
import { Button, Form } from 'react-bootstrap'

const SearchDropdown = ({arr, filterProductsDropdown}) => {
    
    for (let i=0;i<arr.length;i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    const [value, setValue] = useState(arr[0])

    const handleInputChange = e => {
        const selectedValue = e.target.value
        setValue(selectedValue)
    }

    const handleSubmit = e => {
        e.preventDefault()
        filterProductsDropdown(value)
    }

    return(
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control id={value} as="select" value={value} onChange={e => handleInputChange(e)}>
                {arr.map(elm => <option key={elm} id={elm}>{elm}</option>)}
                </Form.Control>
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    ) 
}

export default SearchDropdown