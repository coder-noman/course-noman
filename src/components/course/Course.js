import React from 'react';
import './course.css'

const Course = (props) => {
    
    const {name,language,teacher,students,price,img} = props.course || {};
    return (
        <div className="col-md-4 gy-3">
            <div class="card" style={{"width": "18rem"}}>
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text ">Instructor: <small className="fw-bold">{teacher}</small></p>
                            <p class="card-text">Student Enrolled: <small className="fw-bold">{students}</small></p>
                            <p class="card-text">language: <small className="fw-bold">{language}</small></p>
                            <p class="card-text">price: <small className="fw-bold">${price}</small></p>
                            <a href="#" class="btn button text-white" onClick={()=>props.handleAddCart(props.course)}><i class="fas fa-shopping-cart"></i> Enroll Now</a>
                        </div>
            </div>
        </div>
    );
};

export default Course;