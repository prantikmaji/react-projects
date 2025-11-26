import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* This is the main Card component structure.
        We apply all styling directly using Tailwind classes.
      */}
      <div
        className="
        p-8             /* Padding on all sides */
        bg-white        /* White background */
        rounded-xl      /* Rounded corners (extra large) */
        shadow-2xl      /* Large, deep shadow for a 'lifted' effect */
        w-full          /* Take full width... */
        max-w-md        /* ...but stop at a medium size on desktop */
        mx-4            /* Horizontal margin for small screens */
        text-center     /* Center the text */
      "
      >
        <h2
          className="
          text-2xl        /* Default text size (24px) */
          md:text-3xl     /* Larger text on medium screens and up */
          font-extrabold  /* Extra bold font weight */
          text-indigo-600 /* Primary brand color for the heading */
          mb-4            /* Margin below the heading */
        "
        >
          User Profile
        </h2>

        <p
          className="
          text-lg         /* Large text size */
          text-gray-700   /* Dark gray text color */
        "
        >
          The ID for the requested user is:
        </p>

        <p
          className="
          mt-2            /* Margin top */
          text-3xl        /* Larger display text */
          md:text-4xl     /* Even larger on medium screens */
          font-mono       /* Monospace font for data/IDs */
          text-gray-900   /* Very dark text */
          tracking-wider  /* Slightly wider letter spacing */
        "
        >
          {userid || "N/A"}
        </p>

        <a
          href="/"
          className="
            mt-6          /* Margin top */
            inline-block  /* Allows setting margin and padding */
            px-4 py-2     /* Horizontal and vertical padding */
            bg-indigo-500 /* Background color */
            text-white    /* Text color */
            rounded-lg    /* Rounded button corners */
            hover:bg-indigo-700 /* Darker color on hover (Interaction!) */
            transition-colors   /* Smooth color transition */
            font-medium
          "
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default User;
