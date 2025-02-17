
// import { useState, useEffect, useCallback } from 'react';
// import { MessageCircle, Send, Loader2 } from 'lucide-react';
// import './Chat.css';

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [ws, setWs] = useState(null);
//   const [requestId, setRequestId] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const wsConnection = new WebSocket('ws://localhost:3000/');

//     wsConnection.onmessage = (event) => {
//       const data = JSON.parse(event.data);
      
//       if (data.type === 'requestId') {
//         setRequestId(data.requestId);
//       } else if (data.type === 'response') {
//         setMessages(prev => [...prev, { text: data.message, type: 'response' }]);
//         setIsLoading(false);
//       } else if (data.type === 'error') {
//         setError(data.message);
//         setIsLoading(false);
//       }
//     };

//     wsConnection.onerror = () => {
//       setError('WebSocket connection error');
//       setIsLoading(false);
//     };

//     setWs(wsConnection);

//     return () => {
//       wsConnection.close();
//     };
//   }, []);

//   const sendMessage = useCallback(async () => {
//     if (!inputMessage.trim() || !requestId || isLoading) return;

//     try {
//       setIsLoading(true);
//       setError(null);
//       setMessages(prev => [...prev, { text: inputMessage, type: 'user' }]);

//       const response = await fetch('http://localhost:3000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           input_value: inputMessage,
//           requestId
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }

//       setInputMessage('');
//     } catch (err) {
//       setError(err.message);
//       setIsLoading(false);
//     }
//   }, [inputMessage, requestId, isLoading]);

//   return (
//     <div id='chat'>
//       <div className="chat-container">
//         <div className="chat-header">
//           <MessageCircle className="icon" />
//           <h1 className="chat-heading">NTPL AI Chat</h1>
//         </div>
//         <div className="messages-container">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`message ${message.type === 'user' ? 'user-message' : 'response-message'}`}
//             >
//               <p>{message.text}</p>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="loading">
//               <Loader2 className="loading-icon" />
//               <span>Processing...</span>
//             </div>
//           )}
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <div className="input-container">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Type your message..."
//             disabled={isLoading}
//           />
//           <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useCallback } from 'react';
// import { MessageCircle, Send, Loader2, X } from 'lucide-react';
// import './Chat.css';

// export default function Chat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{10}$/;
//     return emailRegex.test(email) && phoneRegex.test(phone);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsVerified(true);
//     } else {
//       alert('Please enter a valid email and phone number');
//     }
//   };

//   const sendMessage = useCallback(async () => {
//     if (!inputMessage.trim() || isLoading) return;

//     try {
//       setIsLoading(true);
//       setError(null);
//       setMessages((prev) => [...prev, { text: inputMessage, type: 'user' }]);

//       const response = await fetch('http://localhost:3000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           input_value: inputMessage,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }

//       const data = await response.json();

//       if (data.error) {
//         throw new Error(data.error);
//       }

//       setMessages((prev) => [...prev, { text: data.message, type: 'response' }]);
//       setInputMessage('');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [inputMessage, isLoading]);

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <div className="floating-chat-container">
//       {isOpen ? (
//         isVerified ? (
//           <div className="chat-window">
//             <div className="chat-header">
//               <MessageCircle className="icon" />
//               <h1 className="chat-heading">NTPL AI Chat</h1>
//               <button className="close-button" onClick={() => setIsOpen(false)}>
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="messages-container">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`message ${message.type === 'user' ? 'user-message' : 'response-message'}`}
//                 >
//                   <p>{message.text}</p>
//                 </div>
//               ))}
//               {isLoading && (
//                 <div className="loading">
//                   <Loader2 className="loading-icon" />
//                   <span>Processing...</span>
//                 </div>
//               )}
//             </div>
//             {error && <div className="error-message">{error}</div>}
//             <div className="input-container">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 disabled={isLoading}
//               />
//               <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} className="send-button">
//                 <Send size={20} />
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="verification-window">
//             <h2>Enter Your Details</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//               <button type="submit" className="submit-button">Start Chat</button>
//             </form>
//           </div>
//         )
//       ) : (
//         <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
//           <MessageCircle size={24} />
//         </button>
//       )}
//     </div>
//   );
// }
// import { useState, useEffect, useCallback } from 'react';
// import { MessageCircle, Send, Loader2, X } from 'lucide-react';
// import './Chat.css';

// export default function Chat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [userDetails, setUserDetails] = useState({ name: '', phone: '' });
//   const [currentDetailsStep, setCurrentDetailsStep] = useState('initial');
//   const [error, setError] = useState(null);

