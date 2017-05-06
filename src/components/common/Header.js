import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
		return (
			<nav>
				<IndexLink to="/" activeClassName="active">Главная</IndexLink>
				{" | "}
				<Link to="/bible/00biblekey" activeClassName="active">Библия - ключевики</Link>
				{" | "}
				<Link to="/about" activeClassName="active">О приложении</Link>
				{loading && <LoadingDots interval={100} dots={20}/>}
			</nav>
		);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;