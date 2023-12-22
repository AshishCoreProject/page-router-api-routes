import { Inter } from "next/font/google";
import { useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredInput = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredInput };

    // {email: 'test@test.com , text:'some feedback text'}
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }
  return (
    <>
      <h1 className="p-8 text-4xl">API routes</h1>
      <div className="pl-8">
        <form onSubmit={submitFormHandler} className="bg-yellow-200">
          <div className="py-4">
            <label className="mr-3" htmlFor="email">
              Your Email Address
            </label>
            <input
              ref={emailInputRef}
              className="border border-orange-400 "
              type="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <label className="mr-3" htmlFor="feedback">
              Your feedback
            </label>
            <textarea
              ref={feedbackInputRef}
              className="border border-orange-400 "
              id="feedback"
              rows="5"
            ></textarea>
          </div>
          <button className="p-2 bg-orange-400 rounded-lg">
            Send Feedback
          </button>
        </form>
      </div>
      <hr />
      <button
        className=" bg-slate-500 text-neutral-50"
        onClick={loadFeedbackHandler}
      >
        Load Feedback{" "}
      </button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
