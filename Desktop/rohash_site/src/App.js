import React,{ Component} from "react";
import "./App.css";
import ReactFileReader from "react-file-reader";


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}
export default function App() {
  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      alert(reader.result);
    };
    reader.readAsText(files[0]);
    let r= LoginPage;
  };
  return (
    <div className="App">
    <div class="vertical-menu">
  
   <a href="#" class="active">תפריט</a>
   <a href="#" class="text-center">טיסות</a>
   <a href="#"class="text-center">חלקים</a>
   <a href="#"class="text-center">צוותים</a>
   </div>
     
      <h5>העלאת קבצים:</h5>

      <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
        <button className="btn">Upload File</button>
      </ReactFileReader>
      <LoginPage r></LoginPage>
    </div>

  );
}