
import React, { useState } from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";


export default function Dashboard() {


// const [selectedStudents, setSelectedStudents] = useState([]);

    return (
        <React.Fragment>
            {/* <SelectedStudents.Provider value={{ selectedStudents, setSelectedStudents }}> */}

                <div className='header'>
                    <Header />
                </div>
                <div className="Product">
                    <PageRoutes />

                </div>

            {/* </SelectedStudents.Provider> */}
        </React.Fragment>

    )

}