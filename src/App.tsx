/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptInPage from './OptInPage';
import SalesPage from './SalesPage';
import ThankYouPage from './ThankYouPage';
import About from './AboutPage';
import About from './JVSalesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/opt-in" element={<OptInPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jv" element={<JV />} />
        {/* Fallback to Sales Page */}
        <Route path="*" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}
