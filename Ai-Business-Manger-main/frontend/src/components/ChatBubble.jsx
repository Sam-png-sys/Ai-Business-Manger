import React from "react"
import PropTypes from "prop-types"

export default function ChatBubble({
  sender = "bot",
  text = "",
  time,
  status,
}) {
  const isUser = sender === "user"
  const isSystem = sender === "system"

  const baseStyles =
    "max-w-md px-4 py-3 rounded-2xl text-sm shadow-sm break-words whitespace-pre-wrap animate-fade-in"

  const senderStyles = isSystem
    ? "bg-gray-100 text-gray-500 text-xs mx-auto"
    : isUser
    ? "bg-emerald-600 text-white rounded-br-md ml-auto"
    : "bg-white text-gray-800 rounded-bl-md mr-auto"

  return (
    <div className={`flex ${isSystem ? "justify-center" : ""} my-1`}>
      <div className={`${baseStyles} ${senderStyles}`}>
        {/* Message Text */}
        <MessageText text={text} />

        {/* Footer (time / status) */}
        {(time || status) && !isSystem && (
          <div className="mt-1 text-[10px] opacity-70 text-right">
            {status === "typing" ? "Typing..." : time}
          </div>
        )}
      </div>
    </div>
  )
}


function MessageText({ text }) {
  // Auto-detect URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)

  return (
    <span>
      {parts.map((part, i) =>
        part.match(urlRegex) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </span>
  )
}


ChatBubble.propTypes = {
  sender: PropTypes.oneOf(["user", "bot", "system"]),
  text: PropTypes.string.isRequired,
  time: PropTypes.string,
  status: PropTypes.oneOf(["sent", "typing"]),
}
