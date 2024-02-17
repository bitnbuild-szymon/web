import TrainingPlanCard from '../../components/training-plans/TrainingPlanCard';
import Navbar from '../../layouts/Navbar';
import CreateTrainingPlanButton from '../../components/training-plans/CreateTrainingPlanButton';
import './TrainingPlans.scss';
import { useState } from 'react';

const Exercises = () => {
    const test = [];

    for(let i = 0; i < 10; i++) {
        test.push(<TrainingPlanCard key={i}></TrainingPlanCard>);
    } 

    const [showCreateTrainingPlanView, setShowCreateTrainingPlanView] = useState(false);
    
    return (
        <div className="training-plans">
            <Navbar />
            {(showCreateTrainingPlanView ? (
                <div className="create-training-plan-view">
                    <h1>Create training plan</h1>
                </div>
            ) : (
                <div className="container">
                    {test}
                    <CreateTrainingPlanButton onClick={() => {setShowCreateTrainingPlanView(true)}}/>
                </div>
            ))}
        </div>
    )
}

export default Exercises;