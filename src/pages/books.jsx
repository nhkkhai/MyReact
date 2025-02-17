import { useEffect, useState } from "react";
import { fetchAllBooksAPI } from "../services/api.service";
import BookTable from "../components/book/book.table";
import { Button } from "antd";

const BooksPage = () => {

    const [dataBooks, setDataBooks] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadBook();
    }, [current, pageSize]);

    const loadBook = async () => {
        const res = await fetchAllBooksAPI(current, pageSize);
        if (res.data) {
            setDataBooks(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    }


    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    type="primary"
                // onClick={() => showModal()}
                >Create Book</Button>

            </div>

            <BookTable
                dataBooks={dataBooks}
                loadBook={loadBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </>

    )
}

export default BooksPage
