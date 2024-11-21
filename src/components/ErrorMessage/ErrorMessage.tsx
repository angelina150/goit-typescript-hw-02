type ErrorMessageProps = {
  message: string;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p style={{ color: "red" }}>{message}</p>;
};

export default ErrorMessage;
