import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const InventoryList = ({ product }) => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [selectedRowId, setSelectedRowId] = useState(null);

    useEffect(() => {
        const initialRows = product.map((prod, index) => ({
            id: index + 1,
            ...prod,
        }));
        setRows(initialRows);
    }, [product]);

    const handleOpen = (length, id) => {
        setModalContent(length);
        setSelectedRowId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRowId(null);
    };

    const handleDelete = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);

        // Remove the deleted product from the localStorage
        const updatedProducts = updatedRows.map(row => ({
            weight: row.weight,
            length: row.length,
            height: row.height,
            width: row.width,
            stock: row.stock,

        }));
        localStorage.setItem('product', JSON.stringify(updatedProducts));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'weight', headerName: 'Weight', width: 150 },
        { field: 'length', headerName: 'Length', width: 200 },
        { field: 'height', headerName: 'Height', width: 130 },
        { field: 'width', headerName: 'Width', width: 100 },
        { field: 'stock', headerName: 'Total Stock', width: 100 },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(params.row.length, params.row.id)}
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
        <div>
            <div className="navbar bg-blue-800">
                <Link to='/'>
                    <button className="btn text-xl">
                        <p className='font-bold text-cyan-700 text-xl'>Home</p>
                    </button>
                </Link>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <h1 className='text-center font-bold text-blue-600 text-3xl m-5 p-5'>Inventory List</h1>
                <DataGrid rows={rows} columns={columns} pageSize={5} />

                {/* Modal */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-weight"
                    aria-describedby="modal-length"
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
                        <Typography id="modal-weight" variant="h6" component="h2">
                            Details
                        </Typography>
                        <Typography id="modal-length" sx={{ mt: 2 }}>
                            {modalContent}
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
        </div>
    );
};

InventoryList.propTypes = {
    product: PropTypes.arrayOf(
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

export default InventoryList;
