// src/pages/blog/BlogListPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { PostContent } from '../../types/posts'; 
import { posts as allPosts } from '../../data/posts'; 
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation'; 
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Sort posts by date, ensuring the newest is first
const posts: PostContent[] = allPosts.sort((a, b) => 
new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
);

const BlogListPage: React.FC = () => {
return (
    <>
    <Helmet>
        <title>Advancify Blog | AI & Automation for Law Firms</title>
        <meta name="description" content="Insights, tips, and articles from Advancify on how AI and automation are transforming the legal industry for modern law firms." />
        <link rel="canonical" href="https://advancify.dev/blog" />
    </Helmet>
    
    <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navigation /> 
        {/* REMOVED: Deleted the old <Header /> component */}
        <main className="pt-16">
            <section className="py-20 text-center bg-gradient-to-b from-transparent via-[#4D7DDA]/5 to-transparent">
            <div className="container animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    The <span className="gradient-text">Advancify Blog</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    Insights on AI, automation, and efficiency for modern law firms.
                </p>
                <div className="mt-8">
                    <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#4D7DDA] hover:underline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
            </section>

            <section className="container py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                    <article 
                    key={post.slug} 
                    className="group flex flex-col glass-card overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5 duration-500 fill-mode-backwards"
                    style={{ animationDelay: `${index * 100}ms` }}
                    >
                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                        <p className="text-sm text-gray-400">
                            <time dateTime={post.frontmatter.date}>
                            {new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        </p>
                        <Link to={`/blog/${post.slug}`} className="mt-2 block">
                            <h3 className="text-xl font-semibold text-white group-hover:text-[#4D7DDA] transition-colors">
                            {post.frontmatter.title}
                            </h3>
                            <p className="mt-3 text-base text-gray-300 line-clamp-3">
                            {post.frontmatter.description}
                            </p>
                        </Link>
                        </div>
                        <div className="mt-6">
                        <Link to={`/blog/${post.slug}`} className="flex items-center text-sm font-semibold text-[#4D7DDA] group-hover:underline">
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                        </div>
                    </div>
                    </article>
                ))}
            </div>
            </section>
        </main>
        <Footer />
    </div>
    </>
);
};

export default BlogListPage;