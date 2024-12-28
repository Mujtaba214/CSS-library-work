import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import { Data } from './Data';
import { FaHome } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonAppBar from './Components/ResponsiveAppBar';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import RecipeReviewCard from './Components/RecipeReviewCard';
import SimpleDialogDemo from './Components/SimpleDialogDemo';
import TemporaryDrawer from './Components/TemporaryDrawer';


function App() {
  let ans = Data.map((e, i) => (
    <Cards key={i} img={e.imgSrc} title={e.title} desc={e.desc} />
  ))
  let output = Data && Data.length > 0 ?
  ans : <h1>not found</h1>;

  return (
    <>
    {/* <Button /> */}
      {/* <Header />
      <FaHome style={{height:"50px",width:"30px"}}/>
      <div className='d-flex flex-wrap '>
        
        {output}
      </div> */}
        <ResponsiveAppBar />
        <RecipeReviewCard />
        <SimpleDialogDemo />
        <TemporaryDrawer />
    </>
  )
}

export default App
