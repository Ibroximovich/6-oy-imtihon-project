import { useCookies } from "react-cookie"
import { DashboartRoats, LoginRoats } from "./routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchInput } from "./context/context";


function App() {
  const [cookie] = useCookies(["login"]);

  return (
    <>
     <SearchInput>
      <ToastContainer position="top-center" autoClose={3000} />
      {cookie.login ? <DashboartRoats /> : <LoginRoats />}
     </SearchInput>
    
    </>
  );
}

export default App;




