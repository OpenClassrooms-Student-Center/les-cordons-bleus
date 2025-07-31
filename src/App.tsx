import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseList } from './components/CourseList';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CourseList />
        <BookingForm />
      </main>
      <Footer />
    </div>;
}