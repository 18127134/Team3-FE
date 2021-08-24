import React from "react"



function Serviceinfor(props) {
    // Function

    return (
        <div className="d-flex justify-content-between">
            <div>
                <p className="form-check-label" style={{ marginTop: "0%" }}>
                    {props.name}
                </p>
            </div>
            <p>
                {props.price / 1000}k
            </p>

        </div>
    );
}

export default Serviceinfor;