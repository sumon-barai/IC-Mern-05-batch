import { useRef, useState } from "react";
import Rating from "../common/Rating";
import { postFeedback } from "../../api-service/feedback/feedback";
import { errorNotification, successNotification } from "../../utilities";

const initialFormData = {
  name: "",
  email: "",
  category: "",
  rating: 1,
  message: "",
};
function FeedbackForm() {
  const [form, setForm] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const categoryRef = useRef();
  const messageRef = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleRatingChange = (rating) => {
    setForm({
      ...form,
      rating,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // check point
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return;
    }

    try {
      setLoading(true);
      const result = await postFeedback(form);
      successNotification(
        { message: result },
        { position: "bottom-right", theme: "light" },
      );
      setForm(initialFormData);
      setLoading(false);
    } catch (error) {
      errorNotification({ message: error });
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-[#1a212f] shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
      <form className="p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name Field */}
          <label className="flex flex-col gap-2">
            <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
              Full Name
            </span>
            <input
              className="form-input flex w-full rounded-lg text-[#111318] dark:text-white dark:bg-[#252d3d] border border-[#dbdfe6] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 placeholder:text-[#616f89] px-4 text-base transition-all"
              placeholder="Enter your name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              ref={nameRef}
            />
          </label>
          {/* Email Field */}
          <label className="flex flex-col gap-2">
            <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
              Email address
            </span>
            <input
              className="form-input flex w-full rounded-lg text-[#111318] dark:text-white dark:bg-[#252d3d] border border-[#dbdfe6] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 placeholder:text-[#616f89] px-4 text-base transition-all"
              placeholder="name@company.com"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              ref={emailRef}
            />
          </label>
        </div>
        {/* Feedback Type Dropdown */}
        <label className="flex flex-col gap-2">
          <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
            Feedback Type
          </span>
          <select
            className="form-select flex w-full rounded-lg text-[#111318] dark:text-white dark:bg-[#252d3d] border border-[#dbdfe6] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base appearance-none transition-all"
            value={form.category}
            onChange={handleChange}
            name="category"
            ref={categoryRef}
          >
            <option value="">Select a category</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="general">General Feedback</option>
            <option value="other">Other</option>
          </select>
        </label>
        {/* Star Rating Component */}
        <div className="flex flex-col gap-2">
          <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
            Overall Rating
          </span>
          <div className="flex items-center gap-1 mt-1">
            <Rating star={form.rating} onStar={handleRatingChange} />
          </div>
        </div>
        {/* Message Textarea */}
        <label className="flex flex-col gap-2">
          <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
            Message
          </span>
          <textarea
            className="form-textarea flex w-full rounded-lg text-[#111318] dark:text-white dark:bg-[#252d3d] border border-[#dbdfe6] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-[#616f89] p-4 text-base resize-none transition-all"
            placeholder="Tell us more about your experience..."
            rows={4}
            onChange={handleChange}
            value={form.message}
            name="message"
            ref={messageRef}
          ></textarea>
        </label>
        {/* Action Button */}
        <button
          className={`w-full ${loading ? "bg-gray-200 " : "bg-primary hover:bg-primary/90"} text-white font-bold py-4 px-6 rounded-lg  transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2`}
          type="submit"
          disabled={loading}
        >
          <span className="material-symbols-outlined">send</span>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
