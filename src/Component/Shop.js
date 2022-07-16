import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <div>
                <h2>Depositr/Withdraw Money</h2>
                <button classNameName="btn" onClick={() => { withdrawMoney(100) }}>-</button>
                Mini bank
                <button classNameName="btn" onClick={() => { depositMoney(100) }}>+</button>
            </div>
            {/* <div className="container my-4">
                <div className="row">
                    <div className="column">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">yum yum order now</p>
                        <a href="/" className="btn btn-primary">ADD to Cart</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Shop
