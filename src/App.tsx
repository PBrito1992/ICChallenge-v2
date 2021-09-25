import { connect, ConnectedProps } from 'react-redux';
import "./styles.scss";
import PostCreateContainer from './components/containers/post-create.container';
import AppHeader from './components/containers/app-header';
import PostListContainer from './components/containers/post-list.container';

export function App(props: PropsFromRedux) {

  return (
    <div className='container-fluid'>
      <AppHeader />
      {
        !props.displayPostForm ?
          <PostListContainer /> :
          <PostCreateContainer />
      }
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  displayPostForm: store.postFormState.toDisplay
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(App);