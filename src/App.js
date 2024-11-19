import React, { useState } from "react"; 
import PetAdoptionForm from "./components/PetAdoptionForm";
import AdoptionRequestList from "./components/AdoptionRequestList";
import AdoptionReport from "./components/AdoptionReport";

const App = () => {
    const [requests, setRequests] = useState([]);

    const addRequest = (newRequest) => {
        setRequests([...requests, newRequest]);
    };

    const updateRequestStatus = (id, status) => {
        setRequests(
            requests.map((req) =>
                req.id === id ? { ...req, status } : req
            )
        );
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Pet Adoption Tracker</h1>
            <PetAdoptionForm addRequest={addRequest} />
            <AdoptionRequestList
                requests={requests}
                updateRequestStatus={updateRequestStatus}
            />
            <AdoptionReport requests={requests} />
        </div>
    );
};

export default App;
