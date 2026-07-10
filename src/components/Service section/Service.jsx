import "./Service.css";




const Service =() => {
  return (
    <section className="services">
      <div className="service-container">

        <div className="service-title">
         <h2>Building the future of financial
          <br/>
           services across Africa</h2>
        </div>

        <div className="service-grid">
            <div className="service-card">
              <img src="/icons/wallet.svg" alt="" />
              <h3>Personal Finances</h3>

              <p>
                Boost financial health in budgeting, saving,
                 and finances management with our detailed 
                 transaction history.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}


export default Service;


