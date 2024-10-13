// // import prisma from "@/lib/prisma";
// // import { currentUser } from "@clerk/nextjs";
// // import { revalidatePath } from "next/cache";
// // import { redirect } from "next/navigation";

// // export async function GET(request: Request) {
// //     const user = await currentUser();

// //     if (!user) {
// //         redirect("/sign-in");
// //     }

// //     let userSettings = await prisma.userSettings.findUnique({
// //         where: {
// //             userId: user.id,
// //         },
// //     });

// //     if(!userSettings){
// //         userSettings=await prisma.userSettings.create({
// //             data:{
// //                 userId: user.id,
// //                 currency:"USD",
// //             },
// //         })
// //     }
// //     revalidatePath('/')
// //     return Response.json(userSettings)
// // }


// import prisma from "@/lib/prisma";
// import { currentUser } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
// export async function GET() {
//     const user = await currentUser();


//     if (!user) {
//         return new Response(JSON.stringify({ error: "Unauthorized" }), {
//             status: 401,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     }

//     try {

//         let userSettings = await prisma.userSettings.findUnique({
//             where: {
//                 userId: user.id,
//             },
//         });

//         if (!userSettings) {
//             userSettings = await prisma.userSettings.create({
//                 data: {
//                     userId: user.id,
//                     currency: "USD",
//                 },
//             });
//         }

//         revalidatePath('/');

//         return new Response(JSON.stringify(userSettings), {
//             status: 200,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     } catch (error) {
//         console.error("Error fetching user settings:", error);
//         return new Response(JSON.stringify({ error: "Failed to fetch user settings" }), {
//             status: 500,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     }
// }