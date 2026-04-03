
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./components/layout/MainLayout/MainLayout.tsx";
import {TeamsPage} from "./pages/TeamsPage/TeamsPage.tsx";
import {LeaguesPage} from "./pages/LeaguesPage/LeaguesPage.tsx";
import {CalendarPage} from "./pages/CalendarPage/CalendarPage.tsx";


function App() {

  return (
      <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element={<Navigate to='/leagues' replace/> }/>
              <Route path="leagues" element={<LeaguesPage />} />
              <Route path="teams" element={<TeamsPage />} />
              <Route path="calendar/:type/:id" element={<CalendarPage/>} />
          </Route>
      </Routes>
  )
}

export default App
