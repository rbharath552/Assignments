import { useRef } from "react";

const FeedbackForm = () => {
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const message = messageRef.current.value;

    alert(`Name: ${name} | Message: ${message}`);

    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Feedback Form</h2>

        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Name"
          className="border p-2 block mb-2"
        />

        <textarea
          ref={messageRef}
          placeholder="Enter Message"
          className="border p-2 block w-100 mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FeedbackForm;