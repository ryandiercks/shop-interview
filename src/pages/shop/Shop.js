import React from "react";


import { Route } from "react-router-dom";



import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";



import CollectionsOverviewContainer from "../../components/collections-overview/collectionsOverviewContainer";
import CollectionPageContainer from "../collection/CollectionContainer";




class Shop extends React.Component {



  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }
  render() {
    const { match } = this.props

    return (
      <div className="shop-page">


        <Route exact path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />


      </div>
    )
  }

}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop);


/* render takes a function */
/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */
/* <Route path={`${match.path}/:collectionId`} component={Collection} /> */

/*   <Route path={`${match.path}/:collectionId`}
  render={props => <CollectionPageWithSpinner
    isLoading={!isCollectionsLoaded}
    {...props}
  />} /> */

/*USING FETCH */
/*fetch(`https://firestore.googleapis.com/v1/projects/shop-ecommerce-3e3b9/databases/(default)/documents/collections`)
  .then(response => response.json())
  .then(collections => console.log(collections)) */



/* PROMISE CHAIN */
/*
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ loading: false })
    }) */


    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot)
    //   await updateCollections(collectionMap)
    //   this.setState({ loading: false })
    // })