import React from "react";

const AdoptionReport = ({ requests }) => {
    const totalRequests = requests.length;
    const approved = requests.filter((req) => req.status === "Approved").length;
    const rejected = requests.filter((req) => req.status === "Rejected").length;
    const pending = totalRequests - approved - rejected;

    return (
        <div>
            <h2>Adoption Trends Report</h2>
            {totalRequests === 0 ? (
                <p>No data to generate a report.</p>
            ) : (
                <ul>
                    <li>Total Requests: {totalRequests}</li>
                    <li>Approved: {approved}</li>
                    <li>Rejected: {rejected}</li>
                    <li>Pending: {pending}</li>
                </ul>
            )}
        </div>
    );
};

export default AdoptionReport;
