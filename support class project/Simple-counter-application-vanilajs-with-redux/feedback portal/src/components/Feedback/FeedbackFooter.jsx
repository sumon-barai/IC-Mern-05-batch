function FeedbackFooter() {
  return (
    <div className="mt-8 flex items-center gap-8 text-gray-400 dark:text-gray-600">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-xl">verified_user</span>
        <span className="text-xs font-medium uppercase tracking-wider">
          Secure &amp; Private
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-xl">avg_pace</span>
        <span className="text-xs font-medium uppercase tracking-wider">
          24h Response Time
        </span>
      </div>
    </div>
  );
}

export default FeedbackFooter;
