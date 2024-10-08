import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"
export const Navbar = () =>{
    console.log("Navbar renderd")
    return(
        <div>
        <NavLinks/>
        <NavSearch/>
        </div>
    )
}