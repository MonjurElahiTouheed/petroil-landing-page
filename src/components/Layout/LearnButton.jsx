
const LearnButton = ({className}) => {
    return (
        <button className={`bg-primary text-white font-primary font-semibold text-base hover:bg-red-800 hover:text-white/90 duration-150 ${className}`}>
            Learn More
        </button>
    );
};

export default LearnButton;