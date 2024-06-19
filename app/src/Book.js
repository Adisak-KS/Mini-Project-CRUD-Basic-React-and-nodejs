import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Book() {
    const api = 'http://localhost:3002';
    const [books, setBooks] = useState([]);

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



    return (
        <>
            <div className="container-fluid">
                <div>Book Data</div>
                <button className='btn btn-primary mt-3'>
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
                                        <button className='btn btn-danger'>
                                            <i className="fa-solid fa-trash me-1"></i>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Book