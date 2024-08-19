import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = ({ products }) => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [selectedRowId, setSelectedRowId] = useState(null);

    useEffect(() => {
        const savedProducts = localStorage.getItem('productListData');
        if (savedProducts) {
            setRows(JSON.parse(savedProducts));
        } else {
            const initialRows = products.map((product, index) => ({
                id: index + 1,
                ...product,
            }));
            setRows(initialRows);
        }
    }, [products]);

    useEffect(() => {
        if (rows.length > 0) {
            localStorage.setItem('productListData', JSON.stringify(rows));
        }
    }, [rows]);

    const handleOpen = (description) => {
        setModalContent(description);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleDelete = (id) => {
        // Filter out the deleted row
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'extra', headerName: 'Extra Price', width: 100 },
        { field: 'amount', headerName: 'Tax Amount', width: 100 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(params.row.description)}
                >
                    View
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(params.row.id)}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1 className='text-center font-bold text-blue-600 text-3xl m-5 p-5'>Product List</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} />

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Description
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Its a unique
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClose}
                        sx={{ mt: 2 }}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            extra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
};

export default ProductList;
