import React, { useState } from "react";
import Faq from "./Faq";
import Title from "../common/Title";
// import styles from "../../styles/home/faqRow.module.css";

function FaqRow() {
  const [isVisible, setIsVisible] = useState(0);
  const data = [
    {
      number: "Q : 01",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      number: "Q : 02",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      number: "Q : 03",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      number: "Q : 04",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
  ];

  return (
    <div>
      <div>
        <Title
          title="FAQs"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt."
        />
      </div>
      <div>
        {data.map((value, index) => {
          return (
            <Faq
              key={index}
              number={value.number}
              question={value.question}
              answer={value.answer}
              index={index}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FaqRow;
