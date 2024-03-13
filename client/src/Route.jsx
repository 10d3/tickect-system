import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Account from "./pages/Account";
import EventsDetails from "./components/eventDetail/EventsDetails";

function Routerage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="events" element={<Event />} />
      <Route path="events/:id" element={<EventsDetails />} />
      <Route path="account" element={<Account/>}/>
    </Routes>
  );
}

export default Routerage;
