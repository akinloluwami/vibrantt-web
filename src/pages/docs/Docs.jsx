import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Docs.scss";
import { FaClone, FaArrowDown } from "react-icons/fa";

function Docs() {
  const [active, setActive] = useState(false);

  const copyToClipboard = (e) => {
    const text = "https://api.getvibrantt.io";
    navigator.clipboard.writeText(text);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  const endpoints = [
    {
      method: "GET",
      url: "/ping",
      description: "Check API server status",
      parameters: [],
    },

    {
      method: "GET",
      url: "/extractcolors",
      description:
        "Extracts the dominant color and create a color palette from an image",
      parameters: [
        {
          name: "image",
          type: "string",
          description: "The image URL",
          required: true,
          default: "null",
        },
        {
          name: "count",
          type: "number",
          description: "The number of colors to return",
          required: false,
          default: "8",
        },
      ],
    },
    {
      method: "GET",
      url: "/getcolor",
      description:
        "Get informaion about a color, such as the color name, the rgb/hex value, saturation, shades and more",
      parameters: [
        {
          name: "color",
          type: "string",
          description: "The hex code of the color",
          required: true,
          default: "null",
        },
      ],
    },
    {
      method: "GET",
      url: "/getshades",
      description: "Get a list of shades of a color",
      parameters: [
        {
          name: "color",
          type: "string",
          description: "The hex code of the color",
          required: true,
          default: "null",
        },
      ],
    },
    {
      method: "GET",
      url: "/generatepalette",
      description: "Generate beautiful color palettes",
      parameters: [
        {
          name: "hue",
          type: "string",
          description:
            "The hue of the palette. Options (monochrome, light, dark, [hex code], red, orange, green, blue, purple, pink,)",
          required: false,
          default: "random",
        },
        {
          name: "count",
          type: "number",
          description: "The number of colors to generate in the palette",
          required: false,
          default: "8",
        },
      ],
    },
  ];
  return (
    <div className="docs">
      <Navbar />
      <div className="doc_body">
        <div className="doc_header">
          <h1>Explore the API</h1>
          <p>
            Power your applications with the Vibrantt API that allows you to
            extract colors from images, get color info, generate beautiful
            palettes and do more.
          </p>
          <p>
            The API is 100% free <span>(for now) </span>
            with unlimited API calls, no sign up or credit card required.
          </p>
        </div>
        <div className="doc_content">
          <div className="status">
            <h1>Vibrantt API V1</h1>
            <div className="s">
              Status <div className="circle"></div>
            </div>
          </div>
          <div className="doc_item">
            <h2>Base URL</h2>
            <div className="doc_bar">
              <p>https://api.getvibrantt.xyz</p>
              <FaClone onClick={copyToClipboard} className="io" />
              <small className={active ? "active" : ""}>
                Copied to clipboard
              </small>
            </div>
            {endpoints.map((endpoint) => (
              <div className="doc_bar_main" key={endpoints.indexOf(endpoint)}>
                <div className="doc_bar_main_header">
                  <div className="left">
                    <h3>{endpoint.method}</h3>
                    <p>{endpoint.url}</p>
                    <i>{endpoint.description}</i>
                  </div>

                  {/* <div className="right">
                    <FaArrowDown className="io" />
                  </div> */}
                </div>
                <div className="doc_bar_main_body">
                  <div className="parameters">
                    {endpoint.parameters.length > 1 ? (
                      <h3>Parameters</h3>
                    ) : (
                      <h3>Parameter</h3>
                    )}

                    {endpoint.parameters.length === 0 ? (
                      <p>No parameters</p>
                    ) : (
                      <>
                        {endpoint.parameters.map((parameter) => (
                          <div
                            className="parameter"
                            key={endpoint.parameters.indexOf(parameter)}
                          >
                            <div className="parameter_name">
                              <p>{parameter.name}</p>
                              <i>{`(${parameter.type})`}</i>
                            </div>
                            <div className="parameter_description">
                              <p>{parameter.description}</p>
                              {parameter.required ? (
                                <p>required</p>
                              ) : (
                                <p>default: {parameter.default}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
