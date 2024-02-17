import './TrainingPlanCard.scss';

const TrainingPlanCard = (props) => {
    return (
        <div className="training-plan-card">
            <span className="exercises-count"></span>
            <span className="title">Legs exercise</span>
            <span className="created-at">17.02.2024 20:00</span>
        </div>
    )
};

export default TrainingPlanCard;