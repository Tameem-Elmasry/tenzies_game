function Die(props) {
    let isHeld = props.status ? "hold" : "";
    return (
        <button onClick={props.handleClick} className={isHeld}>
            {props.value}
        </button>
    );
}

export default Die;
