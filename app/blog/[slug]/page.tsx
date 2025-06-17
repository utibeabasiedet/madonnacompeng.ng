// import Image from "next/image"
// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"

// import { notFound } from "next/navigation"

// export async function generateMetadata( ) {
//   const post=undefined

//   if (!post) {
//     return {
//       title: "Post Not Found",
//       description: "The requested blog post could not be found",
//     }
//   }

//   return {
//     title: `- Madonna University Computer Engineering Department`,
//     description:  "Read this article from the Computer Engineering Department at Madonna University",
//   }
// }

// export default async function BlogPostPage() {
//   const post= undefined

//   if (!post) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <Link href="/blog" className="text-primary flex items-center mb-8">
//         <ChevronLeft className="h-4 w-4 mr-1" /> Back to News
//       </Link>

//       <article className="max-w-4xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
//           <div className="flex items-center gap-4 text-muted-foreground mb-6">
//             <div className="flex items-center">
//               {post.author?.image ? (
//                 <Image
//                   src={"/placeholder.svg"}
//                   alt={post.author.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-2"
//                 />
//               ) : (
//                 <div className="w-10 h-10 bg-muted rounded-full mr-2"></div>
//               )}
//               <span>{post.author?.name || "Anonymous"}</span>
//             </div>
//             <span>•</span>
//             <time dateTime={post.publishedAt}>
//               {new Date(post.publishedAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </time>
//             {post.categories && post.categories.length > 0 && (
//               <>
//                 <span>•</span>
//                 <div className="flex gap-2">
//                   {post.categories.map((category: string) => (
//                     <span key={category} className="bg-muted px-2 py-1 rounded text-xs">
//                       {category}
//                     </span>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         {post.mainImage && (
//           <div className="mb-8 relative h-[400px] w-full">
//             <Image
//               src={"/placeholder.svg"}
//               alt={post.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         )}

//         <div className="prose prose-lg max-w-none">
//           {/* This is a simplified version. In a real app, you'd use a PortableText component to render the body */}
//           {post.body ? (
//             <div dangerouslySetInnerHTML={{ __html: "Content would be rendered here with PortableText" }} />
//           ) : (
//             <p>This post has no content.</p>
//           )}
//         </div>
//       </article>
//     </div>
//   )
// }

import React from 'react'

const News = () => {
  return (
    <div>News</div>
  )
}

export default News
