
const Description = ({children, className}) => {
    return (
        <div className={`font-primary font-medium text-base text-description ${className}`}>
            {children}
        </div>
    );
};

export default Description;