import { Link } from "react-router-dom";
import React, { useRef, useContext } from "react";
import { getFireStore } from "../db/firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { cartContext } from "../context/CartProvider";
import { useState } from "react/cjs/react.development";

function Order() {
  const { cart, deleteItem, clearCart, totalOrder } = useContext(cartContext);
  const { orderID, setOrderID } = useState();

  const nameRef = useRef();
  const lastNameRef = useRef();
  const contactRef = useRef();
  const adressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const mailRef = useRef();
  const documentRef = useRef();
  //const sendTypeRef = useRef();

  function finishOrder() {
    const db = getFireStore();

    const orders = db.collection("orders");
    const newOrder = {
      buyer: {
        name: nameRef.current.value,
        lastName: lastNameRef.current.value,
        contact: contactRef.current.value,
        adress: adressRef.current.value,
        city: cityRef.current.value,
        province: provinceRef.current.value,
        mail: mailRef.current.value,
        dni: documentRef.current.value,
        //sendType: sendTypeRef.current.value
      },
      items: cart,
      //date: firebase.firestore.Timestamp.fromDate(new date()),
      total: totalOrder(),
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderID(id);
      })
      .catch((err) => {
        alert("Ocurrio un error! " + err);
      });
  }

  return (
    <div className="container">
      <div className="card order-card">
        <form className="form-order">
          <div className="form-row row">
            <div className="form-group col-md-4">
              <label className="form-label">Nombre</label>
              <input
                ref={nameRef}
                type="name"
                className="form-control"
                id="inputEmail4"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Apellido</label>
              <input
                ref={lastNameRef}
                type="name"
                className="form-control"
                id="inputEmail4"
                placeholder="Apellido"
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Telefono de Contacto</label>
              <input
                ref={contactRef}
                type="number"
                className="form-control"
                id="inputPassword4"
                placeholder="Contacto"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label className="form-label">Direccion</label>
              <input
                ref={adressRef}
                type="txt"
                className="form-control"
                placeholder="Direccion"
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Localidad</label>
              <input
                ref={cityRef}
                type="txt"
                className="form-control"
                placeholder="Localidad"
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Provincia</label>
              <input
                ref={provinceRef}
                type="txt"
                className="form-control"
                placeholder="Provincia"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label">Mail</label>
              <input
                ref={mailRef}
                type="txt"
                className="form-control"
                placeholder="Mail"
              />
            </div>
            <div className="form-group col-md-4">
              <label ref={documentRef} className="form-label">
                DNI
              </label>
              <input type="number" className="form-control" placeholder="DNI" />
            </div>
            {/* <div class="col-md-2">
              <label className="form-label">Envio a...</label>
              <select ref={sendType} class="form-select">
                <option selected>A Sucursal</option>
                <option>A domicilio</option>
              </select>
            </div> */}
          </div>
          <div>
            <Link to={"/order"}>
              <button onClick={() => finishOrder()} type="submit" className="btn btn-primary">
                Realizar Pedido
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
