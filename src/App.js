import { useState } from 'react';
import { sculptureList } from './data';
import { useEffect } from 'react';

function Demo() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //
  useEffect(() => {
    console.log(index);
  }, [index]); // როდესაც [] არის ცარიელი useEffect გაეშვება მხოლოდ ერთხელ პირველჯერზე.
  // [index] ამ დროს useEffect გაეშვება პირველ ჯერზე და მხოლოდ მაშინ როდესაც index state შეიცვლება.
  // თუ [] არ უწერია მაშინ useEffect გაეშვება ყოველ რენდერინგის დროს

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleUndoClick() {
    setIndex(index - 1);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>next</button>
      <button onClick={handleUndoClick}>undo</button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img src={sculpture.url} alt={sculpture.alt} />

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'show'} details
      </button>

      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default Demo;
