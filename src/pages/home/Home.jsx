import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import axios from "axios";
import logo from "../../assets/v_icon.png";
import logo_wbg from "../../assets/v_white.png";
import { GiSpiderWeb } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
function Home() {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    "https://img.freepik.com/free-vector/landscape-alien-planet-with-futuristic-buildings-unusual-shapes-future-city_273525-834.jpg"
  );
  // const images = [
  //   "https://st.depositphotos.com/1752371/1250/i/950/depositphotos_12507644-stock-photo-a-sword-with-a-red.jpg",
  //   "https://us.123rf.com/450wm/yucalora/yucalora1905/yucalora190500021/123414458-a-gaming-background-nature-landscape-night-forest-with-magical-trees-and-a-lake-cartoon-style-vector.jpg",
  //   "https://thumbs.dreamstime.com/b/infinity-earth-16565763.jpg",
  // ];
  const [dominantColor, setDominantColor] = useState("");
  const [colorPalette, setColorPalette] = useState([]);
  const backendUrl = "http://localhost:2000";
  const fetchImage = async () => {
    axios
      .post(`${backendUrl}/extractcolors`, {
        image: imageUrl,
        count: 8,
      })
      .then((res) => {
        setDominantColor(res.data.dominantColor);
        setColorPalette(res.data.palette);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);
  const shades = [
    "#fefade",
    "#fff6b3",
    "#ffed7a",
    "#ffde38",
    "#fdca00",
    "#dda703",
    "#bd7e00",
    "#965903",
    "#7d460a",
    "#68380d",
  ];
  const colorShades = [
    "#ffedf0",
    "#ffdae1",
    "#ffb9c9",
    "#ff8aa4",
    "#fc114c",
    "#d1104d",
    "#b0073f",
    "#96093c",
    "#7a0b37",
  ];
  return (
    <div className="home">
      {loading ? (
        <div className="loading">
          <img src={logo} alt="" />
          <div className="loading_bar"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="hero">
            <h1 data-aos="fade-up">Colors like you've never seen</h1>
            <p>
              Extract colors from images, get color info, generate{" "}
              <span>beautiful</span> palettes and do more with the Vibrantt API
            </p>
            <Link to="/docs">
              <button>Get Started</button>
            </Link>
            <small>It's free, seriously.</small>
          </div>
          <div className="features">
            <h1>
              So, what can you do with <span>Vibrantt</span>? 👇🏽{" "}
            </h1>
            <div className="feature">
              <h2>Colors From Image</h2>
              <div className="image_colors">
                <div className="image">
                  <img src={imageUrl} alt="image" data-aos="fade-up" />
                </div>
                <div className="colors">
                  <div className="dom">
                    <div className="color">
                      <h3>Dominant Color</h3>
                      <div
                        className="box"
                        style={{ backgroundColor: `${dominantColor}` }}
                      >
                        <span>#fc114c</span>
                      </div>
                    </div>
                  </div>
                  <div className="pal">
                    <h3>Palette</h3>
                    <div className="color">
                      {colorPalette.map((color) => (
                        <div
                          className="box"
                          key={color}
                          style={{ backgroundColor: `${color}` }}
                          data-aos="zoom-in"
                          data-aos-delay={`${colorPalette.indexOf(color)}00`}
                        >
                          <span>{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature">
              <h2>Shades From Color</h2>
              <div className="color_shades">
                <div className="color">
                  <div
                    className="box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  ></div>
                </div>
                <div className="shades">
                  {colorShades.map((color) => (
                    <div
                      className="shade"
                      style={{ backgroundColor: `${color}` }}
                      key={color}
                      data-aos="zoom-in"
                      data-aos-delay={`${colorShades.indexOf(color)}00`}
                    >
                      <span>{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="feature">
              <h2>Color Info</h2>
              <div className="color_info">
                <div className="color">
                  <div
                    className="box"
                    data-aos="flip-left"
                    data-aos-delay="100"
                  ></div>
                </div>
                <div className="info">
                  <div className="info_item">
                    <h3>Name</h3>
                    <span>Supernova</span>
                  </div>
                  <div className="info_item">
                    <h3>HEX</h3>
                    <span>#fdca00</span>
                  </div>
                  <div className="info_item">
                    <h3>RGB</h3>
                    <span>253,202,0</span>
                  </div>
                  <div className="info_item">
                    <h3>HSL</h3>
                    <span>48, 100%, 50%</span>
                  </div>
                  <div className="info_item">
                    <h3>Saturation</h3>
                    <span>100%</span>
                  </div>
                  <div className="info_item">
                    <h3>Shades</h3>
                    {shades.map((shade) => (
                      <div
                        className="shade_box"
                        style={{ backgroundColor: `${shade}` }}
                        data-aos="fade-right"
                        data-aos-delay={`${shades.indexOf(shade)}00`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="want_more">
              <h2 data-aos="fade-right">Want More?</h2>
              <Link to="/docs" data-aos="fade-left">
                <button>Read Docs</button>
              </Link>
            </div>
          </div>
          <div className="footer" data-aos="fade-down">
            <div className="left">
              <img src={logo_wbg} alt="" />
              <p>I'm not sure what to write here..lorem ipsum dolor sit amet</p>
            </div>
            <div className="right">
              <a href="https://akinkunmi.dev" target="_blank">
                <button className="web">
                  {" "}
                  <GiSpiderWeb className="io" /> My website
                </button>
              </a>
              <a href="https://twitter.com/justxing_" target="_blank">
                <button>
                  {" "}
                  <FaTwitter className="io" /> Follow me
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
