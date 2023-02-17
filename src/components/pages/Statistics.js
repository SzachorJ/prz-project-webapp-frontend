import SingleTrip from "../SingleTrip";
import CompareTrips from "../CompareTrips";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";
import CenterSide from "../CenterSide";
import CenterLeft from "../CenterLeft";
import CenterRight from "../CenterRight";
import { useState } from "react";

const Statistics = () => {
  const [showCompareSide, setShowCompareSide] = useState(false);

  return (
    <div>
      <div className="pages-stat">
        {/* Statystyki(Suche dane o przejazdach) */}
        <SingleTrip onClickSingle={() => setShowCompareSide(false)} />
        <CompareTrips onClickCompare={() => setShowCompareSide(true)} />
      </div>

      <div className="page-stat-content">
        <LeftSide />
        <CenterLeft />

        {showCompareSide && (
          <div className="page-stat-content">
            <CenterSide />
            <CenterRight />
            <RightSide />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
