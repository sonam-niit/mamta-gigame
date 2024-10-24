import { useState } from "react";

function UseCase1() {
    const [name, setName] = useState("Sonam Soni")
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', price: 19999 },
        { id: 2, name: 'Mobile', price: 9999 },
        { id: 3, name: 'Headset', price: 999 },
    ]);
    const change = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <button onClick={() => setFlag(flag ? false : true)}>{flag ? 'Logout' : 'Login'}</button>
            <h3>Hello {name}, {count}</h3>
            <input type="text" value={name} onChange={change} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <table className="table table-bordered">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    {
                        products.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default UseCase1;