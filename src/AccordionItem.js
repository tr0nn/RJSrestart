export default function AccordionItem(props) {
  const { handleClick, itemNumber, activeAccordionNumber, title, content } =
    props;
  return (
    <div onClick={() => handleClick(itemNumber)}>
      {title}
      {activeAccordionNumber === itemNumber ? <p>{content}</p> : null}
    </div>
  );
}
