import { connect, ConnectedProps } from 'react-redux';
import "./styles.scss";
import PostFormContainer from './components/containers/post-form.container';
import AppHeader from './components/containers/app-header';
import PostListContainer from './components/containers/post-list.container';
import { Loading } from './components/views/loading.view';
import { Popup } from './components/views/popup.view';
import { bindActionCreators, Dispatch } from 'redux';
import { displayPopup } from './store/actions/display-popup.action';

export function App(props: PropsFromRedux) {

  const { 
    displayPostForm, 
    isLoading, 
    popupData,
    displayPopup } = props;

  return (
    <div className='container-fluid'>
      {
        popupData.toDisplay ?
          <Popup message={popupData.message} 
                 isSuccess={popupData.isSuccess} 
                 onClose={() => displayPopup(false)}/> :
          <></>
      }
      <AppHeader />
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
  );
}

const mapStateToProps = (store: any) => ({
  displayPostForm: store.postFormState.toDisplay,
  isLoading: store.loadingState.isLoading,
  popupData: store.popupState
});

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ displayPopup }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);