import React from "react";

import CollectionItem from "../../components/collection-item/CollectionItem";

import "./Collection.scss";

import { connect } from "react-redux";
import { selectCollectionToPage } from "../../redux/shop/shopSelector";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps is the props of the component
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionToPage(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
