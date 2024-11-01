import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header, Alerts, IsOffline, ErrBoundary } from "./components";
import { Tooltip } from "react-tooltip";
import Me from "./pages/auth/Me";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ImportantUserAlert from "./pages/auth/ImportantUserAlert";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import LoginWithEmail from "./pages/auth/LoginWithEmail";
import NavbarMobile from "./components/navigation/NavbarMobile";
import LibraryPage from "./pages/LibraryPage";
import BrowsePage from "./pages/BrowsePage";
import Navbar from "./components/navigation/Navbar";
import SearchGamesModal from "./pages/SearchGamesModal";
import Register from "./pages/auth/Register";

function App() {
  const { user } = useSelector(state => state.auth);

  return (
    <Router>
      <Alerts />
      <Me/>
        <div className="flex flex-col" data-theme="light">
        {/* <div className="flex flex-col h-min-100-pct" data-theme={theme === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme}> */}
        <Tooltip id="tooltip-default" className="z-999 w-max-200-px d-sm-none" place="bottom" closeOnEsc closeOnScroll globalCloseEvents="click" positionStrategy="fixed" opacity="0.95" noArrow />
        <ErrBoundary>
          <ImportantUserAlert/>
        </ErrBoundary>
        {!user ?
          <ErrBoundary>
            <Header/>
          </ErrBoundary>
        : null}
        {window.innerWidth <= 800 ?
          <ErrBoundary>
            <NavbarMobile/>
          </ErrBoundary>
        : null}
        <IsOffline />
        <ErrBoundary>
          <SearchGamesModal/>
        </ErrBoundary>
        <div className={user ? "content" : ""}>
          {user ?
            <ErrBoundary>
              <Navbar/>
            </ErrBoundary>
          : null}
          <div className="content-body">
            <div className="flex-grow-1 h-min-100">
                <Routes>
                  <Route path="/" element={<ErrBoundary><HomePage /></ErrBoundary>} />
                  <Route path="/discover" element={<ErrBoundary><BrowsePage /></ErrBoundary>} />
                  <Route path="/browse" element={<ErrBoundary><BrowsePage /></ErrBoundary>} />
                  <Route path="/library" element={<ErrBoundary><LibraryPage /></ErrBoundary>} />
                  {user ?
                    <Route path="/account/:tab" element={<ErrBoundary><Settings/></ErrBoundary>} />
                  :
                    <>
                      <Route path="/register" element={<ErrBoundary><Auth><Register /></Auth></ErrBoundary>} />
                      <Route path="/login" element={<ErrBoundary><Auth><Login /></Auth></ErrBoundary>} />
                    </>
                  }
                  <Route path="/login-with-email" element={<Auth><LoginWithEmail /></Auth>} />
                  <Route path="/terms" element={<ErrBoundary><Terms /></ErrBoundary>} />
                  <Route path="/privacy" element={<ErrBoundary><Privacy /></ErrBoundary>} />
                  {/* <Route path="*" element={<LoginNotFound />} /> */}
                </Routes>
                </div>
                <Footer/>
              </div>
            </div>
          </div>
        <Tooltip id="tooltip-click" className="z-999 w-max-200-px" place="bottom" closeOnEsc openOnClick closeOnScroll positionStrategy="fixed" opacity="0.95" noArrow />
    </Router>
  );
}

export default App;