import { Inter } from "next/font/google";
import { useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredInput = feedbackInputRef.current.value;
    fetch(); // {email: 'test@test.com , text:'some feedback text'}
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
    </>
  );
}
