import PropTypes from "prop-types";

const Link = ({navItem}) => {
    const {name, path} = navItem;
    return (
        <li className="font-primary font-semibold text-base text-white hover:text-yellow-200 duration-200  border-b-1 border-white hover:border-yellow-200 lg:border-none"><a href={path}>{name}</a></li>
        
    )
};

export default Link;

Link.propTypes = {
    navItem: PropTypes.object
}