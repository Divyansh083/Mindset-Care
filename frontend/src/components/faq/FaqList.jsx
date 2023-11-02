import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";

const faqList = () => {
  return (
    <ul>
      {faqs.map((items, index) => (
        <FaqItem items={items} key={index} />
      ))}
    </ul>
  );
};

export default faqList;
