import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../data/blog/posts';

// Import all blog content files
import kwiatyWDomuContent from '../../data/blog/content/kwiaty-w-domu.js';
import jakPrzedluzycZycieRozContent from '../../data/blog/content/jak-przedluzyc-zycie-roz.js';
import przedluzycZycieBukietuContent from '../../data/blog/content/przedluzyc-zycie-bukietu-chryzantemy.js';
import elegancjaCzerwonychRozContent from '../../data/blog/content/elegancja-czerwonych-roz-eukaliptus.js';
import symboleMilosciContent from '../../data/blog/content/symbole-milosci-namietnosci-elegancji.js';
import emocjeKwiatyContent from '../../data/blog/content/emocje-ktore-daja-kwiaty.js';
import kwiatyIWalentynkiContent from '../../data/blog/content/kwiaty-i-walentynki-jak-wybrac.js';
import jakDbacOTulipanyContent from '../../data/blog/content/jak-dbac-o-tulipany.js';
import MimozaSlonecznySymbolWiosnyContent from '../../data/blog/content/Mimoza-Słoneczny-symbol-wiosny.js'; // Corrected import statement

// Map content files to their respective routes
const contentMap = {
  'kwiaty-w-domu': kwiatyWDomuContent,
  'jak-przedluzyc-zycie-roz': jakPrzedluzycZycieRozContent,
  'przedluzyc-zycie-bukietu-chryzantemy': przedluzycZycieBukietuContent,
  'elegancja-czerwonych-roz-eukaliptus': elegancjaCzerwonychRozContent,
  'symbole-milosci-namietnosci-elegancji': symboleMilosciContent,
  'emocje-ktore-daja-kwiaty': emocjeKwiatyContent,
  'kwiaty-i-walentynki-jak-wybrac': kwiatyIWalentynkiContent,
  'jak-dbac-o-tulipany': jakDbacOTulipanyContent,
  'Mimoza-Słoneczny-symbol-wiosny': MimozaSlonecznySymbolWiosnyContent, // Corrected key
};

const BlogDetail = () => {
  const { postId } = useParams();
  const post = posts.find(p => p.contentFile === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  const postContent = contentMap[post.contentFile];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-2">{post.date} • {post.category}</p>
      <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-6"/>
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  );
};

export default BlogDetail;