import React from 'react';
import Griddle from 'griddle-react';

var data = [
    { one: 'one', two: 'two', three: 'three' },
    { one: 'uno', two: 'dos', three: 'tres' },
    { one: 'ichi', two: 'ni', three: 'san' }
];

class BiblekeyPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Ключевые параметры книг Библии</h1>
                <Griddle data={data} />
            </div>
        );
    }
}

export default BiblekeyPage;