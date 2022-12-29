import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InvCreate = () => {

    const [id, idChange] = useState('');
    const [title, titleChange] = useState('');
    const [date, dateChange] = useState('');
    const [status, statusChange] = useState('');
    const [validation, valChange] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const invData = { title, date, status }


        fetch("http://localhost:8000/invite", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(invData)
        }).then((res) => {
            Swal.fire('Added ','','success')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title text-left" style={{ 'textAlign': 'left' }}>
                                <h3 className="text-center mt-3">Create Invite</h3>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled='disabled' className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input required value={title} onMouseDown={e => valChange(true)} onChange={e => titleChange(e.target.value)} className="form-control" placeholder="Enter Title"></input>
                                                {title.length === 0 && validation && <span className="text-danger">Input a Title</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input type="date" value={date} onChange={e => dateChange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group mb-3">
                                                <label>Status</label>
                                                <select value={status} onChange={(e) => statusChange(e.target.value)} className="form-control">
                                                    <option value="On-Going">On-Going</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Done">Done</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="btn btn-success edit" type="submit">Save</button>
                                                <Link to="/" className="btn btn-danger">Back</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default InvCreate;