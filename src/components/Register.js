import React, { useContext, useEffect, useRef, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import InputComponent from './InputComponent';
import { UserContext } from '../App';

function FormState() {
    const [data, setData] = useState({
        name: '',
        email: ''
    });

    const userData = useContext(UserContext);

    const inputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name.length < 0 && !data.email.length < 0) {

            console.log(data);
            setData({
                name: '',
                email: ''
            })
        };
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Card className='col-10 col-sm-6 col-md-4 p-4 rounded shadow mx-2'>
                {/* <p>Username:- {userData?.username} and Age:- {userData?.age}</p> */}

                <h1 className='text-center mb-4 fs-3'>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <InputComponent
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        ref={inputRef}
                        invaild={data.name.length < 0}
                    />
                    <InputComponent
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        invaild={data.email.length < 0}
                    />
                    <Button variant="primary" type="submit" className='w-100 mt-3'>Submit</Button>
                    <p>THis is sample text</p>
                </form>


                <title>Registartion Page</title>
                <style href='firstStyle' precedence={'1'}>{`p{color:red}`}</style>
            </Card>
        </div>
    );
}

export default FormState;
