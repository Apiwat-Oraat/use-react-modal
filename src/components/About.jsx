import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import image2 from "../assets/image2.png";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt,FaLinkedinIn   } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

Modal.setAppElement("#root");

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>About</h1>
        <p>information About Me</p>
        <button
          style={{
            marginTop: "40px",
            padding: "10px 10px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          Open Moddal
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="Modal"
          // overlayClassName="Overlay"
        >
          <div
            style={{
              fontSize: "25px",
              alignItems: "center",
              display: "flex",
              gap: "5px",
              padding: "10px 35px",
              justifyContent: "space-between",
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
          >
            <a href="*"><FaFacebook /></a>
            <a href=""><FaMapMarkerAlt /></a>
            <a href=""><FaLinkedinIn /></a>
            <a href=""><IoLogoWechat /></a>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "20px" }}>
              <img src={image2} alt="image2" style={{ width: "100px" }} />
            </div>

            <div style={{ textAlign: "left", marginLeft: "20px",paddingRight:"5px",paddingBottom:"10px",marginTop:"10px" }}>
              <div style={{ marginBottom: "10px" }}>
                <h2>Name Aphiwat Oraat</h2>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <p>Student ID 6706021410419</p>
                <p>คณะเทคโนโลยีและการจัดการอุตสาหกรรม</p>
                <p>สาขาเทคโนโลยีสารสนเทศ ITI </p>
                <p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                <p>ปี 2</p>
              </div>
            </div>
          </div>

          {/* <button onClick={closeModal}>Close</button> */}
        </Modal>
      </div>
    </div>
  );
}

export default About;
