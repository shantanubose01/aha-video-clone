import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Movies from "../pages/Movies/Movies";
import Shows from "../pages/Shows/Shows";
import Player from "../pages/Player/Player";
import NotFound from "../pages/NotFound";
import SubscriptionPlans from "../components/SubscriptionPlans";
import { Payment } from "../components/Payment";
import Login from "../pages/Login";
import IndividualMovie from "../components/Individual-Movie/IndividualMovie";
import IndividualShow from "../components/Individual-Show/IndividualShow";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/show" element={<Shows />}></Route>
      {/* <Route path="/myaha" element={<Myaha/>}></Route> */}
      <Route path="/search" element={<Search />}></Route>
      {/* <Route path="/movies/:id" element={<MoviePage/>}></Route> */}
      {/* <Route path="/shows/:id" element={<ShowPage/>}></Route> */}
      <Route path="/player" element={<PrivateRoute><Player/></PrivateRoute>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/subscribe" element={<PrivateRoute><SubscriptionPlans/></PrivateRoute>} />
      <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/moviepage" element={<IndividualMovie/>} />
      <Route path="/showpage" element={<IndividualShow/>}/>
    </Routes>
  );
};

export default AllRoutes;
