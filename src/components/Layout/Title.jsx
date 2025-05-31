
const Title = ({children, className}) => {
    return (
        <h2 className={`font-primary font-bold ${className}`}>
            {children}
        </h2>
    );
};

export default Title;