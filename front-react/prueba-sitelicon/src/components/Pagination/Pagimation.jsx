import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 


export default function Pagination ({onChangePage}) {
    const [count, setCount] = useState(1)

    const doChangePage = (newPage) => {
        setCount(newPage)
        window.scrollTo(0,0);
        onChangePage(newPage)
    }

    return <div className="b-container border-bottom pb-5 border-2">
        <button className="b-btn-pages btn btn-warning w-25" onClick={() => doChangePage(count - 1)}>
            {"<"}
        </button>
        <div className="counter">{count}</div>
        <button className="b-btn-pages btn btn-warning w-25" onClick={() => doChangePage(count + 1)}>
            {">"}
        </button>
    </div>
}