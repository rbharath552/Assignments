import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import ReactAssignments from "../pages/ReactAssignments";
import Assgn25 from "../assignments/react/assgn25/Assgn25";
import Assgn26 from "../assignments/react/assgn26/Assgn26";
import Assgn27 from "../assignments/react/assgn27/Assgn27";
import Assgn28 from "../assignments/react/assgn28/Assgn28";
import Assgn29 from "../assignments/react/assgn29/Assgn29";
import Assgn30 from "../assignments/react/assgn30/Assgn30";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/react" element={<ReactAssignments />} />
       <Route path="/react/25/*" element={<Assgn25 />} />
        <Route path="/react/26/*" element={<Assgn26 />} />
         <Route path="/react/27/*" element={<Assgn27 />} />
          <Route path="/react/28/*" element={<Assgn28 />} />
            <Route path="/react/29/*" element={<Assgn29/>} />
            <Route path="/react/30/*" element={<Assgn30/>} />
    </Routes>
  );
};

 export default AppRoute;