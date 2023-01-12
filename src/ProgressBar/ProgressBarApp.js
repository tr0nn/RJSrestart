import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function ProgressBarApp() {
  const [val, SetVal] = useState(10);
  const setValuer = e => SetVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>PROGRESS Bar</h1>
        <ProgressBar width={val} />
        <form>
          <label for="html">input Percentage</label>
          <input className="progressInput" type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
