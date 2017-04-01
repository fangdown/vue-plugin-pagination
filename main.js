import Pagination from './src/vue-pagination'

const install = function (Vue) {
    if (install.installed) return;
    Vue.component(Pagination.name, Pagination)
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};


export default {
    install,
}
