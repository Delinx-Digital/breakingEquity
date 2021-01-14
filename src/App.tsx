import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Zap, Layers } from 'react-feather';
import { Menu } from './components';
import { DefaultLayout } from './layouts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const RESOURCES = [
  {
    name: 'users',
    list: ListGuesser,
    icon: Zap,
    options: {
      label: 'Paper Trading'
    },
  },
  {
    name: 'posts',
    list: ListGuesser,
    icon: Layers,
    options: {
      label: 'Live Trading'
    },
  },
];

const App = () => (
    <Admin menu={Menu} layout={DefaultLayout} dataProvider={dataProvider}>
        {RESOURCES.map(({ name, list, icon, options })=> (
          <Resource
            key={name}
            {...{ name, list, icon, options}}
          />
        ))}
    </Admin>
);

export default App;
