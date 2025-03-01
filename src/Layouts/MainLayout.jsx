import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import SectionFooter from "../Components/SectionFooter";
import TopLine from "../Components/TopLine";


export default function MainLayout() {
  return (

    <div className="container">
      <div>
        <TopLine/>
        <Header/>
      </div>
      <main>
        <Outlet/> 

      </main>
      <SectionFooter/>
    </div>
    
  )
}