import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cartArr = useSelector((state) => state.cartReducer);
  console.log(cartArr);

  return (
    <div className="container">
      <h3>Cart page</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartArr.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <img width={50} height={50} src={item.image} alt="" />
              </td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => {
                    const action = {
                      type: "INCREMENT_QUANTITY",
                      payload: item.id,
                    };
                    dispatch(action);
                  }}
                >
                  +
                </button>
                {item.quantity}
                <button
                  className="btn btn-success ms-2"
                  onClick={() => {
                    const action = {
                      type: "DECREMENT_QUANTITY",
                      payload: item.id,
                    };
                    dispatch(action);
                  }}
                >
                  -
                </button>
              </td>
              <td>{item.quantity * item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Bạn có chắc chắn muốn xóa sản phẩm này?"
                    );
                    if (confirmed) {
                      const action = {
                        type: "DELETE_ITEM",
                        payload: item.id,
                      };
                      dispatch(action);
                    }
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
