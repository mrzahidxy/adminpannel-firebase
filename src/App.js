import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { userInputs, productInputs } from './fromSource';
import { UserColumns, UserRows, ProductsColumns, ProductsRows } from "./dataTableSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<RequireAuth><List columns={UserColumns} rows={UserRows} /></RequireAuth>} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<RequireAuth><New inputs={userInputs} title='Add New User' /></RequireAuth>} />
            </Route>
            <Route path='products'>
              <Route index element={<RequireAuth><List columns={ProductsColumns} rows={ProductsRows} /></RequireAuth>} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<RequireAuth><New inputs={productInputs} title='Add New Products' /></RequireAuth>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
