import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Steve Jobs</h1>
      <p>
        “The people who are crazy enough to think <br />
        they can change the world are the ones who do.”
      </p>
      <img
        style={{ width: "300px", marginTop: "20px" }}
        src={image1}
        alt="image1"

      />
      <div>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 115px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            filter: "drop-shadow(5px 5px 10px gray)",
          }}
          onClick={openModal}
        >
          Open Modal
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="Modal"
          // overlayClassName="Overlay"
        >
          <h2>information</h2>
          <p>
            {" "}
            Steve Jobs: The Rebel Who Rewired the World
            ชายผู้ไม่ยอมเดินตามเส้นทางเดิม
            เขาเลือกสร้างเส้นทางใหม่ด้วยความกล้าและความเชื่อมั่น จากโรงรถเล็กๆ
            สู่เวทีโลก เขาเปลี่ยนเทคโนโลยีให้กลายเป็นศิลปะ
            เขาไม่เพียงสร้างผลิตภัณฑ์ แต่สร้างวัฒนธรรมแห่งนวัตกรรม “Think
            Different” ไม่ใช่แค่สโลแกน — มันคือคำประกาศของผู้เปลี่ยนโลก
            เขาคือคนที่กล้าฝัน และลงมือทำให้ฝันนั้นเป็นจริง ผู้ร่วมก่อตั้ง Apple
            Inc. ผู้พลิกโฉมวงการคอมพิวเตอร์ด้วย Macintosh ผู้สร้าง iPod, iPhone,
            iPad ที่กลายเป็นสัญลักษณ์แห่งยุค ผู้ปลุกชีวิตให้ Pixar และสร้าง Toy
            Story ผู้ที่เชื่อว่าการออกแบบคือหัวใจของประสบการณ์
          </p>

          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
