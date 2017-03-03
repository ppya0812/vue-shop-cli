import App from '../App'
const home = r => require.ensure([], () => r(require('../page/wm/home')), 'home')
const shop = r => require.ensure([], () => r(require('../page/wmshop/shop')), 'shop')
const my = r => require.ensure([], () => r(require('../page/wmmy/my')), 'my')

export default [{
    path: '/',
    component: App,  // 顶层路由，对应index.html
    children: [
        { path: '/home', component: home },         // 首页
        { path: '/shop', component: shop },        // 购物
        { path: '/my', component: my },            // 购物
        { path: '*', component: home }            // 地址为空时跳转home页面
        // { path: '/shop', component: shop ,
        //     children: [
        //         {
        //             path: 'rating',
        //             component: rating,
        //         }
        //     ]
        // },
    ]
}]
