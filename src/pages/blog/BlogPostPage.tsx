// src/pages/blog/BlogPostPage.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import { PostContent } from '../../types/posts'; 
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const BlogPostPage: React.FC = () => {
const { slug } = useParams<{ slug: string }>();

const post: PostContent | undefined = posts.find((p) => p.slug === slug);

if (!post) {
    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <Navigation />
            {/* REMOVED: Deleted the old <Header /> component */}
            <main className="pt-16 container text-center py-20 animate-in fade-in">
            <h1 className="text-2xl font-bold text-white">Post Not Found</h1>
            <p className="text-gray-400 mt-2">Sorry, we couldn't find the article you were looking for.</p>
            <Link to="/blog" className="mt-6 inline-flex items-center text-sm font-semibold text-[#4D7DDA] hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Blog
            </Link>
            </main>
            <Footer />
        </div>
    );
}

return (
    <>
    <Helmet>
        <title>{post.frontmatter.title} | Advancify Blog</title>
        <meta name="description" content={post.frontmatter.description} />
        <link rel="canonical" href={`https://advancify.dev/blog/${post.slug}`} />
    </Helmet>
    
    <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navigation />
        {/* REMOVED: Deleted the old <Header /> component */}
        <main className="pt-16">
            <div className="container max-w-4xl py-16 md:py-24 animate-in fade-in zoom-in-95 duration-500">
            <article className="space-y-6 text-lg leading-relaxed text-gray-300">
                <header className="mb-12">
                    <Link to="/blog" className="flex items-center text-sm font-semibold text-[#4D7DDA] hover:underline mb-6">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to all articles
                    </Link>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                    {post.frontmatter.title}
                    </h1>
                    <p className="mt-4 text-base text-gray-400">
                    Published on {new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {post.frontmatter.author}
                    </p>
                </header>
                
                {post.content}
                
            </article>
            </div>
        </main>
        <Footer />
    </div>
    </>
);
};

export default BlogPostPage;