/* eslint-disable react/prop-types */
const Button = ({handleClick,children}) => {
    console.log(`rendering button - ${handleClick}`)
    return (
        <div>
            <button onClick={handleClick} >{children}</button>
        </div>
    );
};

export default Button;