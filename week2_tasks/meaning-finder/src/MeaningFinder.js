import React, { useState } from 'react';


const MeaningFinder = () => {
  
  const [name, setName] = useState('')

  
  const handleButtonClick = async () => {
    
    if (name) {
      
      const response = await fetch(`https://api.agify.io/?name=${name}`);

            const data = await response.json();
      
            console.log(data);
    }
  };

  return (  
    <div>
      <h1>Meaning Finder</h1>
      
        <input 
        type="text" 
        value={name} 
        
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter a name"/>
      
            <button onClick={handleButtonClick}>
        Find Meaning
      </button>
    </div>
  );
};

export default MeaningFinder;