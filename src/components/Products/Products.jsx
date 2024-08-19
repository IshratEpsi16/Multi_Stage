import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Products = ({ setProducts }) => {  // setProducts received as a prop
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        extra: '',
        amount: '',
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
        // Check if setProducts is a function before using it
        if (typeof setProducts === 'function') {
            setProducts((prevProducts) => [...prevProducts, formData]); // Update the products state
        } else {
            console.error('setProducts is not a function');
        }

        // Reset form fields
        setFormData({
            title: '',
            description: '',
            category: '',
            price: '',
            extra: '',
            amount: '',
        });

        navigate('/product_list'); // Redirect to the product list page
    };

    return (
        <div>
            <h1 className='text-center font-bold text-blue-600 text-3xl m-5 p-5'>Product Details</h1>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxWidth: '400px',
                margin: '0 auto'
            }}>
                <TextField
                    label="Product Title"
                    variant="outlined"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <TextField
                    label="Category"
                    variant="outlined"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <TextField
                    label="Regular Price"
                    variant="outlined"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                />
                <TextField
                    label="Extra Price"
                    variant="outlined"
                    name="extra"
                    type="number"
                    value={formData.extra}
                    onChange={handleChange}
                />
                <TextField
                    label="Tax Amount"
                    variant="outlined"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Product
                </Button>
            </form>
        </div>
    );
};

export default Products;
