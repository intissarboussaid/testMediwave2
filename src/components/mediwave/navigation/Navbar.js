import React, { useEffect, useState } from "react";
import mediwave from "../../../assets/images/logoMediwave.png";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./Navbar.css";
import Select from 'react-select';

const Header = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const language = [
     { value: 'english', label: 'English' },
     { value: 'french', label: 'French' },
     { value: 'spanish', label: 'Spanish' },
     { value: 'german', label: 'German' },
  ];
  const handleChange = (option) => {
    setSelectedLanguage(option.value);
 };
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
    background:'rgba(130, 188, 228, 0.9)',
    border:'rgba(130, 188, 228, 0.9)',
    marginLeft:'none',
  });
  const [styleImage, setStyleImage] = useState({ margin: "0%" });
 
  const IconlanguageStyle = {

    cursor: 'pointer',
    background: 'transparent',


  };
  const StyleFrEn = {
    color: 'white',
    cursor: 'pointer',
    marginLeft:'7vh'

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
    if (width >1200) {
      console.log("i sup between 1200");
      setWidthImage(200);
      setStyleImage({ 
        marginLeft:'0%',
        marginTop:'0%'
        // margin: "0%"
       });
      setDropDown({
        background:'rgba(130, 188, 228, 0.9)',
        border:'rgba(130, 188, 228, 0.9)',
        marginLeft:'none',
      })
    }
   else if (width < 1200 && width > 1000) {
      console.log("i am between 1200 and 1000");
      setWidthImage(150);
      setStyleImage({ margin: "15%" });
      setDropDown({
        background:'rgba(130, 188, 228, 0.9)',
        border:'rgba(130, 188, 228, 0.9)',
        marginLeft:'none',
      })
    } 
    // else if (width > 1200) {
    //   setWidthImage(150);
    //   setStyleImage({ margin: "7%" });
    //      setDropDown({
    //     background:'rgba(130, 188, 228, 0.9)',
    //     border:'rgba(130, 188, 228, 0.9)',
    //     marginLeft:'none',
    //   })
    // } 
    else if (width < 769 && width >563)  {
      setWidthImage(90);
      setStyleImage({ top: "9%" });
      setDropDown({
        background:'rgba(130, 188, 228, 0.9)',
        border:'rgba(130, 188, 228, 0.9)',
        marginLeft:'37%',
        marginTop:'-5%',
      })
    }
    else if (width < 562 && width> 444) {
      setWidthImage(90);
      setStyleImage({ marginTop: "1%"});
      setDropDown({
        background:'rgba(130, 188, 228, 0.9)',
        border:'rgba(130, 188, 228, 0.9)',
        marginLeft:'37%',
        marginTop:'-5%',
    })
  }
    else if (width <  443 && width>228) {
      setWidthImage(90);
      setStyleImage({ marginTop: "1%" });
      setDropDown({
        background:'rgba(130, 188, 228, 0.9)',
        border:'rgba(130, 188, 228, 0.9)',
        marginLeft:'28%',
        marginTop:'-5%',
    })    
 }
 
 else if (width <228 && width >200) {
  setWidthImage(90);
  setStyleImage({ marginTop: "6%" });
  setDropDown({
    background:'rgba(130, 188, 228, 0.9)',
    border:'rgba(130, 188, 228, 0.9)',
    marginLeft:'20%',
    marginTop:'-5%',
    width:'10px',
})}else if (width <=200) {
  setWidthImage(90);
  setStyleImage({ marginTop: "-50%" });
  setDropDown({
    background:'rgba(130, 188, 228, 0.9)',
    border:'rgba(130, 188, 228, 0.9)',
    marginLeft:'20%',
    marginTop:'-5%',
    width:'10px',
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
        <nav class="navbarMedi navbar-default navbar-fixed-top" role="navigation" >
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
                  <span class="icon-bar" style={{background:'white'}}></span>
                  <span class="icon-bar"style={{background:'white'}}></span>
                  <span class="icon-bar"style={{background:'white'}}></span>
                </button>
                <a class="navbar-br/and" href="/">
                  <img
                    src={mediwave}
                    alt="Mediwave"
                    width={`${widthImage}+"px"`}
                    style={styleImage}
                  />
                </a>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav navbar-right ">
                  <li>
                    <a
                    href="/#Mediwave-section"                
                    >     
                            {t("h_1")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/VRme"
                    >
                      VRme
                    </a>

                  </li>
                  <li>
                    <a
                      href="/Medilink"
                    >
                      Medilink
                    </a>

                  </li>
                  <li>
                    <a
                      href="/Steriwave">
                      Steriwave
                    </a>

                  </li>
                  <li>
                    <a
                       href="#UpcomingProjects-section">
                      {t("h_6")} {t("h-6-1")}
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
                    {/* <i class="fa fa-globe"></i> */}
                   
                    <Select
        value={selectedLanguage}
        onChange={handleChange}
        options={languages}
      />
                    </a>
                    <div className="dropdown-menu" style={dropDown}   >
                    
                       {/* {languages.map(({ code, name, country_code }) => (
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
                  ))} */}
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
