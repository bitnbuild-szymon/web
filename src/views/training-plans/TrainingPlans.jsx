import { TfiAgenda } from "react-icons/tfi";
import { CreateTrainingPlanButton, ViewTrainingPlanButton } from '../../components/training-plans/TrainingPlanButtons';
import Navbar from '../../layouts/Navbar';
import './TrainingPlans.scss';
import { useState } from 'react';

const Exercises = () => {
    const [showCreateTrainingPlanView, setShowCreateTrainingPlanView] = useState(false);
    
    return (
        <div className="training-plans">
            <Navbar />
            <div className="container">
                <div className="my-training-plans section">
                    <h1>my training plans</h1>
                    <div className="my-training-plans-list">
                        <CreateTrainingPlanButton text="new training plan" icon={<TfiAgenda />} />
                        <ViewTrainingPlanButton text="test" icon={<TfiAgenda/>} />
                    </div>
                </div>
                <div className="training-plan-preview section">
                    
                </div>
            </div>
        </div>
    )
}

export default Exercises;