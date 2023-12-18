import React from 'react';
import StatsChart from "../components/stats/StatsChart";
import ScreenTemplate from "../components/ScreenTemplate";
import UserResponsesList from "../components/stats/UserResponsesList";

function FormStatsScreen() {

    return (
        <ScreenTemplate>
            <div className="mt-5 d-flex justify-content-center">
                <div className="mt-5">
                    <div className="pe-5">
                        <StatsChart/>
                    </div>
                    <div className="px-5">
                    <UserResponsesList/>
                    </div>
                </div>
            </div>
        </ScreenTemplate>
    );
}

export default FormStatsScreen;