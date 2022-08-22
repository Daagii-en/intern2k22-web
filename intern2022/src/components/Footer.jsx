import React, { useEffect } from "react";
import devImg1 from "../logo/davaajargal.jpg";
import devImg2 from "../logo/tsenguun.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function Footer() {
  useEffect(() => {
    Aos.init({
      offset: 50, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <div className="footer" id="contact">
      <div className="developer">
        <h1 data-aos="fade-up">Хөгжүүлсэн</h1>
        <div className="developer__dev">
          <div data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://www.facebook.com/tsenguun.otgonbaatar"
              target="_blank"
            >
              <img src={devImg2} alt="img" />
              <p>O.Tsenguun</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://www.facebook.com/profile.php?id=100050140822096"
              target="_blank"
            >
              <img src={devImg1} alt="img" />
              <p>U.Davaajargal</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer--header">
        <div className="footer__golomtlogo">
          <svg
            width="180"
            height="32"
            viewBox="0 0 180 32"
            xmlns="http://www.w3.org/2000/svg"
            className="gt-footer-logo"
          >
            <path
              d="M179.631 3.843h-4.923c-.838 1.134-2.58 2.635-4.02 3.002V3.843h-4.153v14.179h4.153v-7.374l.704-.3c1.742 1.702 3.785 4.738 4.32 7.674H180a20.134 20.134 0 00-1.876-5.071c-.938-1.702-2.01-3.137-3.216-4.371 1.843-1.068 3.886-3.136 4.723-4.737zm-12.426 22.953a7.42 7.42 0 01-.938 1.034c-.301.267-.536.4-.67.4-.201 0-.301-.133-.301-.367 0-.1.033-.233.067-.4l-.938.467c-.067.133-.1.3-.1.5 0 .234.1.4.234.567.167.167.368.234.67.234.301 0 .603-.1.904-.334.302-.2.603-.467.87-.8.235-.3.57-.701.905-1.135l.134.067c-.033.033-.067.134-.134.234-.335.5-.502.967-.502 1.3 0 .2.067.368.2.501.135.1.302.167.47.167.268 0 .77-.267 1.574-.767l.268-.834c-.134.1-.335.2-.57.3-.2.1-.368.167-.435.2h-.134c-.134-.033-.201-.134-.201-.267 0-.1.034-.334.168-.667.134-.367.268-.667.402-.967l.77-1.569-.837-.433c-.235.4-.536.8-.871 1.268-.302.466-.67.9-1.005 1.3zm-3.92 2.768c.47-1.034 1.207-2.468 2.245-4.303l-.837-.434c-.402.7-.838 1.268-1.206 1.735-.402.5-.77.834-1.072 1.068-.301.233-.502.366-.636.4h-.1c-.101 0-.135-.067-.135-.167s.168-.467.503-1.1l1.138-2.07-.87-.466c-.436.767-.871 1.568-1.34 2.435-.436.867-.637 1.468-.637 1.835 0 .267.034.434.168.567.1.1.235.167.368.167.537 0 1.307-.534 2.379-1.635l.067.067c-.168.267-.302.5-.436.7-.87 1.435-1.407 2.57-1.641 3.437l1.005.2c.2-.567.536-1.368 1.038-2.436zm-3.148-11.542h4.154V3.842h-4.154v4.004h-4.823V3.843h-4.153v14.179h4.153v-7.007h4.823v7.007zm-9.445 6.338c-.235 0-.502.067-.837.167-.302.133-.57.267-.838.467l.369.534c.067-.033.1-.067.167-.1.034 0 .067-.034.1-.067.302-.167.503-.233.603-.233.168 0 .269.1.269.3 0 .3-.235.8-.637 1.534-.57.968-1.038 1.468-1.44 1.468-.268 0-.369-.2-.369-.533 0-.167.034-.368.135-.567l-.972.4c-.033.133-.067.3-.067.467 0 .3.1.534.268.734.201.2.436.3.737.3.234 0 .503-.067.804-.2.268-.134.603-.334.971-.634.369-.3.804-.667 1.24-1.134.033-.034.1-.067.134-.134.066-.067.133-.1.167-.133.034-.067.1-.1.167-.167l.034.033-1.106 2.135.67.334c.235-.434.47-.767.67-1.034.168-.267.369-.467.503-.6a5.81 5.81 0 01.469-.4l.067-.068.067-.066.067.033c-.034.033-.034.033-.034.067l-.033.033c0 .034-.034.034-.034.067-.234.333-.335.633-.335.967 0 .6.268.901.804.901.502 0 1.105-.267 1.842-.767l.268-.834c-.2.133-.502.267-.904.467-.369.167-.603.267-.737.267-.167 0-.234-.167-.234-.5 0-.301.167-.668.502-1.102.368-.433.904-.834 1.675-1.267l-.369-.635c-.268.1-.636.3-1.105.6-.502.302-1.072.769-1.742 1.336-.134.1-.2.166-.2.166h-.068c.034-.066.134-.3.335-.667l.704-1.268-.536-.333c-.302.467-.704.9-1.106 1.3-.402.401-.77.735-1.038.935h-.067c.067-.1.1-.133.1-.167.034-.033.068-.066.068-.1l.066-.067c0-.033.034-.066.068-.133.335-.434.502-.867.502-1.234 0-.6-.268-.868-.804-.868zm-5.058-6.338h4.187a57.897 57.897 0 00-1.072-4.638c-.033-.133-.1-.367-.167-.667l-.536-1.702c-.268-.7-.502-1.368-.737-2.001-.268-.634-.502-1.201-.737-1.702a28.812 28.812 0 00-1.909-3.47h-3.952a18.05 18.05 0 00-1.072 1.802l-.335.667-.167.4c-.201.368-.335.768-.503 1.168-.67 1.502-1.273 3.17-1.809 5.072-.268.9-.502 1.7-.703 2.435-.201.734-.368 1.601-.57 2.636h4.187c.168-.868.335-1.669.536-2.403h4.924c.2.667.301 1.668.435 2.403zm-1.272-5.372h-3.283c.402-1.501 1.005-3.236 1.641-4.604.67 1.134 1.34 3.303 1.642 4.604zm-9.881-1.968c-1.474-2.002-5.494-2.136-8.173-1.768V7.012h7.47v-3.17H122.12v14.18h6.733c1.473 0 3.181-.268 4.454-1.035 2.244-1.368 2.613-4.237 1.173-6.305zm-3.35 2.569c-.033 1.2-1.005 1.801-2.78 1.801h-2.043l-.033-3.336c1.34-.167 4.856-.5 4.856 1.535zm-8.842 12.077c0-.267-.067-.468-.201-.634-.134-.2-.335-.267-.637-.267-.368 0-.736.1-1.172.3-.435.234-.837.5-1.24.868a4.653 4.653 0 00-.97 1.2 2.382 2.382 0 00-.369 1.268c0 .768.402 1.168 1.172 1.168.234 0 .47-.033.704-.067.234-.066.502-.133.804-.233.301-.1.67-.267 1.105-.467l.268-.834c-1.106.5-1.876.734-2.311.734-.168 0-.302-.034-.402-.134-.067-.1-.1-.2-.1-.3 0-.3.1-.634.334-1.068.201-.433.47-.8.804-1.1.302-.334.57-.468.804-.468.1 0 .134 0 .2.034.034.066.068.1.068.133 0 .067-.067.234-.168.434l.77.467c.168-.167.302-.334.403-.5.1-.2.134-.367.134-.534zm-11.79-18.316h4.588v-3.17h-13.33v3.17h4.588v11.01h4.154V7.012zm-9.982 19.483a5.703 5.703 0 00-.804.167l1.005-1.935-.837-.4-2.412 4.67.972.334.937-1.868a6.112 6.112 0 011.675-.367c-.268.5-.435.834-.502 1-.067.134-.1.301-.1.4 0 .235.066.401.234.535.134.133.301.2.536.2.267 0 .87-.267 1.775-.767l.234-.834c-.368.167-.536.267-.57.3-.4.2-.67.3-.803.3-.134 0-.201-.066-.201-.2 0-.1.067-.233.134-.4.033 0 .033-.067.067-.134s.034-.1.067-.133l1.105-2.269-.837-.367-.804 1.702c-.2 0-.502 0-.87.066zm-4.354-8.473h4.153V3.842h-4.153c-1.34 1.235-3.383 3.937-4.053 5.872h-.067c-.67-1.935-2.713-4.637-4.053-5.871h-4.153v14.179h4.153V9.214c1.106 1.368 2.244 4.404 2.713 6.439h2.747c.469-2.035 1.608-5.071 2.713-6.44v8.809zm-10.92 6.505c-.435 0-.904.2-1.473.567-.57.4-1.038.867-1.44 1.435-.402.533-.603 1.034-.603 1.467 0 .434.1.735.301.935.201.2.436.3.67.3.368 0 .77-.133 1.24-.467.435-.3.77-.6 1.004-.867l.134-.134h.067a.56.56 0 01-.067.167c-.067.066-.067.167-.1.2a1.617 1.617 0 00-.1.234c0 .1-.034.2-.034.3 0 .134.067.267.2.4.135.1.302.167.503.167.168 0 .436-.067.737-.234.335-.166.603-.333.837-.533l.268-.834c-.167.1-.401.233-.703.366-.302.134-.502.2-.57.2-.1 0-.167-.066-.167-.2 0-.133.1-.366.301-.733l1.072-2.102-.87-.467-.134.267c-.268-.3-.603-.434-1.072-.434zm-.736 1.068c.402-.267.737-.434 1.005-.434.2 0 .401.1.536.267l-.603 1.167c-.1.2-.302.434-.603.701-.268.267-.57.467-.871.667-.301.2-.502.3-.67.3-.235 0-.335-.166-.335-.533 0-.3.134-.668.469-1.068.301-.4.636-.767 1.072-1.067zM81.995 13.95c.335-.9.536-1.935.536-3.036 0-.3-.034-.634-.067-1-.067-.334-.134-.701-.201-1.035-.067-.334-.168-.634-.268-.934-.134-.3-.235-.567-.402-.867a6.83 6.83 0 00-2.613-2.636 8.368 8.368 0 00-1.875-.7c-1.34-.3-3.049-.3-4.388 0-.67.166-1.306.4-1.876.7-1.105.634-1.976 1.501-2.646 2.636-.134.3-.234.567-.369.867-.1.3-.2.6-.267.934-.068.334-.134.7-.201 1.035-.034.366-.067.7-.067 1 0 1.101.2 2.135.535 3.036a6.6 6.6 0 001.541 2.369 6.79 6.79 0 002.412 1.468c1.942.734 4.32.734 6.263 0a6.786 6.786 0 002.412-1.468 6.596 6.596 0 001.54-2.369zm-3.785-2.77l-.034.501-.134.868c-.167.6-.469 1.2-.971 1.735-.503.534-1.172.834-2.077.834h-.167c-.904 0-1.574-.3-2.077-.834a4.112 4.112 0 01-.971-1.735l-.134-.868-.033-.5v-.267c0-.667.1-1.334.301-2.001.2-.668.57-1.168 1.072-1.602a3.046 3.046 0 011.674-.567c.168-.033.335-.033.503 0 .67.033 1.206.233 1.675.567.502.434.87.934 1.071 1.602.201.667.302 1.334.302 2.001v.267zM66.654 22.826c-.435 0-.67-.3-.67-.834l-1.005.034c0 1 .436 1.468 1.307 1.468.737 0 1.373-.3 1.976-.968.034-.033.1-.133.234-.267l-.469-.4c-.536.634-.97.967-1.373.967zm-4.79-4.803h4.187V3.842c-2.143 0-4.019-.2-6.196.167-7.135 1.235-7.302 7.907-6.9 14.013h4.187c-.201-3.637-.268-7.674 1.54-9.575.938-1.001 1.943-1.068 3.183-1.068v10.643zm-7.402 3.202c-.636.334-1.206.8-1.775 1.368a7.241 7.241 0 00-1.34 2.002 5.445 5.445 0 00-.502 2.268c0 .5.067.935.268 1.302.167.366.435.667.77.867.302.167.67.267 1.072.267s.837-.067 1.273-.234c.435-.167.837-.367 1.139-.6l.267-.834c-.3.233-.67.4-1.071.567-.402.167-.77.233-1.106.233-.502 0-.87-.133-1.105-.367-.234-.266-.368-.667-.368-1.2 0-.601.167-1.235.435-1.869a6.516 6.516 0 011.105-1.768c.436-.534.904-.968 1.407-1.268.469-.333.905-.5 1.306-.5.201 0 .335.066.436.167.1.1.134.233.134.333 0 .234-.168.5-.469.834-.335.334-.636.6-.971.834l.87.5c.536-.333.938-.667 1.206-1.034.268-.333.402-.7.402-1.067s-.134-.668-.402-.934c-.301-.234-.67-.367-1.172-.367-.57 0-1.172.166-1.809.5zm-3.115-7.273c.369-.9.536-1.935.536-3.036 0-.3-.033-.634-.067-1-.033-.334-.1-.701-.201-1.035-.067-.334-.167-.634-.268-.934-.1-.3-.234-.567-.368-.867-.67-1.135-1.541-2.002-2.646-2.636a8.101 8.101 0 00-1.842-.7 11.51 11.51 0 00-1.91-.234h-.603c-.67.033-1.306.1-1.909.234-.67.166-1.273.4-1.842.7-1.105.634-1.976 1.501-2.646 2.636-.134.3-.268.567-.368.867-.134.3-.202.6-.302.934-.067.334-.134.7-.167 1.035-.068.366-.068.7-.068 1 0 1.101.168 2.135.503 3.036.368.9.871 1.702 1.54 2.369a6.645 6.645 0 002.446 1.468c.938.367 1.976.534 3.081.534h.067c1.106 0 2.144-.167 3.082-.534.971-.334 1.775-.834 2.412-1.468a6.185 6.185 0 001.54-2.369zm-3.751-2.77l-.067.501-.134.868c-.134.6-.469 1.2-.971 1.735-.47.534-1.173.834-2.044.834h-.2c-.872 0-1.575-.3-2.044-.834-.502-.534-.837-1.135-.971-1.735l-.168-.868-.033-.5v-.267c0-.667.1-1.334.335-2.001.2-.668.57-1.168 1.071-1.602.436-.334 1.005-.534 1.675-.567.134-.033.302-.033.47 0 .67.033 1.239.233 1.674.567.502.434.87.934 1.072 1.602.234.667.335 1.334.335 2.001v.267zm-16.68-4.17h5.794V3.844h-9.981v14.179h4.187V7.012zM0 21.853h21.915V0H0v21.852zM9.63 1.44c4.321-.634 8.374 1.702 10.15 5.405.334.734.803 1.868.803 2.702h-8.575l-3.08 5.605h-3.15l4.489-8.307h6.23c-1.206-1.735-3.249-2.77-5.493-2.77-3.819 0-6.9 3.07-6.9 6.84s3.081 6.84 6.9 6.84a6.947 6.947 0 005.46-2.67h-4.489l1.54-2.769h7.068a8.583 8.583 0 01-.838 2.77c-1.373 2.802-4.12 4.87-7.368 5.337-5.292.734-10.216-2.902-10.953-8.14C.654 7.044 4.338 2.173 9.63 1.439zm47.277 25.09c-.401.533-.603 1.034-.603 1.467 0 .434.1.735.335.935.202.2.402.3.637.3.368 0 .804-.133 1.24-.467.468-.3.803-.6 1.004-.867.067-.067.134-.1.167-.134h.034c0 .034-.034.1-.067.167-.034.066-.067.167-.1.2 0 .067-.034.134-.068.234-.033.1-.033.2-.033.3 0 .134.033.267.167.4.134.1.302.167.503.167.2 0 .435-.067.77-.234.302-.166.57-.333.838-.533l.267-.834c-.2.1-.435.233-.736.366-.268.134-.47.2-.536.2-.134 0-.168-.066-.168-.2 0-.133.1-.366.268-.733l1.072-2.102-.87-.467-.135.267c-.234-.3-.603-.434-1.038-.434-.436 0-.938.2-1.507.567-.57.4-1.039.867-1.44 1.435zm.637 1.2c0-.3.167-.667.469-1.067.301-.4.67-.767 1.071-1.067.402-.267.737-.434 1.005-.434.235 0 .402.1.57.267l-.637 1.167c-.1.2-.301.434-.57.701-.267.267-.569.467-.87.667-.302.2-.536.3-.67.3-.234 0-.368-.166-.368-.533zm4.656.234c-.135.267-.168.5-.168.634 0 .234.033.4.168.5.1.1.234.134.368.134.502 0 1.273-.5 2.311-1.535.301-.333.503-.5.503-.5l.066.033c-.435.6-.636 1.035-.67 1.301v.234c0 .133.067.267.201.334.101.1.201.133.335.133s.436-.1.804-.267a4.74 4.74 0 00.938-.5l.302-.834c-.235.1-.436.2-.637.3-.268.167-.435.234-.536.234-.134 0-.2-.067-.2-.2 0-.067.033-.167.066-.234l1.34-2.502-.837-.4c-.235.433-.503.8-.77 1.067-.235.3-.637.667-1.14 1.134-.401.367-.67.6-.803.7-.134.1-.235.168-.335.168-.1 0-.134-.067-.134-.167v-.034c0-.033.033-.133.1-.267l1.44-2.702-.837-.434c-.603 1.101-1.038 1.902-1.306 2.47-.268.533-.47.933-.57 1.2zm7.335-3.636l-2.378 4.67.97.334.905-1.868a6.067 6.067 0 011.709-.367c-.268.5-.436.834-.503 1-.067.134-.1.301-.1.4 0 .235.067.401.2.535.168.133.336.2.536.2.302 0 .905-.267 1.776-.767l.268-.834c-.369.167-.536.267-.603.3-.369.2-.637.3-.77.3-.134 0-.202-.066-.202-.2 0-.1.068-.233.134-.4l.067-.134c0-.067.034-.1.034-.133l1.139-2.269-.838-.367-.803 1.702c-.202 0-.503 0-.905.066-.402.067-.67.134-.77.167l1.005-1.935-.871-.4zm8.24 2.469c-.235.433-.369.867-.369 1.267 0 .768.402 1.168 1.206 1.168.234 0 .469-.033.703-.067.235-.066.503-.133.804-.233.268-.1.67-.267 1.105-.467l.268-.834c-1.139.5-1.909.734-2.344.734-.168 0-.268-.034-.369-.134-.067-.1-.134-.2-.134-.3 0-.3.134-.634.335-1.068.235-.433.503-.8.804-1.1.335-.334.603-.468.838-.468.066 0 .133 0 .167.034.067.066.067.1.067.133 0 .067-.034.234-.168.434l.804.467c.134-.167.268-.334.369-.5.1-.2.167-.367.167-.534 0-.267-.067-.468-.2-.634-.135-.2-.37-.267-.637-.267-.369 0-.77.1-1.206.3-.402.234-.837.5-1.24.868a6.63 6.63 0 00-.97 1.2zm15.876-4.27l.268-.268-.503-.4c-.502.634-.971.967-1.34.967-.435 0-.67-.3-.67-.834l-1.004.034c0 1 .435 1.468 1.306 1.468.703 0 1.373-.3 1.943-.968zm-6.063 5.437c-.1.267-.167.5-.167.634 0 .234.067.4.167.5a.56.56 0 00.369.134c.502 0 1.273-.5 2.31-1.535.336-.333.503-.5.537-.5l.033.033c-.402.6-.636 1.035-.67 1.301v.234c.034.133.1.267.202.334.1.1.234.133.334.133.168 0 .436-.1.838-.267.234-.1.435-.2.602-.3.034.2.134.333.235.4.168.1.335.167.536.167.536 0 1.139-.4 1.775-1.201a.573.573 0 01.201-.2c.034-.067.067-.1.1-.167.202 1.034.537 1.568 1.073 1.568.2 0 .435-.067.703-.267.234-.166.469-.334.636-.5l.268-.834c-.134.1-.368.233-.636.366-.268.134-.436.2-.57.2-.368 0-.602-.366-.67-1.1.838-.834 1.675-1.568 2.513-2.169l-.77-.4c-.302.267-.537.5-.704.634-.134.133-.302.3-.503.467-.167.167-.402.367-.67.634 0-.5-.033-1.101-.033-1.768l-.904-.468c-.034.267-.034.5-.034.735 0 .633.067 1.367.168 2.168-.47.5-.804.834-1.005 1.034-.201.167-.335.267-.469.267-.168 0-.268-.133-.268-.367 0-.1 0-.233.067-.4l-.435.233v-.066c-.201.1-.436.2-.604.3-.267.167-.468.234-.569.234-.1 0-.167-.067-.167-.2 0-.067.033-.167.066-.234l1.307-2.502-.804-.4c-.268.433-.503.8-.77 1.067-.268.3-.637.667-1.139 1.134-.402.367-.67.6-.804.7-.134.1-.268.168-.368.168-.067 0-.135-.067-.135-.167v-.034c0-.033.034-.133.101-.267l1.44-2.702-.837-.434c-.57 1.101-1.005 1.902-1.273 2.47-.301.533-.502.933-.603 1.2zm16.279-1.434c-.335.634-.503 1.134-.503 1.568 0 .333.1.6.369.834.234.2.502.3.803.3.436 0 .871-.133 1.273-.433.369-.268.704-.601.938-.968.268-.367.402-.667.402-.901 0-.067 0-.1.034-.133.033 0 .134-.034.301-.067.234-.067.436-.167.603-.267.134-.067.235-.133.301-.167l.068.067a9.234 9.234 0 00-.738 1.167c-.267.467-.401.868-.401 1.101 0 .4.234.601.67.601.234 0 .502-.067.803-.234.335-.133.603-.3.871-.533l.268-.834c-.57.433-1.005.634-1.206.634-.134 0-.2-.067-.2-.2 0-.068.033-.2.1-.368.1-.167.167-.333.234-.467l1.106-1.968-.77-.434c-.101.2-.302.434-.537.634-.234.2-.502.367-.804.5a3.108 3.108 0 01-.904.268c-.167-.134-.402-.234-.804-.234-.167 0-.368.1-.603.234-.2.133-.335.266-.335.4l.134.3c.034.067.067.1.134.1 0 0 .168 0 .47-.067h.066c.034.034.034.034.034.067v.033c0 .1-.1.268-.235.5-.167.268-.335.501-.569.702-.201.2-.402.3-.603.3-.1 0-.167-.067-.234-.134-.068-.066-.1-.166-.1-.3 0-.167.032-.3.066-.4.067-.134.134-.3.268-.534.47-.9.904-1.701 1.373-2.469l-.837-.4a30.741 30.741 0 00-1.306 2.202zm7.637-.267c-1.005.967-1.474 1.701-1.474 2.235 0 .2.067.367.2.5.168.167.403.234.704.234.268 0 .603-.067.971-.234a7.11 7.11 0 001.005-.533l.268-.834c-.234.167-.536.3-.904.467-.369.167-.603.233-.737.233-.1 0-.168 0-.2-.066-.068-.034-.068-.1-.068-.167 0-.234.402-.734 1.273-1.568.301-.267.536-.534.703-.734.134-.167.201-.4.201-.667 0-.4-.2-.601-.67-.601-.57 0-1.172.2-1.91.634l.303.534c.469-.234.736-.334.87-.367h.134c.067 0 .1.066.1.1 0 .067-.066.133-.133.233l-.302.3c-.1.1-.2.2-.334.3zm11.086.267c-.402.533-.603 1.034-.603 1.467 0 .434.1.735.302.935.234.2.435.3.67.3.368 0 .77-.133 1.239-.467.469-.3.804-.6 1.005-.867.067-.067.134-.1.167-.134h.034c0 .034-.034.1-.067.167-.034.066-.067.167-.1.2-.034.067-.034.134-.068.234-.033.1-.033.2-.033.3 0 .134.033.267.167.4.134.1.302.167.502.167.201 0 .436-.067.771-.234.302-.166.57-.333.838-.533l.234-.834c-.168.1-.402.233-.704.366-.301.134-.468.2-.569.2-.1 0-.134-.066-.134-.2 0-.133.1-.366.268-.733l1.072-2.102-.871-.467-.134.267c-.235-.3-.603-.434-1.038-.434-.436 0-.938.2-1.507.567-.57.4-1.039.867-1.44 1.435zm.637 1.2c0-.3.167-.667.469-1.067.301-.4.67-.767 1.071-1.067.402-.267.737-.434 1.005-.434.234 0 .402.1.57.267l-.637 1.167c-.1.2-.301.434-.57.701-.3.267-.569.467-.87.667-.302.2-.536.3-.67.3-.234 0-.368-.166-.368-.533zm6.598-3.402l-2.378 4.67.971.334.904-1.868a6.07 6.07 0 011.709-.367c-.268.5-.436.834-.503 1a1 1 0 00-.1.4c0 .235.067.401.2.535.168.133.336.2.537.2.268 0 .737-.167 1.407-.534.033.167.1.3.234.367.168.1.335.167.502.167.57 0 1.14-.4 1.81-1.201.066-.1.133-.167.167-.2.033-.067.1-.1.134-.167.167 1.034.536 1.568 1.071 1.568.201 0 .402-.067.67-.267.268-.166.47-.334.67-.5l.268-.834c-.167.1-.368.233-.636.366-.268.134-.47.2-.603.2-.369 0-.603-.366-.67-1.1.837-.834 1.675-1.568 2.512-2.169l-.77-.4c-.302.267-.503.5-.704.634l-.469.467c-.2.167-.402.367-.67.634-.033-.5-.067-1.101-.067-1.768l-.904-.468c0 .267-.033.5-.033.735 0 .633.067 1.367.167 2.168-.435.5-.77.834-.971 1.034-.201.167-.369.267-.47.267-.2 0-.3-.133-.3-.367 0-.1.033-.233.066-.4l-.402.2.034-.033c-.369.167-.57.267-.603.3-.368.2-.636.3-.77.3s-.201-.066-.201-.2c0-.1.033-.233.134-.4l.067-.134c0-.067.033-.1.033-.133l1.139-2.269-.87-.367-.771 1.702c-.201 0-.503 0-.905.066a6.06 6.06 0 00-.77.167l1.005-1.935-.871-.4zm8.977 2.335c-.436.867-.67 1.468-.67 1.835 0 .267.067.434.2.567.101.1.235.167.369.167.502 0 1.306-.534 2.378-1.635l.067.067c-.167.267-.301.5-.435.7-.871 1.435-1.44 2.57-1.675 3.437l1.038.2c.201-.567.536-1.368 1.005-2.436a78.199 78.199 0 012.278-4.303l-.838-.434c-.435.7-.837 1.268-1.239 1.735-.402.5-.737.834-1.038 1.068-.302.233-.503.366-.637.4h-.1c-.1 0-.134-.067-.134-.167s.167-.467.502-1.1l1.14-2.07-.872-.466c-.435.767-.904 1.568-1.34 2.435zm4.689 0c-.436.867-.637 1.468-.637 1.835 0 .267.034.434.168.567.1.1.234.167.368.167.503 0 1.306-.534 2.378-1.635l.067.067c-.167.267-.301.5-.435.7-.87 1.435-1.44 2.57-1.641 3.437l1.004.2c.202-.567.537-1.368 1.039-2.436.469-1.034 1.206-2.468 2.244-4.303l-.837-.434c-.402.7-.838 1.268-1.24 1.735-.368.5-.737.834-1.038 1.068-.301.233-.503.366-.636.4h-.1c-.102 0-.135-.067-.135-.167s.168-.467.502-1.1l1.14-2.07-.871-.466c-.436.767-.871 1.568-1.34 2.435zm12.795 0c-.436.867-.67 1.468-.67 1.835 0 .267.067.434.2.567.101.1.235.167.37.167.502 0 1.305-.534 2.378-1.635l.066.067c-.167.267-.301.5-.435.7-.871 1.435-1.44 2.57-1.641 3.437l1.005.2c.2-.567.535-1.368 1.005-2.436a77.888 77.888 0 012.277-4.303l-.838-.434c-.435.7-.837 1.268-1.239 1.735-.402.5-.737.834-1.038 1.068-.301.233-.502.366-.636.4h-.101c-.1 0-.134-.067-.134-.167s.168-.467.503-1.1l1.138-2.07-.87-.466c-.436.767-.871 1.568-1.34 2.435zm15.809-2.335l-2.412 4.67 1.005.334.905-1.868a6.115 6.115 0 011.674-.367c-.234.5-.402.834-.468 1-.068.134-.134.301-.134.4 0 .235.1.401.234.535.134.133.335.2.536.2.301 0 .87-.267 1.742-.767.066.166.167.3.301.433.234.234.57.334.971.334a3.35 3.35 0 001.809-.5 3.654 3.654 0 001.206-1.268c.268-.5.402-1.001.402-1.502 0-.433-.1-.8-.335-1.134-.235-.3-.57-.467-1.005-.467-.536 0-1.072.267-1.608.768l.47.567c.435-.4.77-.6 1.004-.6.134 0 .268.066.368.133.101.1.135.233.135.467 0 .233-.067.5-.168.8-.335-.133-.636-.166-1.005-.166-.335 0-.636.066-.87.233l.502.667c.2-.167.435-.267.737-.267.1 0 .234.034.402.067a3.776 3.776 0 01-.838 1.034c-.335.267-.67.4-1.004.4-.202 0-.369-.066-.436-.2a.67.67 0 01-.134-.433c0-.134.033-.3.067-.5l-.938.4v.033c-.2.1-.302.134-.335.167-.368.2-.636.3-.804.3-.1 0-.167-.066-.167-.2 0-.1.033-.233.134-.4 0 0 0-.067.033-.134.034-.067.067-.1.067-.133l1.139-2.269-.87-.367-.805 1.702c-.2 0-.468 0-.87.066-.436.067-.67.134-.804.167l1.004-1.935-.837-.4z"
              fill="#FFF"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <ul>
            <li className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-telephone icons-ft"
                viewBox="-5 -5 25 25"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <label>
                <p>1800-1646 (24/7)</p>
                <p>7011-1646 (Дотуур утас)</p>
              </label>
            </li>
            <li className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-envelope-fill icons-ft"
                viewBox="-5 -5 25 25"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <a
                className="footer--email"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:mail@golomtbank.com"
              >
                mail@golomtbank.com
              </a>
            </li>
            <li className="col">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-geo-alt icons-ft"
                  viewBox="-5 -5 25 25"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Golomt+Bank/@47.9153929,106.9039839,17z/data=!3m1!4b1!4m5!3m4!1s0x5d9692505ce5aa8d:0x567dee2f413e3046!8m2!3d47.9153893!4d106.9061726"
              >
                Голомт банкны Төв байр, Д.Сүхбаатарын талбай 5, Ш/х-22,
                Улаанбаатар 15160, Монгол улс
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}