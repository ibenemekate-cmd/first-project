import "./Solution.css";

const Solution = () =>{
  return (
    <section className="solution">
      <div className="solution-container">

        <div className="solution-title">
        <h2>Beautiful user experience 
          <br />
           for customers</h2>

           <p>
            With a single API, you can access a wide variety of high - quality financial data from various financial institutions.You will also gain beautiful customer experiences with Verifrica.
           </p>

           <button className="solution-btn">Get started</button>

           </div>

           <div className="solution-image">
            <div className="phone">
               <img src="/Prototype.gif" alt="prototype" className="phone-screen" />
                 <img src="/phone.png" alt="phone frame" className="phone-frame" />
            </div>
           </div>
      </div>


    </section>
  )
}





export default Solution;