import PocketBase from 'pocketbase';
import { formatUTCDate } from '../utils/utils';
import React, { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import { MessageSquare, Star, X } from 'lucide-react'

const pb = new PocketBase('https://pb-feedback.br-holding.me');

const FeedbackPlugin = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 })
  const submitButtonRef = useRef(null)

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the 'F' key was pressed and the textarea is not focused
      if (event.key.toLowerCase() === 'f' && document.activeElement.tagName !== 'TEXTAREA') {
        setIsOpen((prev) => !prev);
      }
    };
  
    window.addEventListener('keydown', handleKeyPress);
  
   // Hide announcement after 5 seconds (reduced from 7)
   const timer = setTimeout(() => {
    setShowAnnouncement(false);
  }, 5000);
    

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearTimeout(timer);
    };
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (submitButtonRef.current) {
      const rect = submitButtonRef.current.getBoundingClientRect();
      setConfettiPosition({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
      });
    }
  
    setShowConfetti(true);
    setShowSuccess(true);
  
    // Prepare the data to send
    const feedbackData = {
      "project":"tunahan.at",
      "feedback": feedback,
      "timestamp": formatUTCDate(),
      "rating": rating,
    };

    try {
      const authData = await pb.admins.authWithPassword(import.meta.env.VITE_PB_EMAIL, import.meta.env.VITE_PB_PASSWORD);
      console.log(feedbackData)
      const record = await pb.collection('feedback').create(feedbackData);
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  
    setTimeout(() => {
      setShowConfetti(false);
      setShowSuccess(false);
      setIsOpen(false);
      setFeedback('');
      setRating(0);
    }, 3000);
    pb.authStore.clear();
  };

  return (
    <>
      {/* Updated Announcement with Background Overlay */}
      {showAnnouncement && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen z-50 pointer-events-auto hidden md:flex">
    <div className="text-white text-center text-sm sm:text-base transition-opacity duration-1000">
      <p>Press <span className="font-semibold">F</span> to toggle feedback</p>
    </div>
  </div>
)}


      {showSuccess && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-lg shadow-lg p-3 w-[280px] sm:w-[320px] md:w-[400px] transition-all duration-300 z-50"
          style={{ animation: 'fadeOut 0.5s ease-out 2.5s forwards' }}
        >
          <p className="text-center text-sm sm:text-base font-medium">Your feedback has been sent!</p>
        </div>
      )}
      
      <div className="fixed bottom-4 right-4 z-40">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
            initialVelocityY={20}
            confettiSource={{
              x: confettiPosition.x,
              y: confettiPosition.y,
              w: 0,
              h: 0
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          />
        )}
        <div
          className={`fixed md:absolute bottom-0 right-0 md:right-[calc(100%+1rem)] w-full md:w-[400px] transition-all duration-500 ease-in-out transform ${
            isOpen 
              ? 'opacity-100 translate-y-0 md:translate-x-0' 
              : 'opacity-0 translate-y-full md:translate-y-0 md:translate-x-20 pointer-events-none'
          }`}
          style={{ maxWidth: '100vw' }}
        >
          <div className="bg-white rounded-t-xl md:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 w-full max-h-[60vh] md:max-h-[calc(100vh-6rem)] overflow-y-auto mx-auto border">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close feedback form"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">Your Feedback</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">What's on your mind?</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-20 sm:h-24 md:h-32 px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="Tell us what you think..."
                  minLength="10"
                  required
                />
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    How would you rate your experience?
                  </p>
                  <div className="flex justify-start space-x-1.5 sm:space-x-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        className={`transition-all duration-200 ${
                          rating >= value ? 'text-yellow-400 scale-110' : 'text-muted-foreground hover:text-muted-foreground/80'
                        }`}
                      >
                        <Star
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${rating >= value ? 'fill-current' : 'fill-none'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  ref={submitButtonRef}
                  type="submit"
                  className="w-full bg-[#9fba9f] hover:bg-[#8a9f8a] text-white text-sm sm:text-base font-medium py-1.5 sm:py-2 md:py-2.5 px-4 rounded-full transition-colors"
                >
                  Send Feedback
                </button>
              </form>
            </div>
          </div>
        </div>

        <button
  onClick={() => setIsOpen(!isOpen)}
  className={`bg-[#9fba9f] hover:bg-[#8a9f8a] text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
    isOpen ? 'md:block hidden' : 'block'
  }`}
  aria-label="Open feedback form"
>
  <div className="flex items-center justify-center w-full h-full">
    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
  </div>
</button>


      </div>
    </>
  )
}

export default FeedbackPlugin
