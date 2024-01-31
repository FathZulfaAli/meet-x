'use client';
import Unauthorized from '@/components/Unauthorized';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getProfile();
  }, []);
  async function getProfile() {
    try {
      const token = window.localStorage.getItem('token');
      const res = await axios.post('http://localhost:8000/auth/get-role', {
        token: token,
      });
      if (res.data.role === 'customer') {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      setIsOpen(true);
      setTimeout(() => {
        window.location.href = '/login/login-eo';
      }, 3000);
    }
  }

  return (
    <>
      <Unauthorized showModal={isOpen} />
    </>
  );
}
