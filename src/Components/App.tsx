import './App.css';
import { Fragment } from "react";


function Link(props: any) {
  return (
    <p>
      <a href={props.url}>{props.children}</a>
    </p>
  );

}

// class Link extends Component {
//   render() {
//     return (
//       <p>
//         <a href={this.props.url}>{this.props.children}</a>
//       </p>
//     );
//   }
// }

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return <Fragment>
    <Link url="//react.dev">
      <strong>React</strong>
    </Link>
    <Link url="//vuejs.org">Vue</Link>
    <Link url="//angular.io">Angular</Link>
  </Fragment>

}

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Link url="//react.dev">
//           <strong>React</strong>
//         </Link>
//         <Link url="//vuejs.org">Vue</Link>
//         <Link url="//angular.io">Angular</Link>
//       </Fragment>
//     );
//   }
// }

export default App;

