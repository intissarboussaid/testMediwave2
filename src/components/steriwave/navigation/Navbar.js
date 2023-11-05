import React, { useEffect, useState } from "react";
import mediwave from "../../../assets/images/logoMediwave.png";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./Navbar.css";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');


  const handleDropdownChange = (onClick) => {
    if (onClick.DropDownMenu.Ic_fr) {
      setSelectedOption('FR');
    } else if (onClick.DropDownMenu.Ic_gb) {
      setSelectedOption('En');
    } else { setSelectedOption(''); }
    console.log('selectedOption', selectedOption);
  }

  const { width, height } = useResizeScreen();
  const [widthImage, setWidthImage] = useState(150);
  const [dropDown, setDropDown] = useState({
    background: 'rgba(114, 192, 238, 0.8)',
    border: 'rgba(114, 192, 238, 0.8)',
    marginLeft: 'none',
  });
  const [left, setLeft] = useState();

  const [styleImage, setStyleImage] = useState({ margin: "7%" });

  const IconlanguageStyle = {
    fontSize: '22px',
    color: 'white',
    cursor: 'pointer',
    background: 'transparent',


  };
  const StyleFrEn = {
    color: 'white',
    cursor: 'pointer',
    marginLeft: '7vh'

  };

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

  const Ic_fr = () => <a style={StyleFrEn}>FR</a>;

  const Ic_gb = () => <a style={StyleFrEn}>EN</a>;

  const currentLanguageCode = cookies.get("i18next");
  const { t } = useTranslation();
  useEffect(() => {
    console.log(t("Welcome_to_React"));
  }, []);

  useEffect(() => {
    if (width > 1400) {
      console.log("i am sup 1400 ");
      setWidthImage(150);
      setStyleImage({
        marginLeft: '-100%',
        marginTop: '15%',
      });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
        border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: 'none',
      })
    }else if (width < 1400 && width > 1200) {
        console.log("i am bettwen  1400 et 1200 ");
        setWidthImage(150);
        setStyleImage({
          marginLeft: '70%',
          marginTop: '15%',
        });
        setDropDown({
          background: 'rgba(114, 192, 238, 0.8)',
          border: 'rgba(114, 192, 238, 0.8)',
          marginLeft: 'none',
        })
      }
      else if (width < 1228 && width > 1199) {
        setLeft('120%');
      }
    else if (width < 1200 && width > 1000) {
      console.log("i am between 1200 and 1000");
      setWidthImage(50);
      setStyleImage({
        marginLeft: '80%',
        marginTop: '15%',
        height:'40%'
      });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
        border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: 'none',
      })
    } else if (width < 1000 && width > 771) {
      setWidthImage(150);
      setStyleImage({
        marginLeft: '70%',
        marginTop: '25%',
      });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
    border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: 'none',
      })}
      else if (width < 771 && width > 760) {
        setWidthImage(100);
        setStyleImage({
          marginLeft: '100%',
          marginTop: '4%',
        });
        setDropDown({
          background: 'rgba(114, 192, 238, 0.8)',
          border: 'rgba(114, 192, 238, 0.8)',
          marginLeft: '37%',
          marginTop: '-5%',
        })
      }
    
    else if (width < 760 && width > 724) {
      setWidthImage(100);
      setStyleImage({
        marginLeft: '10%',
        marginTop: '-15%',
      });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
        border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: '37%',
        marginTop: '-5%',
      })
    }
     else if (width < 724 && width > 563) {
      setWidthImage(500);
      setStyleImage({
        marginLeft: '10%',
        marginTop: '-17%',
      });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
        border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: '37%',
        marginTop: '-5%',
      })
    }
    else if (width < 562 && width > 444) {
      setWidthImage(90);
      setStyleImage({
        marginLeft: '10%',
        marginTop: '-20%',
      });
      setStyleImage({ marginTop: "-23%" });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
    border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: '37%',
        marginTop: '-5%',
      })
    }
    else if (width < 443 && width > 228) {
      setWidthImage(90);
      setStyleImage( {display:'none' });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
        border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: '28%',
        marginTop: '-5%',
      })

    }

    else if (width < 228) {
      setWidthImage(90);
      setStyleImage( {display:'none' });
      setDropDown({
        background: 'rgba(114, 192, 238, 0.8)',
    border: 'rgba(114, 192, 238, 0.8)',
        marginLeft: '20%',
        marginTop: '-5%',
        width: '10px',
      })

    }

    console.log("i am");
    console.log(width);
    console.log(widthImage);
  }, [width]);

  return (
    <div>
      {/* header */}
      <header class="clearfix trans" >
        <nav class="navbarsteriwave navbar-default navbar-fixed-top" role="navigation" >
          <div class="container">
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
                {/* <a class="navbar-br/and" href="/">
                  <img
                    src={mediwave}
                    alt="Steriwave"
                    width={`${widthImage}+"px"`}
                    style={styleImage}
                  />
                </a> */}
              </div>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
               
              >
                <ul class="nav navbar-nav navbar-right "  style={{left:left}}>
                  <li>
                    <a
                      href="#steriwave-section"
                    >
                      {t("h_1")}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#tarification-section"
                    >
                      {t("f_3")}
                    </a>

                  </li>

                  <li>
                    <a
                      href="#contact-section">
                      Contact
                    </a>

                  </li>
                  <li >
                    <a style={IconlanguageStyle} data-toggle="dropdown" onChange={handleDropdownChange} >
                      <i class="fa fa-globe"></i>
                    </a>
                    <div className="dropdown-menu" style={dropDown}   >

                      {languages.map(({ code, name, country_code }) => (
                        <tr
                          disabled={code === currentLanguageCode}
                          key={country_code}
                          onClick={() => i18next.changeLanguage(code)}
                          class="navItemStyle"
                          style={{
                            opacity: code === currentLanguageCode ? 0.3 : 1,
                          }}
                        >
                          {country_code === "fr" ? <Ic_fr /> : <Ic_gb />}

                        </tr>
                      ))}
                      <div>
                      </div>
                    </div>
                  </li>
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
