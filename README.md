
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

