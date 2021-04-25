import React from 'react'
import Personal from './components/personal';
import Secondary from './components/school';
import University from './components/university';
import Job from './components/job';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pi: {
        firstName: '',
        lastName: '',
        email: '', 
        phone: '',
        address: ''
      },
      
    }
  }
  render() {
  return (
    <div className="App container mx-auto py-4 bg-gray-50">
      <div className="mt-8 max-w-md mx-auto">
        <Personal />
        <Secondary />
        <University />
        <Job />
      </div>
    </div>
  );
  }
}


export default App;
