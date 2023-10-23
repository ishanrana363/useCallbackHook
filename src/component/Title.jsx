import React from "react";

const Title = () => {
    console.log("Rendering title")
    return (
        <div>
            <h1>title</h1>
            <h1>Use callback hook</h1>
        </div>
    );
};

export default React.memo(Title) ;