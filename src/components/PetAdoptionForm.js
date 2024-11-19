import React, { useState } from "react";

const PetAdoptionForm = ({ addRequest }) => {
    const [petName, setPetName] = useState("");
    const [adopterName, setAdopterName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!petName || !adopterName) {
            alert("Please fill out all fields.");
            return;
        }

        const newRequest = {
            id: Date.now(),
            petName,
            adopterName,
            status: "Pending",
        };

        addRequest(newRequest);
        setPetName("");
        setAdopterName("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Pet Name"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Adopter Name"
                value={adopterName}
                onChange={(e) => setAdopterName(e.target.value)}
            />
            <button type="submit">Add Request</button>
        </form>
    );
};

export default PetAdoptionForm;
