import React, { useEffect, useState } from "react";
import vrme from "../../../assets/images/logo.png";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./Header.css";
import flagFR from "../../../assets/images/flagFR.png";
import flagUS from "../../../assets/images/flagUS.png";

const Header = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [ccurrentLanguageCode, setCcurrentLanguageCode] = useState(cookies.get("i18next"));
  const handleLanguageChange = (code) => {
    setCcurrentLanguageCode(cookies.get("i18next"));
    i18next.changeLanguage(code);
  }

  const { width, height } = useResizeScreen();
  const [widthImage, setWidthImage] = useState(150);
  const [styleImage, setStyleImage] = useState({ margin: "7%" });
  const [active, setActive] = useState({
    home: "active",
    therapies: "",
    doctors: "",
    physiotherapyVR: "",
    physiotherapist: "",
    pricing: "",
    blog: "",
    contact: "",
  });

  const [navbarInder, setNavbarInder] = useState('');

  const ChangeInderline = () => {
    if (window.scrollY <= 200) {
      setActive({
        home: "active",
        therapies: "",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "",
        blog: "",
        contact: "",
      })
      setNavbarInder('active.home + " " + "navItemStyle"');
      console.log('home ')
    } else if (window.scrollY >= 250 && window.scrollY <= 1300) {

      setActive({
        home: "",
        therapies: "active",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "",
        blog: "",
        contact: "",
      })
      setNavbarInder('active.therapies + " " + "navItemStyle"');
      console.log('therapies')
    }
    else if (window.scrollY >= 1350 && window.scrollY <= 2299) {
      setActive({
        home: "",
        therapies: "",
        doctors: "active",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "",
        blog: "",
        contact: "",
      })
      setNavbarInder('active.doctors + " " + "navItemStyle"');
      console.log('doctors')
    }
    else if (window.scrollY >= 2300 && window.scrollY <= 3450) {
      setActive({
        home: "",
        therapies: "",
        doctors: "",
        physiotherapies: "active",
        physiotherapist: "",
        pricing: "",
        blog: "",
        contact: "",

      })
      setNavbarInder('active.physiotherapyVR + " " + "navItemStyle"');
      console.log('physiotherapyVR')

    }
    else if (window.scrollY >= 3451 && window.scrollY <= 4500) {
      setActive({
        home: "",
        therapies: "",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "active",
        pricing: "",
        blog: "",
        contact: "",
      })
      setNavbarInder('active.physiotherapist + " " + "navItemStyle"');
      console.log('physiotherapist')
    }
    else if (window.scrollY >= 4500 && window.scrollY <= 5000) {
      setActive({
        home: "",
        therapies: "",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "active",
        blog: "",
        contact: "",
      })
      setNavbarInder('active.pricing + " " + "navItemStyle"');
      console.log('pricing')
    }
    else if (window.scrollY >= 5000 && window.scrollY <= 7000) {
      setActive({
        home: "",
        therapies: "",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "",
        blog: "active",
        contact: "",
      })
      setNavbarInder('active.active + " " + "navItemStyle"');
      console.log('active')
    }
    else if (window.scrollY >= 7000) {
      setActive({
        home: "",
        therapies: "",
        doctors: "",
        physiotherapies: "",
        physiotherapist: "",
        pricing: "",
        blog: "",
        contact: "active",
      })
      setNavbarInder('active.contact + " " + "navItemStyle"');
      console.log('contact')
    }
  };
  window.addEventListener('scroll', ChangeInderline)

  // langages
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },

  ];
  const Ic_fr = () => <a style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}> <img src={flagFR} style={{ width: '20px' }} /> FR</a>;

  const Ic_gb = () => <a style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }} > <img src={flagUS} style={{ width: '20px' }} /> US</a>;


  const currentLanguageCode = cookies.get("i18next");
  const { t } = useTranslation();
  useEffect(() => {
    console.log(t("Welcome_to_React"));
  }, []);

  useEffect(() => {
    if (width < 1200 && width > 1000) {
      console.log("i am between 1200 and 1000");
      setWidthImage(100);
      setStyleImage({ margin: "15%" });
    } else if (width > 1200) {
      setWidthImage(150);
      setStyleImage({ margin: "7%" });
    } else if (width < 770 && width > 443) {
      setWidthImage(90);
      setStyleImage({ margin: "2%" });
    }
    else if (width < 443) {
      setWidthImage(90);
      setStyleImage({ display: 'none' });
    }

    console.log("i am");
    console.log(width);
    console.log(widthImage);
  }, [width]);

  return (
    <div>

      {/* header */}
      <header class="clearfix trans">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container_fluid">
            <div class="inner-header">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-br/and" href="/VRme">
                  <img
                    src={vrme}
                    alt=""
                    width={`${widthImage}+"px"`}
                    style={styleImage}
                  />
                </a>
              </div>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav navbar-right ">
                  <li
                    onClick={() =>
                      setActive({
                        home: "active",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      className={active.home + " " + "navItemStyle"}
                      href="#home-section"
                    >
                      {t("h_1")}
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "active",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      href="#therapies-section"
                      class={active.therapies + " " + "navItemStyle"}
                    >
                      {t("h_2")}
                    </a>
                  </li>

                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "active",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      href="#doctor-section"
                      class={active.doctors + " " + "navItemStyle"}
                    >
                      Doctors
                    </a>
                  </li>
                  {/* <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        therapist: "active",
                        pricing: "",
                        doctors: "",
                        blog: "",
                        contact: "",
                        physiotherapist: "",
                      })
                    }
                  >
                    <a
                      href="#therapists-section"
                      class={active.therapist + " " + "navItemStyle"}
                    >
                      {t("h_3")}
                    </a>
                  </li> */}
                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "active",
                        physiotherapist: "",
                        pricing: "",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      href="#physiotherapies-section"
                      class={active.physiotherapies + " " + "navItemStyle"}
                    >
                      {" "}
                      {t("h_5")}
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "active",
                        pricing: "",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      href="#physiotherapist-section"
                      class={active.physiotherapist + " " + "navItemStyle"}
                    >
                      {" "}
                      {t("h_4")}
                    </a>

                  </li>
                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "active",
                        blog: "",
                        contact: "",
                      })
                    }
                  >
                    <a
                      className={active.pricing + " " + "navItemStyle"}
                      href="#tarification-section"
                    >
                      {t("f_3")}
                    </a>
                  </li>

                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "",
                        blog: "active",
                        contact: "",
                      })
                    }
                  >
                    <a
                      href="#blog-section"
                      class={active.blog + " " + "navItemStyle"}
                    >
                      Blog
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      setActive({
                        home: "",
                        therapies: "",
                        doctors: "",
                        physiotherapies: "",
                        physiotherapist: "",
                        pricing: "",
                        blog: "",
                        contact: "active",
                      })
                    }
                  >

                    <a
                      href="#contact-section"
                      class={active.contact + " " + "navItemStyle"}
                    >
                      Contact
                    </a>
                  </li>

                  <li></li>
                  <li></li>
                  <li >
                    <a style={{ cursor: 'pointer' }} onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                      {currentLanguageCode === "en" ?<Ic_gb />  :<Ic_fr /> }  &#x2193;

                    </a>
                    {isDropdownVisible && (
                      <div style={{ marginLeft: '20%' }}>
                        {languages.map(({ code, name, country_code }) => (
                          <div
                            disabled={code === currentLanguageCode}
                            key={country_code}
                            onClick={() => {
                              handleLanguageChange(code);
                              setIsDropdownVisible(false);
                            }}
                            class="navItemStyle"
                            style={{
                              opacity: code === currentLanguageCode ? 0.3 : 1,
                            }}
                          >
                            {country_code === "fr" ? <Ic_fr /> : <Ic_gb />}
                          </div>
                        ))}
                      </div>
                    )}

                  </li>
                  {/*  */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
