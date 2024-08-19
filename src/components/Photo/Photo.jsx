import React, { useState, useEffect } from 'react';
import './Photo.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Photo = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const savedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
        setPhotos(savedPhotos);
    }, []);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const photoDataURL = reader.result;
                const updatedPhotos = [...photos, photoDataURL];
                setPhotos(updatedPhotos);
                localStorage.setItem('photos', JSON.stringify(updatedPhotos));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="navbar bg-blue-800">
                <Link to='/'>
                    <button className="btn text-xl">
                        <p className='font-bold text-cyan-700 text-xl'>Home</p>
                    </button>
                </Link>
            </div>
            <div className="container">
                <h2 className="title">Add Photos</h2>
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="input" />
                {photos.length > 0 && (
                    <div className="photosContainer">
                        <h3 className="subtitle">Photo Gallery</h3>
                        <div className="photoList">
                            {photos.map((photo, index) => (
                                <div key={index} className="photoItem">
                                    <span className="photoNumber">#{index + 1}</span>
                                    <img src={photo} alt={`Uploaded Preview ${index + 1}`} className="photo" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Photo;
