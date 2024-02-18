import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from '../../layouts/Navbar';
import './CreateTrainingPlan.scss';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const getExercises = async () => {
    const res = await fetch("https://api.api-ninjas.com/v1/exercises", {
        headers: {
            "X-Api-key": "KK0vFLHZhOyrXAGPZ9lYeA==iP2R5EG9jgSAgZvE"
        }
    })
}

const CreateTrainingPlan = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <div className="training-plans">
            <Navbar />
            <div className="container">
                <div className="new-training-plan ">
                    <div className="topbar">
                        <Link to="/training-plans" className="back-button"><FaArrowLeftLong />back to my training plans</Link>
                        <button type="button" className="save-button">save plan</button>
                    </div>
                    <label htmlFor="title" className="title-input">
                        <span>Title</span>
                        <input type="text" />
                    </label>
                    <div className="exercises-in-plan">
                        {(exercises.length > 0 ? exercises : 
                        (<h1>No Exercises</h1>))}
                    </div>
                </div>
                <div className="exercises section">

                </div>
            </div>
        </div>
    )
}

export default CreateTrainingPlan;