import "./Connect.css";


const Connect = () => {
  return (
    <section className="connect">
      <div className="connect-container">

        <div className="connect-image">
          <img src="./mobile-new.png" alt="mobile-new"/>
        </div>

        <div className="connect-content">
           <h2>
             Connect to financial bank
             <br />
              accounts in seconds
           </h2>
              <p>
            Verifrica prioritizes the interest of our users, with
            flexibility that enables you to link and exchange
            financial data from various financial institutions
            with the apps of your choice in a safe and secure
            manner.
            <br />
             With Verifrica you can also retrieve transactions,
            profits, balances and more from your customers'
            financial accounts.
              </p>

                  <button className="connect-btn">
            Get Started
          </button>
        </div>

      </div>


    </section>
  )
  

}

export default Connect;