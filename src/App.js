import Navigation from"./Navigation/Nav";
import Products from"./Products/Products";
import Recommended from"./Recommended/Recommended";
import Home from"./Home/Home";
// import Sidebar from"./Sidebar/category";

function App() {
  return(
    <>
      <Navigation/>
      {/* <Home/> */}
      <Products/>
      <Recommended/>
      {/* <Sidebar/>  */}
    </>
  );
}

export default App;
