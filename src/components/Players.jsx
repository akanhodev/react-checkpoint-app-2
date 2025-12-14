import React from "react";

const Players = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "280px",
    margin: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
  };

  const imageContainerStyle = {
    position: "relative",
    height: "300px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const cardBodyStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "20px",
  };

  const nameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const infoRowStyle = {
    fontSize: "0.9rem",
    color: "#4a5568",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#667eea",
  };

  const jerseyStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#667eea",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 10,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyle = isHovered
    ? {
        transform: "translateY(-10px)",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
      }
    : {};

  return (
    <div
      style={{ ...cardStyle, ...hoverStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt={name} style={imageStyle} />
        <div style={jerseyStyle}>{jerseyNumber}</div>
      </div>
      <div style={cardBodyStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={infoRowStyle}>
          <span style={labelStyle}>Team:</span>
          <span>{team}</span>
        </div>
        <div style={infoRowStyle}>
          <span style={labelStyle}>Nationality:</span>
          <span>{nationality}</span>
        </div>
        <div style={infoRowStyle}>
          <span style={labelStyle}>Age:</span>
          <span>{age} years</span>
        </div>
      </div>
    </div>
  );
};

// Default Props
Players.defaultProps = {
  name: "Unknown Players",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl:
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=500&fit=crop",
};

export default Players;
