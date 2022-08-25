import Vue from 'vue'
import {
  Autocomplete,
  Loading,
  Avatar,
  Image,
  Table,
  TableColumn,
  Button,
  Message,
  Cascader,
  Pagination,
  Select,
  Option,
  Link,
  Drawer,
  Input,
  Dialog,
  Form,
  Steps,
  Step,
  Timeline,
  TimelineItem,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Scrollbar,
  Tabs,
  TabPane,
  Upload,
  Tree,
  // Checkbox,
  InputNumber,
  Row,
  Col,
  Divider,
  MessageBox,
  Tag,
  Tooltip,
  Radio,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  RadioButton,
  RadioGroup,
  DatePicker,
  Switch,
  Card,
  Popover,
  Alert,
  TimeSelect,
  Badge
} from 'element-ui'

Vue.use(Autocomplete, Autocomplete)
Vue.use(Avatar, Avatar)
Vue.use(Image, Image)
Vue.use(Tag, Tag)
Vue.use(Tooltip, Tooltip)
Vue.use(DatePicker, DatePicker)
Vue.use(Upload, Upload)
Vue.use(InputNumber, InputNumber)
Vue.use(Tree, Tree)
Vue.use(Link, Link)
// Vue.use(TimePicker, TimePicker)
Vue.use(Row, Row)
Vue.use(Col, Col)
Vue.use(Steps, Steps)
Vue.use(Step, Step)
Vue.use(Timeline, Timeline)
Vue.use(TimelineItem, TimelineItem)
Vue.use(Checkbox, Checkbox)
Vue.use(CheckboxButton, CheckboxButton)
Vue.use(CheckboxGroup, CheckboxGroup)
Vue.use(Radio, Radio)
Vue.use(RadioButton, RadioButton)
Vue.use(RadioGroup, RadioGroup)
Vue.use(Divider, Divider)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button, Button)
Vue.use(Cascader, Cascader)
Vue.use(Button, Button)
Vue.use(Cascader, Cascader)
Vue.use(Pagination, Pagination)
Vue.use(Select, Select)
Vue.use(Option, Option)
Vue.use(Drawer, Drawer)
Vue.use(Input, Input)
Vue.use(Dialog, Dialog)
Vue.use(Form, Form)
Vue.use(FormItem, FormItem)
Vue.use(Scrollbar, Scrollbar)
Vue.use(Tabs, Tabs)
Vue.use(TabPane, TabPane)
Vue.use(Breadcrumb, Breadcrumb)
Vue.use(BreadcrumbItem, BreadcrumbItem)
Vue.use(Menu, Menu)
Vue.use(Submenu, Submenu)
Vue.use(MenuItem, MenuItem)
Vue.use(Dropdown, Dropdown)
Vue.use(DropdownMenu, DropdownMenu)
Vue.use(DropdownItem, DropdownItem)
Vue.use(Switch, Switch)
Vue.use(Card, Card)
Vue.use(Popover, Popover)
Vue.use(Alert, Alert)
Vue.use(Badge)
Vue.use(TimeSelect, TimeSelect)
Vue.use(Loading.directive)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert

