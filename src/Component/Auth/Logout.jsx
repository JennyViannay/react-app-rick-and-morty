import React from "react";

const Logout = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <button className="btn bg-blue-500" onClick={handleLogout}>Logout</button>
    );
};

export default Logout;