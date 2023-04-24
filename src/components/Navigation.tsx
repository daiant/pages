import React, { useState } from "react";
import { setConstantValue } from "typescript"

export function Navigation() {
  const [nav, setNav] = useState(false);

  const handleNavigation = () => {
    setTimeout(() => setNav(!nav), 10);

  }
  const goto = (link: string) => {
    let element = document.getElementById(link);
    let check: any = document.getElementById("menu_checkbox");
    if (element) {
      element.scrollIntoView();
      setTimeout(() => setNav(false), 10);
      if (check) check.checked = false;
    }
  }
  return (<>
    <header>
      <div className="header_index">
        {/* <span className="welcome_name header_name hover-me" onClick={() => goto("index")}>Carlos</span> */}
        <img src="/pages/logo.svg" onClick={() => goto("index")}></img>
      </div>
      <nav className="navigation">
        <div id="cover" className="hover-me" onClick={handleNavigation}>
          <div id="menu_button">
            <input type="checkbox" name="checkbox" id="menu_checkbox" />
            <label htmlFor="menu_checkbox" id='menu_label'>
              <div id="menu_text_bar" style={{ backgroundColor: nav ? "white" : "black" }}></div>
            </label>
          </div>
        </div>
        <div className={nav ? "nav_list show" : "nav_list"}>
          <div className="bg_nav"></div>
          <ul className={nav ? "ul_nav show_ul" : "ul_nav"}>
            <li onClick={() => goto("index")} className="nav_item hover-me">Inicio</li>
            {/* <li onClick={() => goto("inicio")}className="nav_item">Soluciones</li> */}
            <li onClick={() => goto("proyectos")} className="nav_item hover-me">Proyectos</li>
            <li onClick={() => goto("sobre-mi")} className="nav_item hover-me">Sobre mí</li>
            <li onClick={() => goto("contacto")} className="nav_item hover-me">Contacto</li>
          </ul>
        </div>
      </nav>
    </header>
  </>)
}


