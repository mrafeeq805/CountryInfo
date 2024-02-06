import { useRouteError } from "react-router-dom"
const Error404 = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Error page not found</h1>
            <h2>{error.status}: {error.statusText} </h2>

        </div>
    )
}

export default Error404
