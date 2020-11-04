import React from "react";
import "./Business.css";
function Business() {
  return (
    <>
      <div className="Business">
        <div className="Child1">
          <i class="fab fa-simplybuilt"></i>
          <br />
          <h>Build for developers</h>
          <p>Landkit is built to make your life easier.</p>
          <p>variables,build tooling,documentation,</p>
          <p>and resuable compoents.</p>
        </div>

        <div className="Child2">
          <i class="fas fa-th-large"></i>
          <br />
          <h>Desined to be Modern</h>
          <p>Design with the latest design trends in mind,</p>
          <p> Landkit feels modern,minimal and beautiful.</p>
        </div>
        <div className="Child3">
          <i className="fas fa-code"></i>
          <br />
          <h>Documentation For Everything</h>
          <p>We have written extensive documentation</p>
          <p>for components and tools,So you never have to</p>
          <p>reverse Engineer anything.</p>
        </div>
      </div>

      <div>
        <ul className="Child4">
          <li className="Li"> Airbnb </li>
          <li className="Li"> CoinBase</li>
          <li className="Li"> dribble </li>
          <li className="Li"> Pinterest </li>
          <li className="Li">Netflix</li>
          <li className="Li"> Pinterest </li>
        </ul>
      </div>
    </>
  );
}
export default Business;
