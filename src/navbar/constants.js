import Home from "../screens/Home";
import List from "../screens/List";
import Friends from "../screens/Friends ";
import Profile from "../screens/Profile ";
import DashBoard from "../dashboard/DashBoard";

export const UNSELECTED_TINT_COLOR = 'black';
export const TINT_COLOR = '#33A3F4';
export const BAR_TINT_COLOR = '#f5f5f5';
export const NAV_ITEMS = [
  {
    title: 'DashBoard',
    iconName: 'grid',
    nav: 'dashBoard',
    component: DashBoard,
  },
  {
    title: 'Bezier',
    iconName: 'bar-chart',
    nav: 'home',
    component: Home,
  },
  {
    title: 'StackedBar',
    iconName: 'stats-chart',
    nav: 'list',
    component: List, 
  },
  {
    title: 'Pie chart',
    iconName: 'pie-chart',
    nav: 'friends',
    component: Friends,
  },
  {
    title: 'Progress Ring',
    iconName: 'speedometer',
    nav: 'profile',
    component: Profile,
  },
 
];