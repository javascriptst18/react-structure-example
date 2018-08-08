import React from 'react';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';
import Content from './Content';
import AppContainer from './AppContainer';
import '../styles/App.css';

/*  We can send along components as props if we like.
 * Check Main component for how the components are used */
function App() {
  return (
    <AppContainer>
      <Header title="Reactive Components!" />
      <Main top={ <Navbar /> }
            bottom={ <Content /> } />   
    </AppContainer>
  );
}

// We can also have this structure. But if we use this approach we have to 
// use 'this.props.children' in main component so 

// export default function App() {
//   return (
//     <AppContainer>
//       <Header />
//       <Main>
//          <Content />
//          <Navbar />
//       </Main>
//     </AppContainer>
//   );
// }

export default App;