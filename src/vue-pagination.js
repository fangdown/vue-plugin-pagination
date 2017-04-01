export default {
  name: 'el-pagination',
  template: `<div class="el-pagination">
    <span class="el-pagination__total">共 {{this.total}} 条</span><button type="button" @click="showPrevPage" :class="['btn-prev', { disabled: this.currentPage <= 1 }]">Prev</button><ul class="el-pager" @click="onPagerClick">
        <li class="number" :class="{ active: currentPage === 1 }">1</li>
        <li
          class="el-icon more btn-quickprev"
          :class="[quickprevIconClass]"
          v-if="showPrevMore"
          @mouseenter="quickprevIconClass = 'el-icon-d-arrow-left'"
          @mouseleave="quickprevIconClass = 'el-icon-more'"><<...
        </li>
        <li v-for="item in pagers" class="number" :class="{ active: currentPage === item }">{{item}}</li>
        <li
          class="el-icon more btn-quicknext"
          :class="[quicknextIconClass]"
          v-if="showNextMore"
          @mouseenter="quicknextIconClass = 'el-icon-d-arrow-right'"
          @mouseleave="quicknextIconClass = 'el-icon-more'">...>>
        </li>
        <li
          :class="{ active: currentPage === pageCount }"
          class="number"
          v-if="pageCount > 1">{{ pageCount }}</li>
    </ul><button type="button" @click="showNextPage" :class="['btn-next', { disabled: currentPage >= pageCount }]">Next</button>
    <span class="el-pagination__jump">前往<input class="el-pagination__editor" @change="showJumpPage" />页</span>
  </div>`,
  data () {
    return {
      showPrevMore: false,
      showNextMore: false,
      quicknextIconClass: 'el-icon-more',
      quickprevIconClass: 'el-icon-more'
    }
  },
  props: {
    // table的配置,具体见README.md
    text: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 0
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 50, 100, 1000]
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  watch: {
    showPrevMore (val) {
      if (!val) {
        this.quickprevIconClass = 'el-icon-more'
      }
    },
    showNextMore (val) {
      if (!val) {
        this.quicknextIconClass = 'el-icon-more'
      }
    }
  },
  computed: {
    pageCount () {
      if (typeof this.total === 'number') {
        return Math.ceil(this.total / this.pageSize)
      } else if (typeof this.pageCount === 'number') {
        return this.pageCount
      }
      return null
    },
    pagers () {
      const pagerCount = 7
      const currentPage = Number(this.currentPage)
      const pageCount = Number(this.pageCount)

      let showPrevMore = false
      let showNextMore = false

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 2) {
          showPrevMore = true
        }
        if (currentPage < pageCount - 2) {
          showNextMore = true
        }
      }
      const array = []
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i)
        }
      }

      this.showPrevMore = showPrevMore
      this.showNextMore = showNextMore

      return array
    }
  },
  mounted () {
  },
  methods: {
    onPagerClick: function (event) {
      const target = event.target
      if (target.tagName === 'UL') {
        return
      }
      let newPage = Number(target.textContent)
      const pageCount = this.internalPageCount
      const currentPage = this.currentPage
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
        }
        if (newPage > pageCount) {
          newPage = pageCount
        }
      }
      if (newPage !== currentPage) {
        this.$emit('current-change', newPage)
      }
    },
    showPrevPage: function () {
      if (this.currentPage === 1) {
        this.$emit('current-change', this.currentPage)
      } else {
        this.$emit('current-change', this.currentPage - 1)
      }
    },
    showNextPage: function () {
      if (this.currentPage >= this.internalPageCount) {
        this.$emit('current-change', this.internalPageCount)
      } else {
        this.$emit('current-change', this.currentPage + 1)
      }
    },
    showJumpPage: function (event) {
      const target = event.target
      let newPage = Number(target.value)
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
          target.value = 1
        }
        if (newPage > this.pageCount) {
          newPage = this.pageCount
          target.value = this.pageCount
        }
      } else {
        newPage = 1
        target.value = 1
      }
      this.$emit('current-change', newPage)
    }
  }
}
