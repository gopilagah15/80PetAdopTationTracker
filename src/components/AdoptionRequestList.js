import React from "react";

const AdoptionRequestList = ({ requests, updateRequestStatus }) => {
    const handleStatusChange = (id, status) => {
        updateRequestStatus(id, status);
    };

    return (
        <div>
            <h2>Adoption Requests</h2>
            {requests.length === 0 ? (
                <p>No adoption requests yet.</p>
            ) : (
                <ul>
                    {requests.map((req) => (
                        <li key={req.id}>
                            <strong>Pet Name:</strong> {req.petName} <br />
                            <strong>Adopter Name:</strong> {req.adopterName} <br />
                            <strong>Status:</strong> {req.status} <br />
                            <button onClick={() => handleStatusChange(req.id, "Approved")}>
                                Approve
                            </button>
                            <button onClick={() => handleStatusChange(req.id, "Rejected")}>
                                Reject
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AdoptionRequestList;
