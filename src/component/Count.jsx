
// eslint-disable-next-line react/prop-types
const Count = ({text,count}) => {
    console.log(`Rendering ${text} `);
    return (
        <div>
            {text} - {count}
        </div>
    );
};

export default Count;