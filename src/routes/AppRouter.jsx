import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn25 from "../assignments/react/assgn25/Assgn25";
import Assgn26 from "../assignments/react/assgn26/Assgn26";
import Assgn27 from "../assignments/react/assgn27/Assgn27";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />
       <Route path="/react/25/*" element={<Assgn25 />} />
        <Route path="/react/26/*" element={<Assgn26 />} />
         <Route path="/react/27/*" element={<Assgn27 />} />
    </Routes>
  );
};

 export default AppRoute;