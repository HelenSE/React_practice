import { Routes, Route } from "react-router-dom";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import { ROUTE_NAMES } from "./RouteNames";
import HomeContainer from "../Home/containers/HomeContainer";

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
            <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeContainer />} />
        </Routes>
    );
};