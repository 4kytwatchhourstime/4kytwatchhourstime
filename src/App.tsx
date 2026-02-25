/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptInPage from './OptInPage';
import SalesPage from './SalesPage';
import ThankYouPage from './ThankYouPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/opt-in" element={<OptInPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* Fallback to Sales Page */}
        <Route path="*" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}
