import { useState } from 'react';
import AccordionItem from './AccordionItem';

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const items = [
    {
      itemNumber: 6,
      title: 'Accordion-6',
      content: '---6----'
    },
    {
      itemNumber: 7,
      title: 'Accordion-7',
      content: '---7----'
    },
    {
      itemNumber: 8,
      title: 'Accordion-8',
      content: '---8----'
    }
  ];
  function openShowAccordion(num) {
    if (activeAccordionNumber === num) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(num);
    }
  }

  return (
    <div className="cardContainer">
      {/* ამ შემთხვევაში ხდება ხელით ჩამოწერა */}
      <div onClick={() => openShowAccordion(1)}>
        Accordion-1
        {activeAccordionNumber === 1 ? <p>----1-----</p> : null}
      </div>
      <div onClick={() => openShowAccordion(2)}>
        Accordion-2
        {activeAccordionNumber === 2 ? <p>----2----</p> : null}
      </div>
      <div onClick={() => openShowAccordion(3)}>
        Accordion-3
        {activeAccordionNumber === 3 ? <p>---3----</p> : null}
      </div>

      {/* ამ შემთხვევაში შეიქმნა AccordionItem კომპონენტი სადაც propსებით ვაწვდი ინფორმაციას*/}
      <AccordionItem
        handleClick={openShowAccordion}
        itemNumber={4}
        activeAccordionNumber={activeAccordionNumber}
        title="Accordion-4"
        content="---4----"
      />
      <AccordionItem
        handleClick={openShowAccordion}
        itemNumber={5}
        activeAccordionNumber={activeAccordionNumber}
        title="Accordion-5"
        content="---5----"
      />

      {/*შეიქმენა მასივი items სადაც ჩაყრილია ობიექტები, map ფუნქციით გადაუვლის 
      მასივს და იმდენ AccordionItem ელემენტს გააკეთებს რამდენის არის item.length*/}
      {items.map(item => (
        <AccordionItem
          handleClick={openShowAccordion}
          activeAccordionNumber={activeAccordionNumber}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default AccordionCard;
