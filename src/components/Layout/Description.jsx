
const Description = ({children, className}) => {
    return (
        <p className={`font-primary font-medium text-base text-description ${className}`}>
            {children}
        </p>
    );
};

export default Description;