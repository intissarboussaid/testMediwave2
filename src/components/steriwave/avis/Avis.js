import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useTranslation } from "react-i18next";

function Avis() {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }
  const handleReset = () => {
    setRating(0)
  }

  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)



  return (
    <div id='DiscoverOurSolution'>
      <section class="about-section" style={{ marginTop: "-7%" }}>
        <div class="container">
          <div class="title-section">
            <h1>{t("Avis")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>{t("review")}</a></h1>
          </div>
          <div>
            <Rating
              onClick={handleRating}
              initialValue={rating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
            />
            {/* <Rating onClick={handleRating} initialValue={rating} /> <br/> */}
            <input onClick={handleReset} type="submit" id="submit_contact" value="Submit" />
            <div id="msg" class="message"></div>
            {/* <button onClick={handleReset}>reset</button> */}
          </div>
        </div>
      </section>
    </div>

  );
};

export default Avis