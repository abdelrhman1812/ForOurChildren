import { Link } from "react-router-dom"
import Memory from '../../../assets/images/Games/hand-drawn-memory-game-card_23-2150138543.avif'
const Item_Games = () => {
    return <>

        <div className="container-xxl item_games py-5">
            <div className="row">

                <div className="col-lg-3">
                    <div className="item shadow rounded-3 " >
                        <figure className="overflow-hidden">
                            <img src={Memory} className="w-100 rounded-top-2 " alt="Memory Card" />
                        </figure>
                        <div className="game-data p-3">
                            <Link className="btn btn-danger w-50 mx-auto d-block">العب الأن</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>
}

export default Item_Games