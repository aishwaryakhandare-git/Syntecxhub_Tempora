import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"
import Overview from "./pages/Overview"
import Forecast from "./pages/Forecast"
import Atmosphere from "./pages/Atmosphere"
import Insights from "./pages/Insights"
import { getBrowserPlace, getWeather } from "./services/weatherService"
import "./styles/overview.css"

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBrowserPlace()
      .then((place) => getWeather(place))
      .then((data) => setWeather(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <div className="appShell">
        <Sidebar weather={weather} loading={loading} />
        <main className="mainPanel">
          <Routes>
            <Route path="/" element={<Overview weather={weather} loading={loading} />} />
            <Route path="/forecast" element={<Forecast weather={weather} />} />
            <Route path="/atmosphere" element={<Atmosphere weather={weather} />} />
            <Route path="/insights" element={<Insights weather={weather} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
