import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = ({ setInv }) => {
    const [formData, setFormData] = useState({
        weight: '',
        length: '',
        height: '',
        width: '',
        stock: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInv((prevProducts) => [...prevProducts, formData]); // Append the new product
        setFormData({
            weight: '',
            length: '',
            height: '',
            width: '',
            stock: '',

        });

        navigate('/inventory_list'); // Redirect to the product list page
    };

    return (
        <div>
            <h1 className='text-center font-bold text-blue-600 text-3xl m-5 p-5'>Inventory Details</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
                <TextField label="Weight" variant="outlined" name="weight" type="number" value={formData.weight} onChange={handleChange} />
                <TextField label="Length" variant="outlined" name="length" type="number" value={formData.length} onChange={handleChange} />
                <TextField label="Height" variant="outlined" name="height" type="number" value={formData.height} onChange={handleChange} />
                <TextField label="Width" variant="outlined" name="width" type="number" value={formData.width} onChange={handleChange} />
                <TextField label="Total Stock" variant="outlined" name="stock" type="number" value={formData.stock} onChange={handleChange} />

                <Button type="submit" variant="contained" color="primary">Add Product</Button>
                <Link to='/'>
                    <Button variant="contained" color="secondary">Back to Home</Button>
                </Link>
            </form>
        </div>
    );
};

export default Inventory;
