import './CreateTrainingPlanButton.scss';
import { IoAddOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const CreateTrainingPlanButton = (props) => {
    return (
        <button {...props} type="button" className="create-training-plan-button"><span><IoAddOutline /></span></button>
    )
}

export default CreateTrainingPlanButton;