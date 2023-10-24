import React, { useState } from 'react';

const Home = () => {

    const [tableData, setTableData] = useState([]);
    const [newRow, setNewRow] = useState({});

    const addNewRow = () => {
        setTableData([...tableData, newRow]);
        // Reset the newRow state to empty values
        setNewRow({
            no: tableData.length + 1,
            // Reset other fields as needed
        });
    }
    return (
        <div className='mx-auto'>
            <div>
                <button onClick={addNewRow} className='btn btn-success btn-sm'>Add New Item</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>ID</th>
                            <th>Start date</th>
                            <th>End Date</th>
                            <th>Month/Year</th>
                            <th>Date Include</th>
                            <th>Days</th>
                            <th>Lead Count</th>
                            <th>Expected DDR</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.no}</td>
                                <td>{row.no === 0 ? '0' : row.no}</td>
                                <td>
                                    <input type="text" name="" id="" />
                                </td>
                                {/* Render other table data cells as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;