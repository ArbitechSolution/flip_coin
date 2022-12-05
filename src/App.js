import Page1 from "./Component/Page1"
import toast, { Toaster } from 'react-hot-toast';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
      <Page1 />
      <Toaster />
    </div>
  );
}

export default App;
