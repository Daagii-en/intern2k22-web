import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import muis from "../logo/muis-logo.png";
import shutis from "../logo/SHUTIS_logo.svg.png";
export function Partners() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
    //scrollAnim();
  });
  return (
    <div className="partners row">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="row partners__title"
      >
        <h2>Хамтрагч байгууллага</h2>
      </div>
      <div className="row partners__content">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          className="col"
        >
          <a>
            <img src={muis} />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className="col"
        >
          <a className="">
            <div className="shutis">
              <img src={shutis} className="shutis-logo" />
            </div>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
          className="col"
        >
          <a>
            <svg
              data-v-f783a81a=""
              width="80"
              height="80"
              viewBox="-6 -1 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.5212L0.0240998 4.25742C0.0240998 4.25742 -0.0460087 3.82548 0.681367 3.65336C1.40874 3.48124 16.0636 0.0202659 16.0636 0.0202659C16.1859 -0.00362215 16.3116 -0.00362215 16.4339 0.0202659L32.068 3.71804C32.068 3.71804 32.4668 3.8792 32.4668 4.25742V38.9516C32.4614 39.0949 32.4065 39.2318 32.3114 39.339C32.2162 39.4462 32.0869 39.517 31.9454 39.5392C31.4239 39.6489 16.5182 43.1252 16.5182 43.1252C16.3542 43.1627 16.1838 43.1627 16.0198 43.1252C15.7591 43.0627 0.683557 39.5601 0.683557 39.5601C0.683557 39.5601 0.0262907 39.5173 0.0262907 38.9724C0.0262907 38.4276 0 18.5212 0 18.5212Z"
                fill="#EF3340"
              ></path>
              <path
                d="M32.4668 38.95V4.25579C32.4668 3.87757 32.068 3.71642 32.068 3.71642L19.8659 0.829895L0 20.7078C0.00657267 25.8954 0.0219089 38.5378 0.0219089 38.9708C0.0219089 39.519 0.684653 39.5584 0.684653 39.5584C0.684653 39.5584 15.7569 43.0666 16.0209 43.1236C16.1849 43.1611 16.3553 43.1611 16.5193 43.1236C16.5193 43.1236 31.425 39.6418 31.9465 39.5376C32.0878 39.5151 32.2169 39.4442 32.3118 39.3371C32.4067 39.2299 32.4615 39.0931 32.4668 38.95Z"
                fill="#E5BF03"
              ></path>
              <path
                d="M32.4668 38.95V5.33234L0.0230103 37.8011C0.0230103 38.4764 0.0230103 38.8974 0.0230103 38.9708C0.0230103 39.519 0.685754 39.5584 0.685754 39.5584C0.685754 39.5584 15.758 43.0666 16.022 43.1236C16.186 43.1611 16.3564 43.1611 16.5204 43.1236C16.5204 43.1236 31.4261 39.6418 31.9476 39.5376C32.0887 39.5149 32.2175 39.4439 32.3122 39.3368C32.4069 39.2296 32.4615 39.0929 32.4668 38.95Z"
                fill="#00AB84"
              ></path>
              <path
                d="M32.4668 38.95V22.4454L12.5976 42.3277L16.0176 43.1236C16.1816 43.1611 16.352 43.1611 16.516 43.1236C16.516 43.1236 31.4217 39.6418 31.9432 39.5376C32.0851 39.5158 32.215 39.4452 32.3105 39.338C32.4061 39.2308 32.4613 39.0936 32.4668 38.95Z"
                fill="#0085CA"
              ></path>
              <path
                d="M20.6765 25.0633C20.6765 24.1622 19.7333 24.1194 19.7333 24.1194C19.7333 24.1194 13.6339 24.1402 12.7335 24.1402C11.833 24.1402 11.7903 25.0842 11.7903 25.0842V35.3005C11.7903 36.0339 11.0771 36.2444 10.8471 36.2444C10.7007 36.2404 10.5572 36.2029 10.4275 36.1347C10.4275 36.1347 7.88721 34.5868 7.36688 34.293C6.88488 33.9992 6.81915 33.4291 6.81915 33.4291V8.55104C6.81915 8.55104 6.86078 7.60714 7.76233 7.60714H10.8449C10.8449 7.60714 11.7881 7.6488 11.7881 8.55104V18.2214C11.7881 18.2214 11.8505 19.1653 12.7313 19.1653H19.7312C19.7312 19.1653 20.6743 19.1225 20.6743 18.2214V8.55104C20.6743 8.55104 20.7587 7.6488 21.6175 7.6488C22.4763 7.6488 24.699 7.66963 24.699 7.66963C24.699 7.66963 25.6422 7.71238 25.6422 8.61353V33.4368C25.6422 33.4368 25.7046 33.8555 25.0945 34.2754C24.4843 34.6953 22.013 36.1391 22.013 36.1391C21.8873 36.1944 21.7515 36.2227 21.6142 36.2224C21.3842 36.2224 20.671 36.013 20.671 35.2785L20.6765 25.0633Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          className="col"
        >
          <a>
            <svg
              width="80"
              height="80"
              viewBox="-1 -2 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6665 8.60043V12.824L14.2081 8.60043H10.3442V6.42583L8.26621 4.39859C8.26452 4.35372 8.26367 4.30864 8.26367 4.26337C8.26367 2.26002 9.92706 0.635982 11.9789 0.635982C14.0308 0.635982 15.6942 2.26002 15.6942 4.26337V7.74913L17.1803 9.19835V4.26337C17.1803 2.26002 18.8437 0.635982 20.8956 0.635982C22.9475 0.635982 24.6109 2.26002 24.6109 4.26337C24.6109 4.30864 24.61 4.35372 24.6084 4.39859L22.5303 6.42583V8.60043H18.6665ZM28.7865 12.8242L29.9156 11.7209C31.1724 12.3024 32.0416 13.5524 32.0416 15.0006C32.0416 16.4488 31.1724 17.6987 29.9156 18.2803L28.7865 17.177H24.0166V12.8242H28.7865ZM24.0166 18.6276H27.8633C29.0241 19.2411 29.8124 20.4405 29.8124 21.8197C29.8124 23.6809 28.3767 25.2147 26.5275 25.423L24.0166 22.9734V18.6276ZM22.5303 23.5751L24.6084 25.6023C24.61 25.6472 24.6109 25.6923 24.6109 25.7375C24.6109 27.7409 22.9475 29.3649 20.8956 29.3649C18.8437 29.3649 17.1803 27.7409 17.1803 25.7375V22.2604L15.6942 20.8095V25.7375C15.6942 27.7409 14.0308 29.3649 11.9789 29.3649C9.92706 29.3649 8.26367 27.7409 8.26367 25.7375C8.26367 25.6923 8.26452 25.6472 8.26621 25.6023L10.3442 23.5751V21.4005H14.2081V17.1769L18.6665 21.4005H22.5303V23.5751ZM24.0166 11.3731V7.02725L26.5275 4.57771C28.3767 4.78596 29.8124 6.31979 29.8124 8.18102C29.8124 9.56021 29.0241 10.7596 27.8633 11.3731H24.0166ZM4.08814 17.177L2.95904 18.2803C1.70221 17.6987 0.833008 16.4488 0.833008 15.0006C0.833008 13.5524 1.70221 12.3024 2.95904 11.7209L4.08814 12.8242H8.85801V17.177H4.08814ZM5.01161 11.3731C3.85086 10.7596 3.0625 9.56021 3.0625 8.18102C3.0625 6.31979 4.49826 4.78596 6.34743 4.57771L8.85833 7.02725V11.3731H5.01161ZM8.85833 18.6276V22.9734L6.34743 25.423C4.49826 25.2147 3.0625 23.6809 3.0625 21.8197C3.0625 20.4405 3.85086 19.2411 5.01161 18.6276H8.85833Z"
                fill="#00DCF0"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
