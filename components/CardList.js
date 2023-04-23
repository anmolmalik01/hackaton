function CardList({ data }) {
    const cardStyle = {
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease-in-out",
      ":hover": {
        backgroundColor: "#f5f5f5",
      },
    };
    const cardTitleStyle = {
      fontSize: "1.5rem",
      fontWeight: "bold",
    };
    const cardTextStyle = {
      color: "#999",
      marginBottom: "0.5rem",
    };
  
    const cardList = Object.keys(data).map((key) => (
      <div key={key} style={cardStyle}>
        <h2 className="text-center" style={cardTitleStyle}>{data[key].name}</h2>
        <p style={cardTextStyle}>{data[key].email}</p>
        <p style={cardTextStyle}>{data[key].graduation_year}</p>
        <p style={cardTextStyle}>{data[key].college_name}</p>
        <p style={cardTextStyle}>
          {data[key].skills || data[key].description}
        </p>
      </div>
    ));
  
    const containerStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
    };
  
    return <div style={containerStyle}>{cardList}</div>;
  }
  
  export default CardList;
  