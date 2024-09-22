function Link({ children }) {
  return (
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
