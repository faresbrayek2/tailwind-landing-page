import React from "react";

const Features: React.FC = () => {
  return (
    <div className="md:pt-40 px-10 md:px-50 md:flex grid justify-between">
      <div className="md:divide-x divide-bodydark md:divide-x-reverse px-2">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
              <stop stop-color="#2563EB" offset="0%"></stop>
              <stop stop-color="#3B82F6" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill-rule="nonzero" fill="none">
            <path
              d="M43.443 49.745a1.028 1.028 0 0 1-.262-.019l-23.5-4.9a1 1 0 0 1-.775-1.186l6.2-29.352a1.006 1.006 0 0 1 1.182-.773l23.42 4.885a1 1 0 0 1 .776 1.183l-6.12 29.37a1 1 0 0 1-.921.795v-.003Z"
              fill="#7DD3FC"
            ></path>
            <path
              d="M25 32H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1ZM8 15.25l3.5 4 6.5-6.5-1-.75-5.5 4.25-2.5-2-1 1Z"
              fill="url(#a)"
              transform="translate(6 6)"
            ></path>
          </g>
        </svg>

        <h1>Create custom cards</h1>
        <p>
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spendings.
        </p>
      </div>

      {/* custom card */}
      <div className="md:divide-x md:divide-bodydark md:divide-x-reverse px-2">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
              <stop stop-color="#2563EB" offset="0%"></stop>
              <stop stop-color="#3B82F6" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill-rule="nonzero" fill="none">
            <path
              d="m19.93 36.705-9.769-20.03c-.208-.426.026-.966.523-1.209L39.446 1.438c.497-.242 1.066-.094 1.274.332l9.77 20.03c.207.427-.026.967-.523 1.21L21.205 37.036c-.497.243-1.067.094-1.274-.332Zm2.395-22.466-7.19 3.507.876 1.798 7.19-3.507-.876-1.798Z"
              fill="#7DD3FC"
            ></path>
            <path
              d="M32 46V12h5.143c.474 0 .857.447.857 1v32c0 .553-.383 1-.857 1H32Zm-2 0H14.857c-.474 0-.857-.447-.857-1V13c0-.553.383-1 .857-1H30v34ZM18 34v8h2v-8h-2Z"
              fill="url(#a)"
              transform="rotate(64 19.372 32.782)"
            ></path>
          </g>
        </svg>
        <h1>Create custom cards</h1>
        <p>
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spendings.
        </p>
      </div>

      {/*  code icon */}
      <div className="px-2 ">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
              <stop stop-color="#2563EB" offset="0%"></stop>
              <stop stop-color="#3B82F6" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill-rule="nonzero" fill="none">
            <path
              d="M30.22 38.065h-26a1 1 0 0 1-1-1v-32a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v32a1 1 0 0 1-1 1Zm-19-24v2h7v-2h-7Zm3 6v2h10v-2h-10Zm-3 6v2h7v-2h-7Z"
              fill="#7DD3FC"
            ></path>
            <path
              d="m51.585 50.536-25.984.907a1 1 0 0 1-1.034-.964l-1.117-31.98a1 1 0 0 1 .965-1.035l25.984-.907a1 1 0 0 1 1.034.964l1.117 31.98a1 1 0 0 1-.965 1.035ZM40.337 38.061l3.832-4.11a.843.843 0 0 0-.042-1.192l-4.11-3.833-1.15 1.235 3.492 3.256-3.257 3.493 1.235 1.15Zm-4.97.173L36.518 37l-3.492-3.257 3.256-3.492-1.234-1.151-3.832 4.11a.843.843 0 0 0 .041 1.192l4.11 3.832Z"
              fill="url(#a)"
            ></path>
          </g>
        </svg>
        <h1>Create custom cards</h1>
        <p>
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spendings.
        </p>
      </div>
    </div>
  );
};

export default Features;