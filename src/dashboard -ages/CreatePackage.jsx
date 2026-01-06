import React, { useState } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import axiosInstance from "../Hook/axiosSecure";

const CreatePackage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        text: userText,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await axiosInstance.post(
        "/package",
        { prompt: userText },
        { timeout: 20000 }
      );

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          text: res?.data?.message || "Package created successfully ✅",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "ai",
          text: "❌ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="max-w-md mx-auto h-[520px] bg-gray-100 rounded-xl shadow-md flex flex-col">
      
      {/* Header */}
      <div className="p-4 bg-blue-500 text-white rounded-t-xl flex items-center gap-2">
        <FaRobot />
        <h2 className="font-semibold">AI Package Assistant</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.role === "ai" ? "justify-start" : "justify-end"
            }`}
          >
            {msg.role === "ai" && (
              <FaRobot className="text-gray-500 mb-1" />
            )}

            <div
              className={`px-4 py-2 rounded-xl max-w-[75%] text-sm ${
                msg.role === "ai"
                  ? "bg-white text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>

            {msg.role === "user" && (
              <FaUser className="text-blue-500 mb-1" />
            )}
          </div>
        ))}

        {loading && (
          <div className="text-sm text-gray-500">AI is thinking...</div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Create a new internet package..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default CreatePackage;
