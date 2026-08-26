import './ErrorMessage.css'

function ErrorMessage({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" className="error-message-retry" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
