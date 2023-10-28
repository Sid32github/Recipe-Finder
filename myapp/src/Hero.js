import flipkart from './flipkart.png'
import amazon from './amazon.png'
import shoe from './shoe.png'
const Hero=()=>{
return<main className="hero container">
<div className="hcot">
    <h1>RUN WITH THE BEST SHOES</h1>
    <p>Your feet deserve the best and were here to help you withn our shoes.Your feet deserve the best and were here to help you withn our shoes.</p>
    <div className="hbtn">
        <button>Book Now
        </button>
        <button>Shop Now
        </button>
    </div>
    <div className="shop"><p>Available On</p>
    <div className="flip">
        <img src={flipkart}   alt="flp"/>
        <img src={amazon}   alt="flp"/>
    </div>
    </div>
</div>
<div >
<img src={shoe} className="himg"  alt="flp"/>
</div>
</main>
   
}
export default Hero;