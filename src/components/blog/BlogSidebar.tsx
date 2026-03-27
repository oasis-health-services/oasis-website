import { useState, useEffect } from 'react';
import { FacebookIcon, XIcon, LinkedinIcon } from '../SocialIcons';
import { Bookmark, Check, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogSidebarProps {
    title: string;
    url: string;
    slug: string;
}

const BlogSidebar = ({ title, url, slug }: BlogSidebarProps) => {
    const [isSaved, setIsSaved] = useState(false);
    const [showCopied, setShowCopied] = useState(false);

    useEffect(() => {
        const savedArticles = JSON.parse(localStorage.getItem('saved_articles') || '[]');
        setIsSaved(savedArticles.includes(slug));
    }, [slug]);

    const toggleSave = () => {
        const savedArticles = JSON.parse(localStorage.getItem('saved_articles') || '[]');
        let newSaved;
        if (isSaved) {
            newSaved = savedArticles.filter((s: string) => s !== slug);
        } else {
            newSaved = [...savedArticles, slug];
        }
        localStorage.setItem('saved_articles', JSON.stringify(newSaved));
        setIsSaved(!isSaved);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    return (
        <aside className="hidden lg:block">
            <div className="sticky top-32 flex flex-col items-center gap-6 self-start">
                <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm border border-border rounded-full py-6 px-3 shadow-sm space-y-6">
                    {/* Share Button (General/Link) */}
                    <button
                        onClick={copyLink}
                        className="relative group p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                        title="Copy link"
                    >
                        {showCopied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
                        {showCopied && (
                            <span className="absolute left-full ml-3 px-2 py-1 bg-foreground text-background text-xs rounded shadow-lg whitespace-nowrap">
                                Link copied!
                            </span>
                        )}
                    </button>

                    <div className="w-8 h-px bg-border mx-auto" />

                    {/* Social Shares */}
                    <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-black transition-all duration-200"
                        title="Share on X"
                    >
                        <XIcon size={20} />
                    </a>

                    <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-[#1877F2] transition-all duration-200"
                        title="Share on Facebook"
                    >
                        <FacebookIcon size={20} />
                    </a>

                    <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-[#0A66C2] transition-all duration-200"
                        title="Share on LinkedIn"
                    >
                        <LinkedinIcon size={20} />
                    </a>

                    <div className="w-8 h-px bg-border mx-auto" />

                    {/* Save Button */}
                    <button
                        onClick={toggleSave}
                        className={cn(
                            "flex flex-col items-center gap-1 group transition-all duration-200",
                            isSaved ? "text-primary scale-110" : "text-muted-foreground hover:text-primary"
                        )}
                        title={isSaved ? "Article Saved" : "Save Article"}
                    >
                        <div className={cn(
                            "p-3 rounded-full border border-transparent transition-all duration-200",
                            isSaved ? "bg-primary/10 border-primary" : "group-hover:bg-primary/5"
                        )}>
                            <Bookmark className={cn("h-6 w-6", isSaved && "fill-current")} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {isSaved ? "Saved" : "Save"}
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
