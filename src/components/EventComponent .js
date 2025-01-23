import React from 'react';

const EventComponent = () => {
    const handleClick = () => {
        console.log("Inside Code");

    }

    return <div ref={(divRef) => {
  
            divRef.addEventListener("click", handleClick)
            return () => {
                divRef.removeEventListener("click", handleClick)
            }
    }
    }> Click me</div >;
};

export default EventComponent;


// import React, { useRef, useEffect } from 'react';

// const App = () => {
//     const inputRef = useRef(null); // Create a ref for the input element

//     useEffect(() => {
//         const currentInput = inputRef.current; // Get the current input element

//         // Optional: You can add event listeners or other setup logic here
//         const handleFocus = () => {
//             console.log('Input focused');
//         };

//         if (currentInput) {
//             currentInput.addEventListener('focus', handleFocus);
//         }

//         // Cleanup function to remove the event listener
//         return () => {
//             if (currentInput) {
//                 currentInput.removeEventListener('focus', handleFocus);
//                 console.log('Cleanup: Input focus listener removed');
//             }
//         };
//     }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

//     return (
//         <div>
//             <input
//                 ref={inputRef} // Attach the ref to the input element
//                 placeholder="Click here to focus"
//             />
//         </div>
//     );
// };

// export default App;