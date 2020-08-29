import loadable from '@loadable/component';

const errorLoading = err => console.log('Home page loading failed!', err);

const DetailProductComponent = loadable(() =>
    import(/* webpackChunkName: "detail-product" */ './components').catch(errorLoading),
);

export default DetailProductComponent;
