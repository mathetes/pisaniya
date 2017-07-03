import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className="col-lg-9">
					<h2>Pisaniya - Bible Application</h2>
				</div>
                <div className="col-lg-3 sidebar">
                    <h2>Сайдбар</h2>

                </div>
			</div>
		);
	}
}

export default HomePage;
