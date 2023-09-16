import React, { useEffect, useState } from "react";
import Header from "./Header";
import './Dataload.css';

function Dataload() {
    const [dataload, setDataload] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setDataload(data));
    }, []);

    const handleSelectCourse = (course) => {
        const newTotalCreditHour = totalCreditHour + course.credit;
        
        if (newTotalCreditHour <= 20) {
            setSelectedCourses([...selectedCourses, course]);
            setTotalCreditHour(newTotalCreditHour);
            setTotalPrice(prevTotalPrice => prevTotalPrice + course.price);
        } else {
            alert("Maximum credit hour limit crossed. Maximum is 20 credit hours.");
        }
    };

    const isCourseSelected = (course) => {
        return selectedCourses.includes(course);
    };

    return (
        <div>
            <Header />
            <div className="content-container" style={{ display: "flex" }}>
                <div className="course-cards" style={{ flex: 2 }}>
                    <h1 className='text-2xl text-center px-5 font-bold pt-6 pb-6'> Course Registration</h1>
                    <div className="cards-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                        {dataload.map(course => (
                            <div key={course.id} className="card bg-base-100 shadow-xl" style={{ margin: "10px", padding: "20px" }}>
                                <figure>
                                    <img src={course.image} alt="course" />
                                </figure>
                                <div className="card-body" style={{ padding: "10px" }}>
                                    <h2 className="card-title">{course.course_name}</h2>
                                    <p>{course.details}</p>
                                    <p>Price : {course.price} Credit : {course.credit} </p>

                                    <div className="card-actions justify-center">
                                        {isCourseSelected(course) ? (
                                            <button
                                                className="btn btn-primary"
                                                style={{ backgroundColor: 'gray', margin: "5px", padding: "10px 20px", color: "white" }}
                                                disabled
                                            >
                                                Selected
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-primary"
                                                style={{ backgroundColor: '#2F80ED', margin: "5px", padding: "10px 20px", color: "white" }}
                                                onClick={() => handleSelectCourse(course)}
                                            >
                                                Select
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer" style={{ flex: 1 }}>
                    <div className="footer-content">
                        <h2 className="main-footer border-b-2" style={{ margin: "6px", padding: "5px 0" }}>Credit Hour Remaining : {20 - totalCreditHour} hr</h2>
                        <hr style={{ margin: "10px 0" }} />
                        <h2 className="footer-title border-b-3">Course Name</h2>
                        <ol>
                            {selectedCourses.map((course, index) => (
                                <li key={index}>{course.course_name}</li>
                            ))}
                        </ol>
                        <h2 className="footer-title border-b-2">Total Credit Hour: {totalCreditHour}</h2>
                    
                        <h2 className="footer-title">Total Price: ${totalPrice}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dataload;
