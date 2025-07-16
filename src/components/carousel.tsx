import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Image Assets
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img.jpeg";
import img3 from "../assets/img.jpeg";
import img4 from "../assets/img.jpeg";
import img5 from "../assets/img.jpeg";

// Create array of image sources
const images = [img1, img2, img3, img4, img5];

const Carousel: React.FC = () => {
  return (
    <section
      style={{
        width: "100vw",
        background: "#1A237E", // Deep Blue Background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0 3rem 0",
        overflow: "hidden",
        marginBottom: "-2rem",
        marginTop: "-4rem",
        boxShadow: "0 4px 24px rgb(255, 255, 255)",
        zIndex: 10,
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "2.9rem",
          fontWeight: 800,
          color: "white",
          letterSpacing: "1.2px",
          marginBottom: "2rem",
          textAlign: "center",
          marginBottom: "-0.5rem",
          zIndex: 1,
        }}
      >
        SAM MEMORIES
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                background: "linear-gradient(145deg, #0D1B5A, #1A237E)",
                borderRadius: "18px",
                border: "2px solid #FFD700",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.25)",
                overflow: "hidden",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const div = e.currentTarget as HTMLDivElement;
                div.style.transform = "translateY(-4px)";
                div.style.boxShadow = "0 8px 28px rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                const div = e.currentTarget as HTMLDivElement;
                div.style.transform = "translateY(0)";
                div.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.25)";
              }}
            >
              <img
                src={src}
                alt={`SAM memory ${i + 1}`}
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
