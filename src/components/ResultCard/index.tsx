import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}

export default ResultCard;