//   const validateName = (name) => name.trim().length >= 2;
//   const validatePhone = (phone) => /^\d{10}$/.test(phone);

//   useEffect(() => {
//     const sessionId = localStorage.getItem('sessionId');
//     if (sessionId) {
//       setCurrentDetailsStep('chat');
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen && messages.length === 0) {
//       addSystemMessage("Hi there! Welcome to our chat. Feel free to send your first message.");
//     }
//   }, [isOpen]);

//   const addSystemMessage = (text) => {
//     setMessages((prev) => [...prev, { text, type: 'system' }]);
//   };

//   const checkUserExists = async (phone) => {
//     try {
//       const response = await fetch(`https://jobportalapi.leanxpert.in/api/EnquiryForm?phone=${phone}`);
//       if (!response.ok) throw new Error("Error checking user existence.");
//       const data = await response.json();
//       return data.exists;
//     } catch (error) {
//       console.error("Error checking user:", error);
//       return false;
//     }
//   };

//   const submitUserDetails = async (details) => {
//     try {
//       const requestBody = {
//         isActive: true,
//         createdOn: new Date().toISOString(),
//         createdBy: "User",
//         updatedBy: "User",
//         updatedOn: new Date().toISOString(),
//         enquiryFormId: 0,
//         name: details.name,
//         mobileNo: details.phone,
//         emailId: "",
//         serviceTypeId: 0,
//         serviceType: " NTPL Chat Inquiry",
//         sourceId: 0,
//         source: "Website React",
//         message: "User started chat through AI assistant",
//         captcha: "123456",
//         enquiryFormIds: [0],
//       };

//       const response = await fetch("https://jobportalapi.leanxpert.in/api/EnquiryForm", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           accept: "*/*",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!response.ok) throw new Error("Failed to submit details.");

//       localStorage.setItem("sessionId", `session-${Date.now()}`);
//       return true;
//     } catch (error) {
//       setError(error.message);
//       return false;
//     }
//   };

//   const sendChatMessage = async (message) => {
//     try {
//       const response = await fetch('http://localhost:3000/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ input_value: message }),
//       });

//       if (!response.ok) throw new Error(`Failed to send message: ${response.status}`);

//       const data = await response.json();
//       if (data.error) throw new Error(data.error);

//       return data.message;
//     } catch (err) {
//       setError(err.message);
//       return null;
//     }
//   };

//   const sendMessage = useCallback(async () => {
//     if (!inputMessage.trim() || isLoading) return;

//     const trimmedMessage = inputMessage.trim();
//     setMessages((prev) => [...prev, { text: trimmedMessage, type: 'user' }]);
//     setInputMessage('');
//     setIsLoading(true);
//     setError(null);

//     try {
//       switch (currentDetailsStep) {
//         case 'initial':
//           addSystemMessage("Great! Before we continue, could you please tell me your name?");
//           setCurrentDetailsStep('name');
//           break;

//         case 'name':
//           if (validateName(trimmedMessage)) {
//             setUserDetails((prev) => ({ ...prev, name: trimmedMessage }));
//             addSystemMessage(`Nice to meet you, ${trimmedMessage}! What's your phone number?`);
//             setCurrentDetailsStep('phone');
//           } else {
//             addSystemMessage("Please enter a valid name (at least 2 characters).");
//           }
//           break;

//         case 'phone':
//           if (validatePhone(trimmedMessage)) {
//             const phoneExists = await checkUserExists(trimmedMessage);
//             if (phoneExists) {
//               addSystemMessage("This phone number is already registered. Please use a different number.");
//             } else {
//               const updatedUserDetails = { ...userDetails, phone: trimmedMessage };
//               setUserDetails(updatedUserDetails);
//               const detailsSubmitted = await submitUserDetails(updatedUserDetails);
//               if (detailsSubmitted) {
//                 addSystemMessage("Perfect! All your details are now complete. How can I help you today?");
//                 setCurrentDetailsStep('chat');
//               }
//             }
//           } else {
//             addSystemMessage("Please enter a valid 10-digit phone number.");
//           }
//           break;

//         case 'chat':
//           const responseMessage = await sendChatMessage(trimmedMessage);
//           if (responseMessage) {
//             setMessages((prev) => [...prev, { text: responseMessage, type: 'system' }]);
//           }
//           break;

//         default:
//           break;
//       }
//     } catch (err) {
//       addSystemMessage("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [inputMessage, currentDetailsStep, isLoading, userDetails]);

//   // Handler to listen for Enter key press
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <div className="floating-chat-container">
//       {isOpen && (
//         <div className="chat-window">
//           <div className="chat-header">
//             <MessageCircle className="icon" />
//             <h1 className="chat-heading">NTPL AI Chat</h1>
//             <button className="close-button" onClick={() => setIsOpen(false)}>
//               <X size={20} />
//             </button>
//           </div>

//           <div className="messages-container">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.type}-message`}>
//                 <p>{message.text}</p>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="loading">
//                 <Loader2 className="loading-icon" />
//                 <span>Processing...</span>
//               </div>
//             )}
//             {error && <div className="error-message">{error}</div>}
//           </div>

//           <div className="input-container">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyDown={handleKeyDown}  // Submit on Enter key
//               placeholder="Type your message..."
//               disabled={isLoading}
//             />
//             <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} className="send-button">
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//       <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
//         <MessageCircle size={24} />
//       </button>
//     </div>
//   );
// }
import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Send, Loader2, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './Chat.css';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });
  const [currentDetailsStep, setCurrentDetailsStep] = useState('initial');
  const [error, setError] = useState(null);

  const validateName = (name) => name.trim().length >= 2;
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      setCurrentDetailsStep('chat');
    }
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addSystemMessage("Hi there! Welcome to our chat. Feel free to send your first message.");
    }
  }, [isOpen]);

  const addSystemMessage = (text) => {
    setMessages((prev) => [...prev, { text, type: 'system' }]);
  };

  const checkUserExists = async (phone) => {
    try {
      const response = await fetch(`https://jobportalapi.leanxpert.in/api/EnquiryForm?phone=${phone}`);
      if (!response.ok) throw new Error("Error checking user existence.");
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error checking user:", error);
      return false;
    }
  };

  const submitUserDetails = async (details) => {
    try {
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        enquiryFormId: 0,
        name: details.name,
        mobileNo: details.phone,
        emailId: "",
        serviceTypeId: 0,
        serviceType: " NTPL Chat Inquiry",
        sourceId: 0,
        source: "Website React",
        message: "User started chat through AI assistant",
        captcha: "123456",
        enquiryFormIds: [0],
      };

      const response = await fetch("https://jobportalapi.leanxpert.in/api/EnquiryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to submit details.");

      localStorage.setItem("sessionId", `session-${Date.now()}`);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  const sendChatMessage = async (message) => {
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: message }),
        });

        if (!response.ok) throw new Error(`Failed to send message: ${response.status}`);

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        return data.response;
    } catch (err) {
        console.error(err.message);
        return null;
    }
};

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || isLoading) return;

    const trimmedMessage = inputMessage.trim();
    setMessages((prev) => [...prev, { text: trimmedMessage, type: 'user' }]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      switch (currentDetailsStep) {
        case 'initial':
          addSystemMessage("Great! Before we continue, could you please tell me your name?");
          setCurrentDetailsStep('name');
          break;

        case 'name':
          if (validateName(trimmedMessage)) {
            setUserDetails((prev) => ({ ...prev, name: trimmedMessage }));
            addSystemMessage(`Nice to meet you, ${trimmedMessage}! What's your phone number?`);
            setCurrentDetailsStep('phone');
          } else {
            addSystemMessage("Please enter a valid name (at least 2 characters).");
          }
          break;

        case 'phone':
          if (validatePhone(trimmedMessage)) {
            const phoneExists = await checkUserExists(trimmedMessage);
            if (phoneExists) {
              addSystemMessage("This phone number is already registered. Please use a different number.");
            } else {
              const updatedUserDetails = { ...userDetails, phone: trimmedMessage };
              setUserDetails(updatedUserDetails);
              const detailsSubmitted = await submitUserDetails(updatedUserDetails);
              if (detailsSubmitted) {
                addSystemMessage("Perfect! All your details are now complete. How can I help you today?");
                setCurrentDetailsStep('chat');
              }
            }
          } else {
            addSystemMessage("Please enter a valid 10-digit phone number.");
          }
          break;

        case 'chat':
          const responseMessage = await sendChatMessage(trimmedMessage);
          if (responseMessage) {
            setMessages((prev) => [...prev, { text: responseMessage, type: 'system' }]);
          }
          break;

        default:
          break;
      }
    } catch (err) {
      addSystemMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [inputMessage, currentDetailsStep, isLoading, userDetails]);

  // Handler to listen for Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="floating-chat-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <MessageCircle className="icon" />
            <h1 className="chat-heading">NTPL AI Chat</h1>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}-message`}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="loading">
                <Loader2 className="loading-icon" />
                <span>Processing...</span>
              </div>
            )}
            {error && <div className="error-message">{error}</div>}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} className="send-button">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
      <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
