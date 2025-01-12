import {Link} from "react-router-dom";
import './agentcard.scss'

function AgentCard({item}){
    return(
        <>
         <article className="cta">
                <img src={item.img}  className="cta-img" alt='Re/max logo'/>
	<div className="cta__text-column">
		<h2>{item.name}</h2>
		<p>{item.info}</p>
        <Link to="/list">View Properties</Link>
	</div>
</article>
        </>
    )
}
export default AgentCard;