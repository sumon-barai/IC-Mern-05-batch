import FeedbackFooter from "../components/Feedback/FeedbackFooter";
import FeedbackForm from "../components/Feedback/FeedbackForm";
import FeedbackHeader from "../components/Feedback/FeedbackHeader";

const Feedback = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
      <FeedbackHeader />
      <FeedbackForm />
      <FeedbackFooter />
    </main>
  );
};

export default Feedback;
