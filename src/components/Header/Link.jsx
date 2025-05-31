import PropTypes from "prop-types";

const Link = ({navItem}) => {
    console.log(navItem)
    const {name, path} = navItem;
    console.log(name)
    console.log(path)
    return (
        <li className="font-primary font-semibold text-base text-white hover:text-yellow-200 duration-200  border-b-1 border-white md:border-none"><a href={path}>{name}</a></li>
        
    )
};

export default Link;

Link.propTypes = {
    navItem: PropTypes.object
}