import React, {useState} from 'react';

const Form = () => {
    const [userInput, setUserInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
        <input className="search-form__input" type="text" placeholder="Search" value={userInput} onChange={e => setUserInput(e.target.value)}  />
        <button className="search-form__btn" type="submit" >Send</button>
    </form>
  );
}

export default Form;