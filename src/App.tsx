import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Menu from './components/Menu';
import { Zap, Layers } from 'react-feather';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const RESOURCES = [
  {
    name: 'users',
    list: ListGuesser,
    icon: Zap,
  },
  {
    name: 'posts',
    list: ListGuesser,
    icon: Layers,
  },
];

const App = () => (
    <Admin menu={Menu} dataProvider={dataProvider}>
        {RESOURCES.map(({ name, list, icon })=> (
          <Resource key={name} {...{ name, list, icon}} />
        ))}
    </Admin>
);

export default App;
