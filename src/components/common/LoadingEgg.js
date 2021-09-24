import { useEffect } from "react";
import "../../assets/css/loading-egg.css";

function LoadingEgg() {
  // https://codepen.io/borntofrappe/pen/zgYgKp
  useEffect(() => {
    const pokeball = document.querySelector("svg");

    // boolean faking the resolution/rejection of an hypothetical fetch request
    const isResolved = Math.random() > 0.5;
    // boolean to delay the fetch request
    let isFetched = false;

    // function called for every iteration of the .shake animation
    function handleIteration() {
      // if the fetch request is complete, remove the event listener for the calling function
      // set a class on the svg according to the boolean describing the resolution/rejection
      if (isFetched) {
        pokeball.removeEventListener("animationiteration", handleIteration);
        pokeball.setAttribute("class", isResolved ? "success" : "failure");
      }
    }

    // to fake a delay create a boolean every second, and if the boolean is true switch the isFetched boolean to true
    const intervalID = setInterval(() => {
      const odds = Math.random() > 0.75;
      if (odds) {
        isFetched = true;
        clearInterval(intervalID);
      }
    }, 1000);

    // animate the pokeball to shake
    pokeball.setAttribute("class", "fetching");
    // call the function for every iteration of the pokeball
    // ! both the shake and the pulse animation trigger the event
    // as they have the same duration this should not create issues, but be aware of that
    pokeball.addEventListener("animationiteration", handleIteration);
  }, []);

  return (
    <>
      <svg viewBox="0 0 100 100" width="150" height="150">
        <g transform="translate(50 50) scale(0.8)">
          <g className="stars" transform="scale(0)">
            <path
              fill="#303030"
              stroke="#303030"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              d="M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
            ></path>
            <path
              fill="#303030"
              stroke="#303030"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              d="M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
            ></path>
          </g>
          <g transform="translate(0 50)">
            <g className="gravity">
              <g transform="translate(0 -50)">
                <g className="ball" transform="scale(1 1)">
                  <g className="bottom">
                    <path
                      fill="#ffffff"
                      stroke="#303030"
                      stroke-width="5"
                      d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"
                    ></path>
                  </g>
                  <g className="top">
                    <path
                      fill="#f15d5f"
                      d="M -47.5 0 a 47.5 47.5 0 0 1 95 0"
                    ></path>

                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-dasharray="0 15 9 9 20 100"
                      d="M -38 -0 a 38 38 0 0 1 76 0"
                    ></path>

                    <path
                      fill="none"
                      stroke="#303030"
                      stroke-width="5"
                      d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"
                    ></path>
                  </g>

                  <g className="open" transform="scale(1 0)">
                    <path
                      fill="#303030"
                      stroke="#303030"
                      stroke-width="5"
                      stroke-linejoin="round"
                      d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"
                    ></path>
                    <path
                      fill="#303030"
                      stroke="#303030"
                      stroke-width="5"
                      stroke-linejoin="round"
                      d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"
                    ></path>
                  </g>

                  <g className="center">
                    <circle
                      fill="#ffffff"
                      stroke="#303030"
                      stroke-width="5"
                      cx="0"
                      cy="0"
                      r="12"
                    ></circle>
                    <circle
                      fill="#ffffff"
                      stroke="#303030"
                      stroke-width="3"
                      cx="0"
                      cy="0"
                      r="6"
                    ></circle>

                    <g className="inner" opacity="0">
                      <circle fill="#f15d5f" cx="0" cy="0" r="4.5"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default LoadingEgg;
