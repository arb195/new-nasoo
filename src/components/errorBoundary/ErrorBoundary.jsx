import { Component } from 'react';
import { withSnackbar  } from 'notistack';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {

    // this.props.enqueueSnackbar('خطایی رخ داد',{ variant: 'error' })
    console.error({ error, errorInfo });
  }

  loadForce(){
    try{
      return this.props.children;
    }catch(e){
      return this.props.children;
    }
  }

  refreshPage() {
    location.reload();
  }

  render() {
    return <div>test asdkhaksdhkashd</div>
  }

}

// ErrorBoundary.contextType = AppContext;

export default ErrorBoundary;
