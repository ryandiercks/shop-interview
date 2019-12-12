import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector'
import { compose } from 'redux'

import collectionsOverview from './collectionsOverview'
import WithSpinner from '../with-spinner/WithSpinner'


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview)

export default CollectionsOverviewContainer