import React, { useState } from "react";
import "./card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
const Card = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpenedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
      ;
    </AnimateSharedLayout>
  );
};

//CompactCard

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow
      }}
      onClick={setExpanded}
      LayoutId="expendableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          Value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}
/* Expended card*/
function ExpenedCard({ param, setExpanded }) {
  const data = {
    options: {
      Chart: {
        type: "area",
        height: "auto"
      },
      dropShadow: {
        enabled: false,
        enabledOnseries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35
      },
      fill: {
        colors: ["#fff"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["white"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      grid: {
        show: true
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      }
    }
  };
  return (
    <div
      className="ExpendedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow
      }}
      LayoutId="expendableCard"
    >
      <div style={{alignSelf: "flex-end",cursor:'pointer',color:'white'}}>
        <UilTimes onClick={setExpanded} 
       
        />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </div>
  )
}

export default Card;
