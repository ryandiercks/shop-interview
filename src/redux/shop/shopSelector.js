import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const shop = state => state.shop;
export const selectCollections = createSelector(
  [shop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],

  // Object.keys will get all the keys of the object,
  // and put them together as an array
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionToPage = collectionUrlParams =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParams] : null)
    // collections =>
    //   collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams]
    //   )
  );



export const selectIsCollectionFetching = createSelector(
  [shop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [shop],
  shop => !!shop.collections
)