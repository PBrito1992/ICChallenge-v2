import { connect, ConnectedProps } from 'react-redux';
import "./styles.scss";
import PostFormContainer from './components/containers/post-form.container';
import AppHeader from './components/containers/app-header';
import PostListContainer from './components/containers/post-list.container';
import { Loading } from './components/views/loading.view';
import { Popup } from './components/views/popup.view';
import { bindActionCreators, Dispatch } from 'redux';
import { closePopup } from './store/actions/display-popup.action';
import { StoreType } from './models/redux-store.model';

export function App(props: PropsFromRedux) {

  const { 
    displayPostForm, 
    isLoading, 
    popupData,
    closePopup } = props;

  return (
    <div className='container-fluid p-0'>
      {
        popupData.toDisplay ?
          <Popup message={popupData.message} 
                 isSuccess={popupData.isSuccess} 
                 onClose={() => closePopup()}/> :
          <></>
      }

      <AppHeader />
      
      <div className='p-3'>
        {
          !displayPostForm ?
            <PostListContainer /> :
            <PostFormContainer />
        }
        {
          isLoading ?
            <Loading /> :
            <></>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (store: StoreType) => ({
  displayPostForm: store.postFormState.isFormDisplay,
  isLoading: store.loadingState.isLoading,
  popupData: store.popupState
});

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ closePopup }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);