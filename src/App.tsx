/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptInPage from './OptInPage';
import SalesPage from './SalesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptInPage />} />
        <Route path="/sales" element={<SalesPage />} />
        {/* Fallback to Opt-in */}
        <Route path="*" element={<OptInPage />} />
      </Routes>
    </Router>
  );
}
