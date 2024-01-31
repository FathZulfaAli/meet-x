'use client';
import Unauthorized from '@/components/Unauthorized';
import axios from 'axios';
import Image from 'next/image';
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
      console.log('res', res);
      if (res.data.role === 'customer') {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      console.log(error);
      setIsOpen(false);
    }
  }

  return (
    <>
      <Unauthorized showModal={isOpen} />
    </>

  );
}
