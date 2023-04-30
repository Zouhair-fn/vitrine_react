import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import CopyToClipboard from "react-copy-to-clipboard";


const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>07 rue fodere</p>
              <p>06300</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0606560854" className="over">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone coplié !")}
                >
                  06 09 39 00 36
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="zoufan9@gmail.com" className="over">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email coplié !")}
                >
                  zoufan9@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          < SocialNetwork />
          <div className="credits">
            <p>Zouhair Fanan - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-3"} />
      </div>
    </main>
  );
};

export default Contact;
