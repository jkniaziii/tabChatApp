import React from 'react';
import {TabBar} from '@ant-design/react-native';
import { UNSELECTED_TINT_COLOR,
    TINT_COLOR,
    BAR_TINT_COLOR,
    NAV_ITEMS, } from './constants';
import Icon from 'react-native-vector-icons/Ionicons';


 const Navbar = (props) => {
  return (
    <TabBar
      unselectedTintColor={UNSELECTED_TINT_COLOR}
      tintColor={TINT_COLOR}
      barTintColor={BAR_TINT_COLOR}>
      {NAV_ITEMS.map((navItem, index) => {
        return (
          <TabBar.Item
            key={index}
            title={navItem.title}
            icon={<Icon name={navItem.iconName} />}
            selected={props.selectedNav === navItem.nav}
            onPress={() => props.onClickNavItem(navItem.nav)}>
            {navItem.component()}
          </TabBar.Item>
        );
      })}
    </TabBar>
  );
};

export default Navbar;   

