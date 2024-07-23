import { useState } from "react";
import logo from "../images/logo.svg"

// CSS MENU + CSS MENU in App.scss - &__checkbox
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__logo" href="/">
            <img className="header__img" alt="Logo" src={logo} width="104" height="35" />
          </a>
          <input className="header__checkbox" id="menu" type="checkbox" />
          <ul className="header__links">
            <li className="header__link"><a href="/">Home</a></li>
            <li className="header__link"><a href="#">Products</a></li>
            <li className="header__link"><a className="header__basket" href="#"></a></li>
          </ul>
          <label className="header__menu" htmlFor="menu" >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </label>
        </nav>
      </div>
    </header>
  );
}

// JS MENU + JS MENU in App.scss - &_active, &__links_active 
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className="header">
//       <div className="container">
//         <nav className="header__nav">
//           <a className="header__logo" href="/">
//             <img className="header__img" alt="Logo" src={logo} width="104" height="35" />
//           </a>
//           <ul className={`header__links${isMenuOpen ? " header__links_active" : ""}`}>
//             <li className="header__link"><a href="/">Home</a></li>
//             <li className="header__link"><a href="#">Products</a></li>
//             <li className="header__link"><a className="header__basket" href="#"></a></li>
//           </ul>
//           <div 
//             className={`header__menu${isMenuOpen ? " header__menu_active" : ""}`}
//             onClick={() => setIsMenuOpen((state) => !state)}
//           >
//             <span className="header__menu-line"></span>
//             <span className="header__menu-line"></span>
//             <span className="header__menu-line"></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }


export default Header;