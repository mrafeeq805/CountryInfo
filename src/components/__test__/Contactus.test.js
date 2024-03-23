import { render,screen } from "@testing-library/react"
import Contactus from "../Contactus"
import "@testing-library/jest-dom"

describe("contact us page",() =>{
    test('testing contact up page heading',() =>{
        render(<Contactus/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    test('testing contact up page label',() =>{
        render(<Contactus/>)
        const label = screen.getByText('Our company contact us page')
        expect(label).toBeInTheDocument()
    })
})

