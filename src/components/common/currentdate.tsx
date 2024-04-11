const CurrentDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
  });

  // Return the date inside a span (or just return the text)
  return <span>{formattedDate}</span>;
};

export default CurrentDate;