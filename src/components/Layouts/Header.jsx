import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo1.png";
import iconNav1 from "../../assets/images/icon-nav1.png";
import iconNav2 from "../../assets/images/icon-nav2.png";
import iconNav3 from "../../assets/images/icon-nav3.png";
import iconNav4 from "../../assets/images/icon-nav4.png";
import iconNav5 from "../../assets/images/icon-nav5.png";

import { FaSearch, FaAngleLeft } from "react-icons/fa";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Header() {
  const mainNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Product",
      path: "/product/:id",
    },
    {
      display: "Categories",
      path: "/categories",
    },
    {
      display: "About Us",
      path: "/about",
    },
    {
      display: "Contact Us",
      path: "/contact",
    },
    {
      display: "Blog",
      path: "/blog",
    },
  ];

  const megamenu = [
    {
      icon: iconNav1,
      title: "Fresh Fruits",
      subTitle: "Apple, Orange, Watermelon, Banana Pineapple, Grapes...",
    },
    {
      icon: iconNav2,
      title: "Vegetables",
      subTitle: "Cabbage, Onion, Kale, Parsley Garlic, Asparagus...",
    },
    {
      icon: iconNav3,
      title: "Tea & Coffee",
      subTitle: "Leamon tea, Peach tea, Milk tea  Weight loss tea, Coffee ...",
    },
    {
      icon: iconNav4,
      title: "Fresh Juices",
      subTitle: "Apple, Orange, Watermelon, Banana Pineapple, Grapes...",
    },
    {
      icon: iconNav5,
      title: "Fesh Meats",
      subTitle: "Pork, Beef, Lamb chops, Salmon Chicken, Sausage...",
    },
  ];

  const [activeIconMenu, setActiveIconMenu] = useState("menu-icon");
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const categoriList = useRef(null);
  const menuLeft = useRef(null);
  const menuLeftCategoriList = useRef(null);

  const categoriesToggle = () => {
    categoriList.current.classList.toggle("active");
    const classList = categoriList.current.classList.value;
    const index = classList.search("active");
    if (index !== -1) {
      setActiveIconMenu("menu-icon active");
    } else {
      setActiveIconMenu("menu-icon");
    }
  };

  const menuLeftCategoriListToggle = () => {
    menuLeftCategoriList.current.classList.toggle("active");
  };

  const menuLeftTogle = () => {
    menuLeft.current.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink", null);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="page-header">
      <div className="page-header-top" ref={headerRef}>
        <div className="container">
          <div className="header-top  pb-40 pt-40">
            <div className="header-logo col-3 col-medium-3 col-small-4">
              <BiMenuAltLeft
                className="menuLeft mr-10"
                onClick={menuLeftCategoriListToggle}
              />
              <ul className="menuLeft-menu" ref={menuLeftCategoriList}>
                <i className="menuLeft-menu-close">
                  <FaAngleLeft onClick={menuLeftCategoriListToggle} />
                </i>

                {megamenu.map((item, index) => {
                  return (
                    <li
                      className="menuLeft-menu-item"
                      key={`menuLeft-menu-${index}`}
                    >
                      <Link to="#">
                        <div className="icon-nav">
                          <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="group-title">
                          {item.title}
                          <p className="sub-title-nav">{item.subTitle}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link to="/">
                <img src={logo} alt="logo-page" />
              </Link>
            </div>
            <form className="header-top-form col-9">
              <input
                className="header-top-form-input col-10"
                type="search"
                placeholder="ENTER YOUR KEYWORD"
              ></input>
              <button className="header-top-form-button col-2">
                <span>
                  <i className="seacrh-icon">
                    <FaSearch />
                  </i>
                </span>
              </button>
            </form>
            <nav className="header-top-nav col-9 col-medium-9 col-small-1">
              <BiMenu className="menu-mobile" onClick={menuLeftTogle} />
              <ul className="header-top-menu col-8" ref={menuLeft}>
                <i className="header-top-menu-close">
                  <IoClose onClick={menuLeftTogle} />
                </i>
                {mainNav.map((item, index) => {
                  return (
                    <li
                      className={`header-top-menu-item ${
                        activeNav === index ? "active" : ""
                      }`}
                      key={`header-menu-${index}`}
                    >
                      <Link to={item.path}>
                        <span>{item.display}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="header-top-socials col-4">
                <li className="header-icon header-top-socials-item  mr-10">
                  <div className="header-icon-account"></div>
                </li>
                <li className="header-top-socials-item header-cart">
                  <div className="header-icon site-header-cart">
                    <span className="header-icon-cart"></span>
                    <span className="header-cart-count">
                      <span>1</span>
                    </span>
                  </div>
                  <div className="site-header-cart-title ml-20">
                    <span className="header-cart-title">My Cart</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom-row">
            <div className="vertical-menu col-3">
              <div className="vertical-dropdown">
                <div
                  className="vertical-dropdown-title"
                  onClick={categoriesToggle}
                >
                  <i className="zmdi zmdi-menu">
                    <BiMenu className={activeIconMenu} />
                    <IoClose className={activeIconMenu} />
                  </i>
                  <span className="ml-30">Categories</span>
                </div>
              </div>
              <ul className="header-bottom-menu" ref={categoriList}>
                {megamenu.map((item, index) => {
                  return (
                    <li
                      className="header-bottom-menu-item"
                      key={`mega-menu-${index}`}
                    >
                      <Link to="#">
                        <div className="icon-nav">
                          <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="group-title">
                          {item.title}
                          <p className="sub-title-nav">{item.subTitle}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="header-bottom-block-right col-9">
              <div className="header-bottom-search">
                <form className="header-bottom-form">
                  <input
                    className="header-bottom-form-input"
                    type="search"
                    placeholder="ENTER YOUR KEYWORD"
                  ></input>
                  <button className="header-bottom-form-button">
                    <span>
                      <i className="seacrh-icon">
                        <FaSearch />
                      </i>
                    </span>
                  </button>
                </form>
              </div>
              <div className="header-bottom-address">
                <div className="header-bottom-address-box">
                  <div className="header-bottom-address-title">
                    Call Us Now :
                  </div>
                  <ul className="header-bottom-address-list">
                    <li className="header-bottom-address-item">
                      <h3 className="header-bottom-address-item-name">
                        seattle :
                      </h3>
                      <p className="header-bottom-address-item-number mt-5">
                        084-2525-6868
                      </p>
                      <p className="header-bottom-address-item-email">
                        greenbee@domain.com
                      </p>
                      <p className="header-bottom-address-item-address mt-5">
                        PO Box 1622 Vissaosang Street West
                      </p>
                    </li>
                    <li className="header-bottom-address-item">
                      <h3 className="header-bottom-address-item-name">
                        chicago :
                      </h3>
                      <p className="header-bottom-address-item-number mt-5">
                        084-2525-6868
                      </p>
                      <p className="header-bottom-address-item-email">
                        sonata@domain.com
                      </p>
                      <p className="header-bottom-address-item-address mt-5">
                        PO Box 1622 Vissaosang Street West
                      </p>
                    </li>
                  </ul>
                  <div className="header-bottom-address-number">
                    084-2525-6868
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-vertical-menu"></div>
      </div>
    </div>
  );
}

export default Header;
