// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  // 自定义右侧区域的布局
   Layout: MyLayout
}
