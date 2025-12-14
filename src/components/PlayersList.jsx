import React from "react";
import player from "../data/players";
import Players from "./Players";

const PlayersList = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px",
    backgroundColor: "#f7fafc",
    minHeight: "100vh",
  };

  const headerStyle = {
    width: "100%",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "3rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textTransform: "uppercase",
    letterSpacing: "3px",
    padding: "20px 0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>FIFA Player Cards</h1>
      {player.map((player, index) => (
        <Players key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
