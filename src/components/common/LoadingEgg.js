import { useEffect, useState } from "react";
import "../../assets/css/loading-egg.css";

function LoadingEgg(props) {
  const { handleResult } = props;

  const [hasInitialize, setHasInitialize] = useState(false);

  // https://codepen.io/borntofrappe/pen/zgYgKp
  useEffect(() => {
    initialize();
    //eslint-disable-next-line
  }, []);

  const initialize = () => {
    if (hasInitialize) return;
    setHasInitialize(true);

    const pokeball = document.querySelector("svg");
    const isResolved = Math.random() > 0.5;
    let isFetched = false;

    function handleIteration() {
      if (isFetched) {
        handleResult(!isResolved);
        pokeball.removeEventListener("animationiteration", handleIteration);
        pokeball.setAttribute("class", isResolved ? "success" : "failure");
      }
    }

    // to fake a delay create a boolean every second, and if the boolean is true switch the isFetched boolean to true
    const intervalID = setInterval(() => {
      const odds = Math.random() > 0.5;
      if (odds) {
        isFetched = true;
        clearInterval(intervalID);
      }
    }, 1000);

    // animate the pokeball to shake
    pokeball.setAttribute("class", "fetching");
    pokeball.addEventListener("animationiteration", handleIteration);
  };

  return (
    <>
      <svg viewBox="0 0 100 100" width="150" height="150">
        <g transform="translate(50 50) scale(0.8)">
          <g className="stars" transform="scale(0)">
            <path
              fill="#303030"
              stroke="#303030"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
            />
            <path
              fill="#303030"
              stroke="#303030"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
            />
          </g>
          <g transform="translate(0 50)">
            <g className="gravity">
              <g transform="translate(0 -50)">
                <g className="ball" transform="scale(1 1)">
                  <g className="bottom">
                    <path
                      fill="#ffffff"
                      stroke="#303030"
                      strokeWidth="5"
                      d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"
                    />
                  </g>
                  <g className="top">
                    <path fill="#f15d5f" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0" />

                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="0 15 9 9 20 100"
                      d="M -38 -0 a 38 38 0 0 1 76 0"
                    />

                    <path
                      fill="none"
                      stroke="#303030"
                      strokeWidth="5"
                      d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"
                    />
                  </g>

                  <g className="open" transform="scale(1 0)">
                    <path
                      fill="#303030"
                      stroke="#303030"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"
                    />
                    <path
                      fill="#303030"
                      stroke="#303030"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"
                    />
                  </g>

                  <g className="center">
                    <circle
                      fill="#ffffff"
                      stroke="#303030"
                      strokeWidth="5"
                      cx="0"
                      cy="0"
                      r="12"
                    />
                    <circle
                      fill="#ffffff"
                      stroke="#303030"
                      strokeWidth="3"
                      cx="0"
                      cy="0"
                      r="6"
                    />

                    <g className="inner" opacity="0">
                      <circle fill="#f15d5f" cx="0" cy="0" r="4.5" />
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
