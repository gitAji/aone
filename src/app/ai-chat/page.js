"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import ScrollDownArrow from "@/components/ScrollDownArrow";

// Define constants for token handling
const AI_ACCESS_TOKEN_KEY = "ai_access_token";
const EXPECTED_AI_TOKEN =
  process.env.NEXT_PUBLIC_AI_ACCESS_TOKEN ||
  "xai-lBUC5mrjJS0H9yLJUAGdJufLBXJlW8ANzwD7uBRIH596YXpcKoAwXJAWOFxPfxjt8jlDIxGHQ3JHo8W";

const AIChatPage = () => {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const messagesEndRef = useRef(null);
  const conversationAreaRef = useRef(null);
  const chatContainerRef = useRef(null);

  // ✅ Check login status on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(AI_ACCESS_TOKEN_KEY);
    if (storedToken === EXPECTED_AI_TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  // ✅ Handle scroll to show/hide scroll-to-bottom button
  const handleConversationScroll = () => {
    if (conversationAreaRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = conversationAreaRef.current;
      // Show button if not at the very bottom
      if (scrollHeight - scrollTop > clientHeight + 100) { // 100px buffer
        setShowScrollToBottom(true);
      } else {
        setShowScrollToBottom(false);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToChat = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Simulated login
  const handleLogin = () => {
    localStorage.setItem(AI_ACCESS_TOKEN_KEY, EXPECTED_AI_TOKEN);
    setIsLoggedIn(true);
    setConversation([
      { type: "ai", text: "Welcome! How can I assist you today?" },
    ]);
  };

  // ✅ Handle sending a question
  const handleAskQuestion = async () => {
    if (!question.trim()) return; // prevent empty questions

    const newConversation = [...conversation, { type: "user", text: question }];
    setConversation(newConversation);
    setQuestion("");
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem(AI_ACCESS_TOKEN_KEY);

      const response = await fetch("/api/faq-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-AI-Access-Token": token || "",
        },
        body: JSON.stringify({ question }),
      });

      if (response.status === 401) {
        // If unauthorized, force logout
        localStorage.removeItem(AI_ACCESS_TOKEN_KEY);
        setIsLoggedIn(false);
        throw new Error(
          "Unauthorized: Please sign in to use the AI assistant."
        );
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error from server:", errorData);
        throw new Error(errorData.message || "Failed to fetch AI response.");
      }

      const data = await response.json();
      setConversation((prev) => [...prev, { type: "ai", text: data.reply }]);
    } catch (err) {
      console.error("Error asking AI question:", err);
      setError(err.message || "Failed to get a response from AI.");
      setConversation((prev) => [
        ...prev,
        { type: "error", text: `Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Helper for styling messages
  const getMessageClassName = (msg) => {
    let className = "inline-block p-3 rounded-lg";
    if (msg.type === "user") className += " bg-blue-500 text-white";
    else if (msg.type === "ai") className += " bg-gray-200 text-gray-800";
    else className += " bg-red-200 text-red-800";
    return className;
  };

  return (
    <div className="ai-chat-page min-h-screen bg-gray-100">
      <HeroSection title="AI Assistant" subtitle="Ask us anything!" />
      <ScrollDownArrow onClick={handleScrollToChat} />

      <div ref={chatContainerRef} className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Your AI Assistant
          </h2>

          {!isLoggedIn ? (
            // Login View
            <div className="text-center py-12">
              <p className="text-lg text-gray-700 mb-6">
                Please sign in to access the AI Assistant.
              </p>
              <button onClick={handleLogin} className="btn-gradient-primary">
                Sign In to AI
              </button>
            </div>
          ) : (
            // Chat View
            <>
              <div ref={conversationAreaRef} onScroll={handleConversationScroll} className="conversation-area h-[500px] overflow-y-auto border border-gray-300 rounded-md p-4 mb-6 bg-gray-50">
                {conversation.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    Start by asking a question...
                  </p>
                ) : (
                  conversation.map((msg, index) => (
                    <div key={index} className="mb-4">
                      <span className={getMessageClassName(msg)}>
                        {msg.text}
                      </span>
                    </div>
                  ))
                )}

                {loading && (
                  <div className="text-center text-gray-500 mt-4">
                    Thinking...
                  </div>
                )}

                {error && (
                  <div className="text-red-600 text-center mt-4">{error}</div>
                )}
              </div>

              {showScrollToBottom && (
                <button
                  onClick={scrollToBottom}
                  className="absolute bottom-24 right-8 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  aria-label="Scroll to bottom"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              )}

              <div className="input-area flex gap-4 mt-4">
                <textarea
                  className="flex-grow px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out resize-none h-16"
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault(); // Prevent new line on Enter
                      handleAskQuestion();
                    }
                  }}
                  disabled={loading}
                />
                <button
                  onClick={handleAskQuestion}
                  className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={loading}
                  aria-label="Send message"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.45-1.483a1 1 0 00.64-.64L16.707 5.146a1 1 0 00-1.414-1.414L10.894 2.553z"/>
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      </div>
  );
};

export default AIChatPage;
