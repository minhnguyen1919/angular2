export const APP_CONSTANT = {
  api: {
    products: {
      route: '/products',
      params: {
        type: 'type',
        name: 'name',
        start: '_start',
        sort: '_sort',
        order: '_order',
        limit: '_limit'
      }
    },
    comments: {
      route: '/comments',
      params: {
        productId: 'productId'
      }
    }
  },
  product: {
    limitItemPerRow: 6
  }
};
