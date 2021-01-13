import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Menu from './components/Menu';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin menu={Menu} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} icon={()=> <div>icon</div>} />
    </Admin>
);

export default App;
