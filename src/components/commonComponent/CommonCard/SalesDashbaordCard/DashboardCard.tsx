import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import "./card.scss";
import { Button } from "@mui/material";
import { ReactComponent as RightArrow } from "../../../../assets/icons/rightArrow.svg";

function DashboardCard(props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  more: any;
  image: any;
}) {
  return (
    <div className="total-value-card">
      <div className="upper-half">
        <div className="image-icon-box">
          <img src={props.image} />
        </div>
        <div className="card-text-area">
          <text className="card-text-heading">{props.title}</text>
          <text className="card-text-value">{props.value}</text>
        </div>
      </div>
      {props.more && (
        <div className="lower-div">
          <Button
          endIcon={<RightArrow style={{width:'5px', height: '10px'}}/>}
          sx={{ fontSize: "0.8vw",color:'#0662B7',textTransform:'none'}}
        >
          More
        </Button>


        </div>
      )}
    </div>
  );
}

export default DashboardCard;