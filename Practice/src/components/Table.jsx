import React from 'react'

function Table() {
    const students = [
        {
            name: "Astik Yadav",
            branch: "CS",
            course: "B.tech",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
        {
            name: "Ankit Yadav",
            branch: "CS",
            course: "Bsc.",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
        {
            name: "Astik Yadav",
            branch: "CS",
            course: "B.tech",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
        {
            name: "Ankit Yadav",
            branch: "CS",
            course: "Bsc.",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
        {
            name: "Astik Yadav",
            branch: "CS",
            course: "B.tech",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
        {
            name: "Ankit Yadav",
            branch: "CS",
            course: "Bsc.",
            address:{
                Hn:100,
                city:"Noida",
                state:"UP"
            }
        },
    ]
    return (
        <>
            <table border="1" cellPadding="0">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Course</th>
                        <th>Address
                            <tr>
                                <td>Hn.</td>
                                <td>City</td>
                                <td>State</td>
                            </tr>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.branch}</td>
                                <td>{data.course}</td>
                                <td>
                                    <tr>
                                        <td>{data.address.Hn}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.address.state}</td>
                                    </tr>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table
