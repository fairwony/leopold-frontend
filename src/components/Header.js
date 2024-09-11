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
          <ul className="header-menu-shopping">
            <li>
              쇼핑
              <ul className="header-menu-categoty1">
                  <li style={{paddingBottom:"25px"}}>
                    레오폴드 키보드
                    <ul className="header-menu-categoty2">
                        <li style={{paddingBottom:"25px"}}>
                          기계식 유·무선 키보드
                          <ul className="header-menu-categoty3">
                            <li>FC900RBT MX2A</li>
                            <li>FC900RBT</li>
                            <li>NP900RBT</li>
                            <li>FC750RBT MX24</li>
                            <li>FC750RBT</li>
                            <li>NP750RBT</li>
                            <li>FC730MBT MX24</li>
                            <li>FC630MBT MX24</li>
                            <li>FC660MBT</li>
                            <li>FC980MBT</li>
                            <li>FC650MDSBT</li>
                          </ul>
                        </li>
                        <li>기계식 유선 키보드
                        <ul className="header-menu-categoty3" style={{paddingBottom:"30px"}}>
                            <li>FC900R MX24</li>
                            <li>FC900</li>
                            <li>FC750R</li>
                            <li>FC980M</li>
                            <li>FC660M</li>
                            <li>FC650MDS</li>
                            <li>FC210TP</li>
                          </ul>
                        </li>
                        <li  style={{paddingBottom:"30px"}}>정전용량 무접점</li>
                    </ul>
                  </li>
                  <li>리얼포스 키보드
                    <ul className="header-menu-categoty2">
                      <li style={{paddingBottom:"25px"}}>R3</li>
                      <li style={{paddingBottom:"55px"}}>R3TL</li>
                    </ul>
                  </li>
                  <li>악세서리
                    <ul className="header-menu-categoty2">
                      <li style={{paddingBottom:"25px"}}>주변용품</li>
                      <li style={{paddingBottom:"25px"}}>실리콘 키스킨</li>
                      <li style={{paddingBottom:"25px"}}>악세서리 키캡</li>
                      <li style={{paddingBottom:"25px"}}>기타용품</li>
                    </ul>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}