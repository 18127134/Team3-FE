import React from "react";
import Service from "./service";

// Test list service
const nail_service = [
    {
        id: "aa1",
        name: "Nhặt da",
        price: 20000
    },
    {
        id: "aa2",
        name: "Sơn gel",
        price: 80000
    },
    {
        id: "aa3",
        name: "Sơn thạch",
        price: 90000
    },
    {
        id: "aa4",
        name: "Sơn lông",
        price: 90000
    },
    {
        id: "aa5",
        name: "Sơn mắt mèo",
        price: 90000
    }
]

const nail_design = [
    {
        id: "bbb1",
        name: "Tráng gương",
        price: 10000
    },
    {
        id: "bbb2",
        name: "Hoa nổi",
        price: 10000
    },
    {
        id: "bbb3",
        name: "Đá rắc",
        price: 30000
    }
]

// Main
function Chooseservice() {
    // Function
    function handleChoose(data) {
        if (data[0]) itemcheck.push(data[1]);
        else itemcheck.splice(itemcheck.indexOf(data[1]), 1);
    }

    const itemcheck = [];

    return (
        <div className="d-flex justify-content-center">
            <div id="container-border" className="d-flex choose-service">
                <div>
                    <h1>
                        Nail Service
                    </h1>

                    {nail_service.map((item, index) => {
                        return (
                            <Service
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                idchoose={handleChoose}
                            />
                        )
                    })}
                </div>

                <div>
                    <h1>
                        Nail Design
                    </h1>

                    {nail_design.map((item, index) => {
                        return (
                            <Service
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                idchoose={handleChoose}
                            />
                        )
                    })}
                </div>

            </div>
        </div>

    )
}

export default Chooseservice;