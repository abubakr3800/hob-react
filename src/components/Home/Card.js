import { hover } from '@testing-library/user-event/dist/hover';
import img from '../../Images/LogoMin.png'

export default function Card (props) {
    const lan = localStorage.getItem("lan");
const more = () =>{
    if (lan === "ar")
        return "اضغط لمشاهدة المزيد...";
    else if (lan === "it")
        return "Clicca per vedere di più...";
    else
    return "Click to view more...";
}
const words = props.words;
    return(
            <div className="col">
                <div className="card h-100 hc" >
                        <img src={props.image || img} className="card-img-top" alt={props.title} style={{height:"250px"}}/>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={{color:"#485664",fontWeight:'bold'}}>{props.title}</h5>
                            <div>
                                {words &&
                                    <p className="text-secondary text-center">{words[0]} <span style={{color:"#eaa157"}}>{props.day}</span> {words[1]} <span style={{color:"#eaa157"}}>{props.night}</span> {props.night >1 ? words[3]: words[2]} </p>
                                }
                            </div>
                            <p className="card-text" style={{color:"#485664"}}>{props.description.slice(0,85)}...</p>
                        </div>
                        <div className="card-footer text-center" style={{backgroundColor:'#51acd8'}}>
                            <small className="text-light h6">{more()}</small>
                        </div>
                </div>
            </div>
    );
}