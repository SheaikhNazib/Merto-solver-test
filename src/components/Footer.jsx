"use client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="left">
          <h2 className="headline">Got Questions? <br/>Call us !</h2>

          <ul className="contact">
            <li>
              <span className="iconCircle" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.1 2 4.8 3.6 2.6 6.2C2.2 6.8 2.3 7.6 2.9 8c.6.4 1.3.3 1.8-.2C7 4.9 9.4 3.5 12 3.5c2.6 0 5 .9 7.2 2.8.5.4 1.2.4 1.7 0 .6-.4.7-1.2.3-1.8C19.1 3.6 15.9 2 12 2z"/><path d="M12 22c3.9 0 7.1-1.6 9.3-4.2.4-.6.3-1.4-.3-1.8-.6-.4-1.4-.3-1.8.3C17 19.1 14.6 20.5 12 20.5c-2.6 0-5-.9-7.2-2.8-.5-.4-1.2-.4-1.7 0-.6.4-.7 1.2-.3 1.8C4.9 20.4 8.1 22 12 22z"/></svg>
              </span>
              <div>
                <div className="muted">Head office: Metro Solver Limited</div>
                <div className="small">Grantham Road, London E12</div>
                <div className="small">5LX, United Kingdom</div>
              </div>
            </li>

            <li>
              <span className="iconCircle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5l-5.2-.7c-.5 0-1-.2-1.4-.6L11 11.1c-2 1-3.6 2.6-4.6 4.6l3.9 3.4c.4.4.6.9.6 1.4L7.5 23C5.3 22 3.5 20.3 2.5 18l1.9-1.9c.3-.3.4-.8.2-1.2C4 13.7 3 11.2 3 8.5 3 7.7 3 6 3.8 5.2 4.6 4.4 6.3 4 7.1 4c3.6 0 6.6 2.2 8 5.2 1.4 3 1.2 6.7-.3 9.6z"/></svg>
              </span>
              <div className="small">+447936 455446</div>
            </li>

            <li>
              <span className="iconCircle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v.2l10 6 10-6V6c0-1.1-.9-2-2-2z"/><path d="M22 8.2l-10 6-10-6V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8.2z"/></svg>
              </span>
              <div className="small">official@metrosolver.com</div>
            </li>
          </ul>

          <div className="currency">
            <label className="muted">Country Currency</label>
            <div className="selectWrap" role="group" aria-label="Country Currency">
              <span className="flag" aria-hidden>🇬🇧</span>
              <select className="select">
                <option>GBP - British Pound</option>
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Our Team</li>
              <li>User Profile</li>
              <li>White Labelling</li>
            </ul>
          </div>

          <div className="col">
            <h4>About Us</h4>
            <ul>
              <li>Our Stories</li>
              <li>Career</li>
              <li>Send Message</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Start Earning</li>
            </ul>
          </div>

          <div className="col">
            <h4>Services</h4>
            <ul>
              <li>Digital Marketing</li>
              <li>Creative Writing Solution</li>
              <li>Web & Software Development</li>
              <li>E-Commerce Solution</li>
              <li>Graphic Design</li>
              <li>Multimedia & Video Editing</li>
              <li>Merchandise</li>
              <li>Premium Website</li>
              <li>Premium Domains</li>
              <li>Special Combo</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer{
          background: linear-gradient(180deg, #2a1a3a 0%, #1b0f26 100%);
          color: #fff;
          padding: 56px 32px;
          font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
        }

        .content{
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 48px;
        }

        .left{
          flex: 0 0 36%;
        }

        .headline{
          font-size: 34px;
          line-height: 1.05;
          margin: 0 0 20px 0;
          color: #fff;
          font-weight: 700;
        }

        .contact{
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact li{
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .icon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          min-height: 28px;
        }

        .iconCircle{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          min-height: 36px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(217,199,248,0.08), rgba(185,154,230,0.04));
          color: #e6d7ff;
        }

        .muted{
          color: #d7c6f0;
          font-weight: 600;
        }

        .small{
          color: rgba(255,255,255,0.85);
          font-size: 14px;
        }

        .currency{
          margin-top: 18px;
        }

        .selectWrap{
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 12px 16px;
          border-radius: 10px;
          min-width: 260px;
          position: relative;
        }

        .flag{
          font-size: 20px;
        }

        .select{
          background: transparent;
          color: #fff;
          border: none;
          outline: none;
          font-size: 14px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding-right: 18px;
        }

        .selectWrap::after{
          content: '';
          position: absolute;
          right: 14px;
          width: 10px;
          height: 10px;
          border-right: 2px solid rgba(255,255,255,0.7);
          border-bottom: 2px solid rgba(255,255,255,0.7);
          transform: rotate(45deg);
          pointer-events: none;
          top: 50%;
          margin-top: -6px;
        }

        .right{
          flex: 1 1 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .col h4{
          margin: 0 0 12px 0;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .col ul{
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .col li{
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          cursor: pointer;
        }

        @media (max-width: 880px){
          .content{flex-direction: column;}
          .left{flex: none;width:100%;}
          .right{grid-template-columns: repeat(2, 1fr);}
          .headline{font-size:28px}
        }

        @media (max-width: 520px){
          .right{grid-template-columns: 1fr;}
          .selectWrap{min-width:unset;width:100%}
        }
      `}</style>
    </footer>
  )
}

export default Footer
