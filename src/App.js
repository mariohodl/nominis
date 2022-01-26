import React, { useState } from 'react'
import { Routes } from './components/Routes'

import toast, { Toaster } from 'react-hot-toast';

export default function App() {

  const [sentence, setSentence] = useState('They saw planets and stars.')

    const showToasterSuccess = () => {
        toast('Well Done!', {
            duration: 4000,
            position: 'bottom-center',
            // Styling
            style: {},
            className: '',
            // Custom Icon
            icon: '👏',
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
      };

      const showToasterError = () => {
        toast('Ups, Try Again!', {
            duration: 4000,
            position: 'bottom-center',
            // Styling
            style: {},
            className: '',
            // Custom Icon
            icon: '❌',
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
      };

    return (
            <div className="min-h-screen flex p-8 md:p-12 backy">
               <Routes sentence={sentence} showToasterSuccess={showToasterSuccess} showToasterError={showToasterError}/>
               <Toaster />
            </div>
    )
}
