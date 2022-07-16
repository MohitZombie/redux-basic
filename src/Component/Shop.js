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
        </>
    )
}

export default Shop
