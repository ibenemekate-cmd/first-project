
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
              <img src="/icons/download (1).svg" className="service-icon" />
              <h3>Personal Finances</h3>

              <p>
                Boost financial health in budgeting, saving,
                 and finances management with our detailed 
                 transaction history.
              </p>
              <a href="#">Learn more</a>
            </div>

            <div className="service-card">
              <img src="/icons/download (3).svg" />
              <h3>Consumer Payment</h3>

              <p>
                Assist people send money to their family and friends, pay bills and
                other payment transactions.
              </p>
              <a href="#">Learn more</a>
            </div>

            <div className="service-card">
              <img src="/icons/download (4).svg" />
              <h3>Lending</h3>
              <p>Help people and businesses access capital by issuing credit using our analyzed financial data</p>
              <a href="#">Learn more</a>
            </div>

            <div className="service-card">
              <img src="/icons/download (4).svg" />
              <h3>Wealth</h3>

              <p>Assist people in making sound financial choices, good business insight, and plan for the future.</p>

              <a href="#">Learn more</a>
            </div>

            <div className="service-card">
              <img src="/icons/download (6).svg" />
              <h3>Banking</h3>

              <p>Seamless banking experience, help users fund their bank accounts, manage savings and do more.</p>
              <a href="#">Learn more</a>
            </div>

            <div className="service-card">
              <img src="/icons/download (7).svg" />
              <h3>Business Finances</h3>

              <p>Assist businesses with budgeting, bill payment,
                 bookkeeping, and payroll.</p>
                 <a href="#">Learn more</a>
            </div>
        </div>
      </div>
    </section>
  )
}


export default Service;


