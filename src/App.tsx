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
        <Route path="/" element={<OptInPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/sales" element={<SalesPage />} />
        {/* Fallback to Opt-in */}
        <Route path="*" element={<OptInPage />} />
      </Routes>
    </Router>
  );
}