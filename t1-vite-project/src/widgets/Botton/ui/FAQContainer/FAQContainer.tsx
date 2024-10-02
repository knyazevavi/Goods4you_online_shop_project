import React, { useState } from "react";

import styles from "./FAQContainer.module.css";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How can I track the status of my order?",
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "",
  },
  {
    id: 3,
    question: "How can I return or exchange an item?",
    answer: "",
  },
];

const FAQContainer: React.FC = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setExpandedQuestions((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((questionId) => questionId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };
  return (
    <section
      id="faq"
      className={styles.faqContainer}
      aria-labelledby="faq-questions"
    >
      <div className={styles.faqContent}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <div className={styles.faqQuestions}>
          {questions.map((question) => (
            <div key={question.id} className={styles.questionItem}>
              <div className={styles.questionHeader}>
                <h3 className={styles.question}>{question.question}</h3>
                <button
                  onClick={() => toggleQuestion(question.id)}
                  className={styles.toggleButton}
                  aria-expanded={expandedQuestions.includes(question.id)}
                  aria-controls={`answer-${question.id}`}
                >
                  {expandedQuestions.includes(question.id) ? "×" : "+"}
                </button>
              </div>
              {expandedQuestions.includes(question.id) && (
                <p className={styles.answer}>{question.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQContainer;
