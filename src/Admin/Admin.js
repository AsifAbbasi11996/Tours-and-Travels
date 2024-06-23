import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddCountry from "./AddCountry";
import AddPackage from "./AddPackage";
import AddPlace from "./AddPlace";
import AddSpot from "./AddSpot";

const Admin = () => {
    const [selectedButton, setSelectedButton] = useState("button1");
    const location = useLocation();
    const navigate = useNavigate();
    const condition = location.state || {};

    const validate = () => {
        if (condition !== "Pass") {
            navigate(`/adminlogin`);
        }
    };

    useEffect(() => {
        validate();
    }, [condition]);

    const renderComponent = () => {
        switch (selectedButton) {
            case "button1":
                return <AddCountry />;
            case "button2":
                return <AddPackage />;
            case "button3":
                return <AddPlace />;
            case "button4":
                return <AddSpot />;
            default:
                return null;
        }
    };

    return (
        <section className="admin-main">
            <div className="admin-container">
                <div className="admin-buttons">
                    <button
                        onClick={() => setSelectedButton("button1")}
                        style={{
                            backgroundColor: selectedButton === "button1" ? "#ff6a00" : "inherit",
                        }}
                    >
                        Add Country
                    </button>
                    <button
                        onClick={() => setSelectedButton("button2")}
                        style={{
                            backgroundColor: selectedButton === "button2" ? "#ff6a00" : "inherit",
                        }}
                    >
                        Add Package
                    </button>
                    <button
                        onClick={() => setSelectedButton("button3")}
                        style={{
                            backgroundColor: selectedButton === "button3" ? "#ff6a00" : "inherit",
                        }}
                    >
                        Add Place
                    </button>
                    <button
                        onClick={() => setSelectedButton("button4")}
                        style={{
                            backgroundColor: selectedButton === "button4" ? "#ff6a00" : "inherit",
                        }}
                    >
                        Add Spot
                    </button>
                </div>
                <div className="admin-content">
                    {renderComponent()}
                </div>
            </div>
        </section>
    );
};

export default Admin;
