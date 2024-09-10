import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuExtend, setIsMenuExtend] = useState(false);


  const toggleBtn = document.querySelector('.show-icon');
  const menu = document.querySelector('.header-menu-categoty1');

  const toggleBtn2 = document.querySelector('.show-icon1');
  const menu2 = document.querySelector('.header-menu-categoty2');

  /* toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
  })

  toggleBtn2.addEventListener('click', () => {
    menu2.classList.toggle('show1');
  }) */
  
  return (
    <div className="Header">
      {isTop ? (
        <div className="header-transparence">
          <div className="header-wrapper">
            <div className="header-menu-wrapper">
              <img
                src="\images\Header\h_menu.png"
                alt="menu_white"
                className="header-menu-icon"
                onClick={() => {
                  setIsMenuExtend(true);
                }}
              />
            </div>

            <Link to="/">
              <img
                src="\images\Header\mh_logo.png"
                alt="logo_white"
                className="logo"
              />
            </Link>

            <div className="header-container">
              <p className="header-point" style={{ color: "white" }}>
                적립금 1,050P
              </p>
              <p className="header-service" style={{ color: "white" }}>
                고객지원
              </p>
              <img src="\images\Header\search.png" alt="search_white"></img>
              <img src="\images\Header\mypage.png" alt="mypage_white"></img>
              <img src="\images\Header\h_cart.png" alt="cart_white"></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-normal">
          <div className="header-wrapper">
            <div className="header-menu-wrapper">
              <img
                src="\images\Header\h_menu_black.png"
                alt="menu_black"
                className="header-menu-icon"
                onClick={() => {
                  setIsMenuExtend(true);
                }}
              />
            </div>

            <Link to="/">
              <img
                src="\images\Header\logo_black.png"
                alt="logo_black"
                className="logo"
              />
            </Link>

            <div className="header-container">
              <p className="header-point">적립금 1,050P</p>
              <p className="header-service">고객지원</p>
              <img
                src="\images\Header\h_search_black.png"
                alt="search_black"
              ></img>
              <img
                src="\images\Header\h_mypage_black.png"
                alt="mypage_black"
              ></img>
              <img src="\images\Header\h_cart_black.png" alt="cart_black"></img>
            </div>
          </div>
        </div>
      )}

      <div className={isMenuExtend ? "header-extend-yes" : "header-extend-no"}>
        <img
          src="\images\Header\close.png"
          onClick={() => {
            setIsMenuExtend(false);
          }}
          alt="close"
          className="header-close"
        />
        <div className="header-menu-container">
          <ul style={{ display: "flex" }} className="header-menu-shopping">
			      <li>쇼핑</li>
              <img
                className="show-icon"
                src="\images\Header\add.png"
                alt="add"
              ></img>

            <ul className="header-menu-categoty1">
              <div style={{ display: "flex", width:"600px"}} >
              <li>레오폴드키보드</li>
              <img
                className="show-icon1"
                src="\images\Header\add.png"
                alt="add"
              ></img>
              </div>
              
              <ul className="header-menu-categoty2">
              <div style={{ display: "flex", width:"600px"}} >
                <li>기계식 유·무선 키보드</li>
                <img
                className="show-icon2"
                src="\images\Header\add.png"
                alt="add"
              ></img>
              </div>
              
                <ul>
                <li className="header-menu-categoty3">FC900RBT MX2A</li>
                <li className="header-menu-categoty3">FC900RBT MX2A</li>
                </ul>
              </ul>
              
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
