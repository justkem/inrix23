import { useState } from "react";

const SearchField = ({ onSearch }) => {
    const [address, setAddress] =  useState('');

	const handleChange = (event) => {
		setAddress(event.target.value);
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(address);
    }

    return (
        <form style={{
            position: 'absolute',
            top: '20px',
            left: '50px',
            width: '400px',
            fontSize: '21px',
            zIndex: 10000
          }} onSubmit={handleSubmit}>
            <label style={{width: '100%'}}>
                <input className='form-control' style={{width: '100%', padding: '5px', borderRadius: '10px', fontSize: '20px'}} type="text" value={address} onChange={handleChange} />
            </label>
        </form>
    );
};

export default SearchField;