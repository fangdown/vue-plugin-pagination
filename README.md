
## Description

vue2.0 分页，功能包含：显示总条数 上一页、下一页、页码、跳转

## Installation

```javascript
 npm install vue-plugin-pagintion
```

## Usage

```javascript
import pagintion from 'vue-plugin-pagintion'
Vue.use(pagintion)
```

## code
```html 
html中引入
<el-pagination  :current-page="table.currentPage" :total="table.total" style="float:right" :page-size="table.pageSize" @current-change="handleCurrentChange" >
    </el-pagination>
```
```javascript
export default {
   name: 'app',
   data () {
     return {
       table: {
         total: 100,  //总数
         pageSize: 10, //每页尺寸
         currentPage: 1 //起始页
       }
     }
   },
   methods: {
     // 回调函数 点击分页后执行的函数
     handleCurrentChange: function (page) {
       this.table.currentPage = page
       // 业务代码 可执行axios
     }
   }
 }
```
```css
在app.vue中加入样式文件
.el-pagination{
    white-space: nowrap;
    padding: 2px 5px;
    color: #475669;
}
.el-pagination__total{
    display: inline-block;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    margin-right: 10px;
}
.el-pager{
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
}
.el-pager li.active {
    border-color: #42b983;
    background-color: #42b983;
    color: #fff;
    cursor: default;
}
.el-pager li {
    padding: 0 4px;
    border: 1px solid #D3DCE6;
    border-right: 0;
    background: #fff;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    margin: 0;
}
.el-pagination button.disabled {
    color: #e4e4e4;
    background-color: #fff;
    cursor: not-allowed;
}
.el-pagination .btn-next {
    border-radius: 0 2px 2px 0;
    border-left: 0;
}
.el-pagination .btn-prev, .el-pagination .btn-next {
    background: center center no-repeat;
    background-size: 16px;
    background-color: #fff;
    border: 1px solid #D3DCE6;
    cursor: pointer;
    margin: 0;
    color: #99a9bf;
}
.el-pagination .btn-prev {
    border-radius: 2px 0 0 2px;
    border-right: 0;
}

.el-pagination button {
    border: none;
    padding: 0 6px;
    background: transparent;
}
.el-pagination span, .el-pagination button {
    display: inline-block;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
}
.el-pagination__jump{
    display: inline-block;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    margin-left: 10px;
}
.el-pagination__editor{
    border: 1px solid #D3DCE6;
    border-radius: 2px;
    line-height: 18px;
    padding: 4px 2px;
    width: 30px;
    text-align: center;
    margin: 0 6px;
    box-sizing: border-box;
    transition: border .3s;
    width: 30px;
}
```

