import logo from './logo.svg';
import './App.css';
import LoginScreen from "./screens/LoginScreen";
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import FormScreen from "./screens/FormScreen";
import ApiConfig from "./connection/ApiConfig";
import HomeScreen from "./screens/HomeScreen";
import AuthConfig from "./connection/AuthConfig";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={ApiConfig.baseUrl}>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    {AuthConfig.isAuthenticated ?
                        <>
                            <Route path="/createForm" element={<FormScreen/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>

                        </>
                        :
                        <>
                            <Route path="/login" element={<LoginScreen/>}/>
                            <Route path="/register" element={<RegisterScreen/>}/>
                            <Route path="*" element={<Navigate to="/login"/>}/>

                        </>
                    }
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
