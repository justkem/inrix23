import { useState } from "react";

const Form = ({ onClick }) => {
    const [formData, setFormData] = useState({budget: "30", radius: "200", spots: "10"});

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClick(formData);
    }

    return (
        <form style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '400px',
            fontSize: '15px',
            zIndex: 10000
          }} onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Budget</label>
                <input className="form-control" type="text" name="budget" value={formData.budget} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Radius</label>
                <input className="form-control" type="text" name="radius" value={formData.radius} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Spots</label>
                <input className="form-control" type="text" name="spots" value={formData.spots} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit">Search For Parking</button>
        </form>
    );
};

export default Form;