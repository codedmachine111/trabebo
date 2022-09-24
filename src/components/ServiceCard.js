import './ServiceCard.css'

export const ServiceCard = (props) => {
  return (
    <>
      <div className="servcard module">
        <div className="img">
          <i className={props.icon}></i>
        </div>
        <div className="serv-name">{props.header}</div>
        <div className="txt">
          <p>
            {props.info}
          </p>
        </div>
      </div>
    </>
  );
};
