// "use client";
// import { useInfiniteQuery } from "react-query";

// const post = [
//     { id:   1, title: "Post   1" },
//     { id:   2, title: "Post   2" },
//     { id:   3, title: "Post   3" },
//     { id:   4, title: "Post   4" },
//     { id:   5, title: "Post   5" },
//     { id:   6, title: "Post   6" },
// ];

// //mock data fetch
// const fetchPosts = async ({ page }) => {
//     await new Promise((resolve) => setTimeout(resolve,   1000));
//     return post.slice((page -   1) *   2, page *   2);
// };

// export default function Page() {
//     const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
//         ['query'],
//         async ({ pageParam =   1 }) => {
//             const response = await fetchPosts({ page: pageParam });
//             return response;
//         },
//         {
//             getNextPageParam: (lastPage, pages) => {
//                 return pages.length +   1;
//             },
//             initialData: {
//                 pages: [post.slice(0,   2)],
//                 pageParams: [1],
//             },
//         }
//     );

//     return (
//         <div>
//             post:
//             {data?.pages.map((page, i) => (
//                 <div key={i}>
//                     {page.map((post) => (
//                         <div key={post.id}>{post.title}</div>
//                     ))}
//                 </div>
//             ))}
//             <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
//                 {isFetchingNextPage
//                     ? 'Loading more...'
//                     : (data?.pages.length ??   0) <   3
//                     ? 'Load More'
//                     : 'Nothing more to load'}
//             </button>
//         </div>
//     );
// }



// // export const getStaticProps = async () => {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //     const data = await res.json();

// //     return {
// //         props: { posts: data }
// //     }
// // }

// // export default function ProjectTemp({ posts }) {
// //     return (
// //         <div>
// //             {
// //                 posts.map(post => (
// //                     <div key={post.id}>
// //                         <h3>{post.title}</h3>
// //                         <p>{post.body}</p>
// //                     </div>
// //                 ))
// //             }
// //         </div>
// //     );
// // }