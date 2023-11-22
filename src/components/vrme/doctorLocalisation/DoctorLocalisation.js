import React, { useEffect, useMemo, useState, ReactElement } from "react";
import { Link } from "react-router-dom";
// import useFetch from "./hooks/useFetch";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import doctorImage from "../../../assets/images/doctor.jpg";
import doctorImage1 from "../../../assets/images/doc1.jpg";
import doctorImage2 from "../../../assets/images/doc2.jpg";
import doctorImage3 from "../../../assets/images/doc3.jpg";
import doctorImage4 from "../../../assets/images/doc4.jpg";
import doctorImage5 from "../../../assets/images/doc5.jpg";
import { useTranslation } from "react-i18next";

const DoctorLocalisation = () => {
  const { t } = useTranslation();
  //   const { data, loading, error } = useFetch("/medecins");
  const [loading, setLoading] = useState("");
  const [doctor, setDoctor] = useState({});
  const [mapAdjust, setMapAdjust] = useState(
    "col-lg-8 col-md-8 col-sm-6 col-xs-12"
  );
  const [showDoctor, setShowDoctor] = useState(false);
  const [selectedMap, setSelectedMap] = useState({
    map1: true,
    map2: false,
    map3: false,
    map4: false,
    map5: false,
    map6: false,
  });
  useEffect(() => {
    console.log(doctor);
  }, [doctor]);

  const [data, setData] = useState([
    {
      acts_et_soins: "acts et soins du medcin",
      adresse: "adresse sokra ",
      featured: true,
      genre: "Male",
      gouvernorat: "Sfax",
      lat: 36.74561853435546,
      lng: 10.295197155062155,
      mail: "med1@gmail.com",
      media: [],
      name: "mohamed",
      phone1: "9812345",
      phone2: "9712345",
      prename: "akremi",
      qualification_personnel: "qualification personnel du med",
      specialty: "Psychiatre",
      _id: "63ad4fe5923f9689646b0080",
      img:<img
      alt="doctor"
      src={doctorImage}/>
    },
    {
      acts_et_soins: "acts et soins du medcin2",
      adresse: "adresse Sahloul ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sousse",
      lat: 35.82773884566303,
      lng: 10.63877166558366,
      mail: "med2@gmail.com",
      media: [],
      name: "Leila",
      phone1: "9112345",
      phone2: "9612345",
      prename: "akremi",
      qualification_personnel: "qualification personnel du med2",
      specialty: "Psychotherapist",
      _id: "63ad5060923f9689646b0082",
      img:<img
      alt="doctor"
      src={doctorImage1}/>
    },
    {
      acts_et_soins: "acts et soins du medcin3",
      adresse: "adresse saltniya ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sfax",
      lat: 36.02739528911792,
      lng: 10.516575958078903,
      mail: "med3@gmail.com",
      media: [],
      name: "Dalila",
      phone1: "59112345",
      phone2: "59612345",
      prename: "akremi",
      qualification_personnel: "qualification personnel du med3",
      specialty: "Psychologue",
      _id: "63ada52e8bc7c59c414f1f08",
      img:<img
      alt="doctor"
      src={doctorImage2}/>
    },
    {
      acts_et_soins: "acts et soins du medcin4",
      adresse: "adresse Khzema ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sousse",
      lat: 34.744994555298184,
      lng: 10.762687401023049,
      mail: "med4@gmail.com",
      media: [],
      name: "Mariem",
      phone1: "29112345",
      phone2: "29612345",
      prename: "abdi",
      qualification_personnel: "qualification personnel du med4",
      specialty: "Psychotherapist",

      _id: "63adaff58bc7c59c414f1f23",
      img:<img
      alt="doctor"
      src={doctorImage3}/>
    },
    {
      acts_et_soins: "acts et soins du medcin5",
      adresse: "adresse lac 2 ",
      featured: false,
      genre: "Male",
      gouvernorat: "Tunis",
      lat: 35.76690598514113,
      lng: 10.84111483143234,
      mail: "med5@gmail.com",
      media: [],
      name: "Ossema",
      phone1: "79112345",
      phone2: "29612345",
      prename: "Abdi",
      qualification_personnel: "qualification personnel du med5",
      specialty: "Psychiatre",
      _id: "63adb6958bc7c59c414f1f3b",
      img:<img
      alt="doctor"
      src={doctorImage4}/>
    },
    {
      acts_et_soins: "acts et soins du medcin6",
      adresse: "adresse centre ville ",
      featured: true,
      genre: "Male",
      gouvernorat: "Monastir",
      lat: 34.72745080533784,
      lng: 10.782006011443983,
      mail: "med6@gmail.com",
      media: [],
      name: "Makrem",
      phone1: "79112345",
      phone2: "29612345",
      prename: "Abdi",
      qualification_personnel: "qualification personnel du med6",
      specialty: "Psychologue",
      _id: "63b2aa80bdbdf53bacf86ce6",
      img:<img
      alt="doctor"
      src={doctorImage5}/>
    },
  ]);

  const [filter, setFielters] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFielters({
      ...filter,
      [e.target.name]: value,
    });
  };
  const header = (
    <img
      alt="Card"
      src={doctorImage}
      // width={100}
    />
  );
  // const footer = (
  //   <div className="flex flex-wrap justify-content-end gap-2">
  //     <Button label="Save" icon="pi pi-check" />
  //     <Button
  //       label="Cancel"
  //       icon="pi pi-times"
  //       className="p-button-outlined p-button-secondary"
  //     />
  //   </div>
  // );
  const [items, setItems] = useState(data);
  useEffect(() => {
    console.log(items);
  }, [items]);
  useEffect(() => {
    setItems(
      data.filter((items) =>
        Object.entries(filter).every(([key, value]) =>
          items[key].includes(value)
        )
      )
    );
  }, [data, filter]);

  return (
    <>
      <div
        class="container-fluid"
        style={{ marginLeft: "5%", marginTop: "5%", marginBottom: "5%" }}
        id="doctor-section"
      >
        <div class="container">
          <div class="title-section">
            <h1>{t("Find")}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-5 col-sm-6 col-xs-6">
            <div className="card flex justify-content-center">
              <Card
                title={t("All_Doctors")}
                subTitle={t("Choose_a_Doctor")}
                //   footer={footer}
                //   header={header}
                className="md:w-38rem"
                style={{
                  height: 500,
                  marginRight: "10%",
                  overflowY: "scroll",
                  // overflow: "hidden",
                  marginTop: "2%",
                }}
              >
                {/* <h2>All Doctors</h2>{" "} */}
                <div>
                  <div
                    className="p-card-subtitle"
                    style={{ marginRight: "7%", marginLeft: "7%" }}
                  >
                    <div className="card">
                      {data.map((item, i) => {
                        return (
                          <div
                            className="doctorName"
                            style={{
                              display: "flex",
                              marginLeft: "7%",
                              marginTop: "7%",
                              cursor: "pointer",
                              borderRadius: "2%",
                            }}
                            key={i}
                            onClick={() => {
                              setDoctor(item);
                              console.log(i);
                              if (i === 0) {
                                setSelectedMap({
                                  map1: true,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              } else if (i === 1) {
                                setSelectedMap({
                                  map1: false,
                                  map2: true,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              } else if (i === 2) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: true,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              } else if (i === 3) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: true,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              } else if (i === 4) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: true,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              } else if (i === 5) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: true,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-4 col-sm-6 col-xs-12"
                                );
                                setShowDoctor(true);
                              }
                            }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Click Here"
                          >
                            <Avatar
                              icon="pi pi-user"
                              // className="mr-2"
                              size="xlarge"
                              style={{ marginRight: "10%" }}
                            />
                            <h5 style={{ marginRight: "2%" }}>
                              {item.prename}
                            </h5>
                            <h5>{item.name}</h5>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {selectedMap.map1 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.72745080533784, 10.782006011443983&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map2 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.82773884566303, 10.63877166558366&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map3 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=36.02739528911792, 10.516575958078903&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map4 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.744994555298184, 10.762687401023049&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map5 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.76690598514113, 10.84111483143234&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map6 ? (
            <div class={`${mapAdjust}`}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  height: "400",
                  width: "100%",
                  marginTop: "2%",
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.72745080533784, 10.78200601144398&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowfullscreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : null}
</div>

          {showDoctor ? (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="card">
                <Card
                  title={`${doctor.name} ${doctor.prename}`}
                  subTitle={`${doctor.specialty}`}
                  // footer={footer}
                  header={doctor.img}
                  className="md:w-25rem"
                  style={{
                    height: 500,
                    marginRight: "10%",
                    marginTop: "2%",
                  }}
                >
                  {/* <p className="m-0">{doctor.name}</p> */}
                  <div
                    style={{
                      overflow: "hidden",
                      overflowY: "scroll",
                      height: "150px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-envelope"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{doctor.mail}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-home"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{doctor.adresse}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-phone"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{doctor.phone1}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-phone"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{doctor.phone2}</h5>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default DoctorLocalisation;
