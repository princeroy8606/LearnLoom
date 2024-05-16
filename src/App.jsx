import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <ApplicationRoutes />
          <ToastContainer />
        </AuthProvider>
      </Router>
    </Provider>
  );
};

export default App;
