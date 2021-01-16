import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import { Zap, Layers } from 'react-feather';
import { Menu } from './components';
import { DefaultLayout } from './layouts';
import { LiveTrading, PaperTrading } from './containers';
import liveTrading from './mockData/liveTrading.json';
import paperTrading from './mockData/paperTrading.json';

const dataProvider = fakeDataProvider({
    'paper-trading': paperTrading,
    'live-trading': liveTrading,
});

const RESOURCES = [
  {
    name: 'paper-trading',
    list: PaperTrading,
    icon: Zap,
    options: {
      label: 'Paper Trading'
    },
  },
  {
    name: 'live-trading',
    list: LiveTrading,
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
