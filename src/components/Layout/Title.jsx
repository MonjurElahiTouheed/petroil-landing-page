
const Title = ({children, className}) => {
    return (
        <div className={`font-primary font-bold ${className}`}>
            {children}
        </div>
    );
};

export default Title;