import './TrainingPlanButtons.scss';
import {Link} from 'react-router-dom';

const ViewTrainingPlanButton = (props) => {
    return (
        <button key={props?.text} className="training-plan-button">{props?.icon} {props?.text}</button>
    );
};

const CreateTrainingPlanButton = (props) => {
    return (
        <Link key={props?.text} to="/create-training-plan" className="training-plan-button">{props?.icon} {props?.text}</Link>
    );
}

export { ViewTrainingPlanButton, CreateTrainingPlanButton};