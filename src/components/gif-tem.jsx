


const GifItem = ({ title, urlImg }) => {
    
  return (
    <div className="card">
      <img src={ urlImg } alt={ title } />   
    </div>
  )
};

export { 
    GifItem
};
