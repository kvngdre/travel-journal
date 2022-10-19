export default function Card({ props }) {
    return (
        <div className="container">
            <img src={props.imageUrl} alt={`Photo of ${props.title}`} />
            <div className="card-info">
                <span className="card-info-location">{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank">
                    View on Google Maps
                </a>
                <h3 className="card-info-title">{props.title}</h3>
                <span className="card-info-date">
                    {props.startDate} - {props.endDate}
                </span>
                <p className="card-info-desc">{props.description}</p>
            </div>
        </div>
    );
}
