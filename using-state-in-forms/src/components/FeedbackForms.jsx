import React, { useState} from "react";

function FeedbackForm ()  {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });


const handleChange = (e) => {
    const { name, value } =e.target;

    if (name=== "feedback" && value.length >200) return;

    setFormData({
        ...formData,
        [name]: value
    });
};
return (
    <><div>
        <h2> Feedback Form </h2>
        <br />
        <br />
        <label> Name: </label>
        <br /> 
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange} />

    </div><div>

            <label>Email:</label><br />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange} />

        </div><div>
            <label>Feedback (max 200 characters):</label><br />

            <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"></textarea>
            <div style={{ marginTop: "30px", padding: "15px", border: "1px solid #ddd", borderRadius: "6px", background: "#f9f9f9" }}>
                <h3>Preview:</h3>
                <p><strong>Name:</strong> {formData.name || "-"}</p>
                <p><strong>Email:</strong> {formData.email || "-"}</p>
                <p><strong>Feedback:</strong> {formData.feedback || "-"}</p>
            </div>
        </div></>
);



}
export default FeedbackForm