import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
    const [dataList, setDataList] = useState();
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [addDiscount, setAddDiscount] = useState(false);

    useEffect(() => {
        const products = async () => {
            const fetchData = await axios.get("/products");
            setDataList(fetchData.data);
        };
        products();
    }, []);

    return (
        <div className="App">
            <div className="item">
                {dataList && (
                    <ul className="container">
                        {dataList.map((item) => (
                            <Card
                                item={item}
                                key={item._id}
                                totalCount={totalCount}
                                setTotalCount={setTotalCount}
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <div className="order-summary">
                <h2>Order Summarry</h2>
                <h3>Total Amount</h3>
                <p>{totalCount}</p>
                <h3>Total Price</h3>
                <p>{addDiscount ? totalPrice - 5 : totalPrice}</p>
                <button onClick={() => setAddDiscount(!addDiscount)}>
                    {addDiscount
                        ? "Don't add the $5 discount"
                        : "Add the $5 discount"}
                </button>
            </div>
        </div>
    );
}

export default App;
