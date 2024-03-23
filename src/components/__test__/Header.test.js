import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it('should load header component with login button',() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    )
    const button = screen.getByRole("button",{name:"Login"})
    expect(button).toBeInTheDocument()
    
})
it('should check favorites exist in header component ',() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    )
    const fav = screen.getByText(/Favorites/)
    expect(fav).toBeInTheDocument()
    
})
it('should check login text changes to logout text',() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    )
    const loginbtn = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginbtn)
    const logoutbtn = screen.getByRole("button",{name:"Logout"})
    expect(logoutbtn).toBeInTheDocument()
    
})