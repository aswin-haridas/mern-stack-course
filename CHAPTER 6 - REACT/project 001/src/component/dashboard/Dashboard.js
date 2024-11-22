import { Outlet } from "react-router-dom";

export function Dashboard() {
    return (
        <div>
            <Outlet />
            <h1>This is the dashboard of the application.</h1>
        </div>
    )
}