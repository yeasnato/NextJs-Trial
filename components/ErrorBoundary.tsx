'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props  { children: ReactNode; }
interface State  { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State { return { hasError: true }; }
  componentDidCatch(_error: Error, _info: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()}
              className="w-full bg-[#2EA9D6] hover:bg-[#259ac5] text-white font-bold py-3 px-6 rounded-xl transition-colors">
              Refresh Page
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Need help? Call us at{' '}
              <a href="tel:+8801605564270" className="text-[#2EA9D6] font-semibold hover:underline">01605564270</a>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
