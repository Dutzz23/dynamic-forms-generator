import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import CreateFormScreen from "./screens/CreateFormScreen";
import ApiConfig from "./connection/ApiConfig";
import HomeScreen from "./screens/HomeScreen";
import {createContext, useEffect, useState} from "react";
import MyFormsScreen from "./screens/MyFormsScreen";
import LoginScreen from "./screens/LoginScreen";
import ViewFormScreen from "./screens/ViewFormScreen";
import CompleteFormScreen from "./screens/CompleteFormScreen";
import FormStatsScreen from "./screens/FormStatsScreen";
import FormResponseScreen from "./screens/FormResponseScreen";

export const AuthContext = createContext(false);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setIsAuthenticated(hasToken());
    }, []);


    const hasToken = () => {
        return !!localStorage.getItem('token');
    }

    return (
        <div className="App">
            <AuthContext.Provider value={!!isAuthenticated}>
                <BrowserRouter basename={ApiConfig.baseUrl}>
                    <Routes>
                        <Route path="*" element={<Navigate to="/"/>}/>
                        <Route path="/" element={<HomeScreen/>}/>

                        />
                        <Route path="*" element={<Navigate to="/login"/>}/>
                        {isAuthenticated ?
                            <>
                                <Route path="/form/complete/:formId" element={<CompleteFormScreen/>}/>
                                <Route path="/form/create" element={<CreateFormScreen/>}/>
                                <Route path="/form/view/:formId" element={<ViewFormScreen/>}/>
                                <Route path="/form/stats/:formId" element={<FormStatsScreen/>}/>
                                <Route path="/form/response/:responseId" element={<FormResponseScreen/>}/>
                                <Route path="/my-forms" element={<MyFormsScreen/>}/>
                            </>
                            :
                            <>
                                <Route path="/login" element={<LoginScreen isAuthenticated={isAuthenticated}
                                                                           setIsAuthenticated={setIsAuthenticated}
                                />}
                                />
                                <Route path="/register" element={<RegisterScreen isAuthenticated={isAuthenticated}
                                                                                 setIsAuthenticated={setIsAuthenticated}
                                />}
                                />
                            </>
                        }
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
