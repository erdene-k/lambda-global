const FullScreenLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 min-h-screen">
    <strong className="text-blue-600 text-2xl animate-pulse">Loading</strong>
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
  )
}

export default FullScreenLoader