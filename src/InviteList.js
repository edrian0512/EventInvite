import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const InviteList = () => {
    const [invdata, invdatachange] = useState(null);
    const navigate = useNavigate();

    const update = (id) => {
        navigate("/invite/edit/" + id);
    }
    const deleteData = (id) => {
        if (window.confirm('Do you want to delete?')) {

            fetch("http://localhost:8000/invite/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Successfully Deleted!')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })

        }
    }

    useEffect(() => {
        fetch('http://localhost:8000/invite').then((res) => {
            return res.json();
        }).then((resp) => {
            invdatachange(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="container">
            <div className="card">
                <div className="mt-3">
                    <h2>Invite List</h2>
                </div>
                <div className="card-body">
                    <div className="addBtn mb-3">
                        <Link to="invite/create" className="btn btn-primary">Add New (+)</Link>

                        {/* <label>Filter:</label> */}
                        <div className="filter">
                            <select className="form-control">
                                <option>All</option>
                                <option>Ongoing</option>
                                <option>Pending</option>
                                <option>Done</option>
                            </select>
                        </div>



                    </div>

                    <div className="search">
                        {/* <label>Search Filter: </label> */}
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Invite Date</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {invdata &&
                                invdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.date}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button onClick={() => { update(item.id) }} className="btn btn-info edit" >Edit</button>
                                            <button onClick={() => { deleteData(item.id) }} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default InviteList;