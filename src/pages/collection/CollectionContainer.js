


import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { createStructuredSelector } from 'reselect'
import Collection from './Collection'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)


export default CollectionPageContainer

