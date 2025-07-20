import React from 'react';

     export default function Home({ user }) {
       return (
         <div>
           {user ? (
             <h1>Welcome, {user.name || 'User'}</h1>
           ) : (
             <h1>Welcome to TCSEI</h1>
           )}
           <p>Home Page</p>
         </div>
       );
     }

     export async function getServerSideProps(context) {
       try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/user`, {
           headers: {
             cookie: context.req.headers.cookie || '',
           },
         });
         const data = await response.json();
         if (!data || !data.user) {
           return { props: { user: null } };
         }
         return { props: { user: data.user } };
       } catch (error) {
         console.error('Error fetching user:', error);
         return { props: { user: null } };
       }
     }