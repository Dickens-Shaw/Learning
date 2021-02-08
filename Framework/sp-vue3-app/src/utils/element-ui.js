import {
  Tabs,
  TabPane,
  Steps,
  Step,
  Table,
  TableColumn,
  Container,
  MenuItem,
  DropdownMenu,
  Dropdown,
  Main,
  Menu,
  Submenu,
  DropdownItem,
  Header,
  Button,
  CheckboxGroup,
  CheckboxButton,
  Message,
} from '@fe/element-ui';

export default {
  install(V) {
    V.use(Tabs);
    V.use(TabPane);
    V.use(Steps);
    V.use(Step);
    V.use(Table);
    V.use(TableColumn);
    V.use(Container);
    V.use(MenuItem);
    V.use(DropdownMenu);
    V.use(Dropdown);
    V.use(Main);
    V.use(Menu);
    V.use(Submenu);
    V.use(DropdownItem);
    V.use(Header);
    V.use(Button);
    V.use(CheckboxGroup);
    V.use(CheckboxButton);
    V.prototype.$message = Message;
  },
};
