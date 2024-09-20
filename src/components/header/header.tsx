import { HeaderContainer } from "./Header.style";
import logo from '../../assets/Logo (1).png'

export function Header() {
    return(
        <>
            <HeaderContainer>
                <img src={logo}></img>
            </HeaderContainer>
        </>
    )
}