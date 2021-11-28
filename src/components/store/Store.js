import React, { useEffect, useState } from 'react';
import { addToDb } from '../../localDb/localDb';
import Cart from '../cart/Cart';
import Course from '../course/Course';
import './store.css'

const Store = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddCart = (course) => {
        const newCart = [...cart,course]
        setCart(newCart)
        addToDb(course.name)
    }
    useEffect(()=>{
        fetch('/course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <div className="ms-5">
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="row">
                        {
                            courses.map(course => <Course key={course.id} course={course} handleAddCart={handleAddCart}></Course>)
                        }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;