import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Book() {
    const api = 'http://localhost:3002';
    const [books, setBooks] = useState([]);
    const [isbn, setIsbn] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await axios
                .get(api + "/db/list")
                .then((res) => {
                    setBooks(res.data);
                })
                .catch((err) => {
                    throw err;
                });
        } catch (e) {
            Swal.fire({
                title: "error",
                text: e,
                icon: "error",
            });
        }
    };


    const newRecord = () => {
        setIsbn('');
        setName('');
        setPrice(0);
    }

    const newRecordSave = () => {
        try {
            axios.post(api + '/db/insert', {
                isbn: isbn,
                name: name,
                price: price
            }).then(res => {
                Swal.fire({
                    title: 'saved',
                    text: 'บันทึกข้อมูลสำเร็จ',
                    icon: 'success',
                    timer: 1000
                })

                fetchData();

            }).catch(err => {
                throw err;
            })

        } catch (e) {
            Swal.fire({
                title: "error",
                text: e,
                icon: "error",
            });
        }
    }

    const removeRecord = (item) => {
        try {
            Swal.fire({
                title: 'Confirm Delete',
                text: "Are you sure for delete data ?",
                icon: "question",
                showCancelButton: true,
                showConfirmButton: true,
            }).then(res => {
                if (res.isConfirmed) {
                    axios.delete(api + '/db/delete/' + item.id).then(res => {
                        Swal.fire({
                            title: "remove row",
                            text: "ลบรายการแล้ว",
                            icon: "success",
                            timer: 1000,
                        });

                        fetchData();
                    }).catch(err => {
                        throw err;
                    })
                }
            })

        } catch (e) {
            Swal.fire({
                title: "error",
                text: e,
                icon: "error",
            });
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className='h3 mt-3 text-center'>Book Data</div>
                <button data-bs-toggle="modal" data-bs-target="#modalForm" className='btn btn-primary mt-3' onClick={newRecord}>
                    <i className="fa-solid fa-plus me-1"></i>
                    New Record
                </button>
                <table className="mt-3 table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>isbn</td>
                            <td>name</td>
                            <td>price</td>
                            <td width="230px"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0
                            ? books.map((item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.isbn}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary me-3'>
                                            <i className="fa-solid fa-pencil me-1"></i>
                                            edit
                                        </button>
                                        <button className='btn btn-danger' onClick={e => removeRecord(item)}>
                                            <i className="fa-solid fa-trash me-1"></i>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>

                <div className="modal" tabIndex="-1" id='modalForm'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Book Data</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div>
                                        <label>isbn</label>
                                        <input onChange={e => setIsbn(e.target.value)} className='form-control'></input>
                                    </div>
                                    <div className='mt-3'>
                                        <label>name</label>
                                        <input onChange={e => setName(e.target.value)} className='form-control'></input>
                                    </div>
                                    <div className='mt-3'>
                                        <label>price</label>
                                        <input onChange={e => setPrice(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={newRecordSave} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Book