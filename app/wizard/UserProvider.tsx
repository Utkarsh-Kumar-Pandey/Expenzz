// // app/wizard/UserProvider.tsx
// import { currentUser } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import React from 'react';
// import Page from './page';
// const UserProvider = async () => {
//     const user = await currentUser();

//     if (!user) {
//         redirect("/sign-in");
//     }

//     return <Page user={user} />;
// };

// export default UserProvider;