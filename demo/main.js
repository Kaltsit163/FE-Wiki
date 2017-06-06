import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import Jo from '../src/index';
// import Jo from 'jo-ui';
import HL from 'highlight.js';
import './assets/highlight.css';
import './assets/animation.css';


import Install from './components/Install';
import Color from './components/Color';
import Font from './components/Font';
import Button from './components/Button';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Selectbox from './components/Selectbox';
import Switch from './components/Switch';
import Page from './components/Page';
import Breadcrumb from './components/Breadcrumb';
import Progressbar from './components/Progressbar';
import Input from './components/Input';
import Dialog from './components/Dialog';
import Loading from './components/Loading';
import NumberCount from './components/NumberCount';
import Search from './components/Search';
import Select from './components/Select';
import Topmsg from './components/Topmsg';
import Tree from './components/Tree';
import Datepicker from './components/Datepicker';
import Timepicker from './components/Timepicker';
import Pop from './components/Pop';
import Author from './components/Author';


Vue.config.productionTip = false;

window.HlInit = function() {
    setTimeout(() => {
        document.querySelectorAll('pre code').forEach(block => {
            HL.highlightBlock(block)
        })
    }, 0)
};

Vue.use(Router);
Vue.use(Jo);

window.routes = [{
        path: '/',
        name: 'Install',
        component: Install,
        value: '引入'
    },
    {
        path: '/color',
        name: 'Color',
        component: Color,
        value: '色彩'
    },
    {
        path: '/font',
        name: 'Font',
        component: Font,
        value: '字体'
    },
    {
        path: '/button',
        name: 'Button',
        component: Button,
        value: '按钮'
    },
    {
        path: '/radio',
        name: 'Radio',
        component: Radio,
        value: '单选框'
    },
    {
        path: '/checkbox',
        name: 'Checkbox',
        component: Checkbox,
        value: '复选框'
    },
    {
        path: '/selectbox',
        name: 'Selectbox',
        component: Selectbox,
        value: '选框控件'
    },
    {
        path: '/switch',
        name: 'Switch',
        component: Switch,
        value: '开关'
    },
    {
        path: '/page',
        name: 'Page',
        component: Page,
        value: '分页'
    },
    {
        path: '/breadcrumb',
        name: 'Breadcrumb',
        component: Breadcrumb,
        value: '面包屑'
    },
    {
        path: '/progressbar',
        name: 'Progressbar',
        component: Progressbar,
        value: '进度条'
    },
    {
        path: '/input',
        name: 'Input',
        component: Input,
        value: '输入框'
    },
    {
        path: '/dialog',
        name: 'Dialog',
        component: Dialog,
        value: '弹窗'
    },
    {
        path: '/loading',
        name: 'Loading',
        component: Loading,
        value: 'Loading'
    },
    {
        path: '/numbercount',
        name: 'NumberCount',
        component: NumberCount,
        value: '计数框'
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        value: '搜索框'
    },
    {
        path: '/select',
        name: 'Select',
        component: Select,
        value: '下拉选择框'
    },
    {
        path: '/topmsg',
        name: 'Topmsg',
        component: Topmsg,
        value: '消息提示'
    },
    {
        path: '/tree',
        name: 'Tree',
        component: Tree,
        value: '树形控件'
    },
    {
        path: '/datepicker',
        name: 'Datepicker',
        component: Datepicker,
        value: '日期选择控件'
    },
    {
        path: '/timepicker',
        name: 'Timepicker',
        component: Timepicker,
        value: '时间选择控件'
    },
    {
        path: '/pop',
        name: 'Pop',
        component: Pop,
        value: 'Pop弹出层'
    },
    {
        path: '/author',
        name: 'Author',
        component: Author,
        value: '有关作者'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})