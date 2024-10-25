"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const mockPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    likes: 124,
    comments: 18,
    caption: 'Decoración elegante para bodas #GabiFiesta #Bodas',
    filter: 'party',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    likes: 89,
    comments: 12,
    caption: 'Fiesta temática infantil #Decoración #Fiestas',
    filter: 'kids',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80',
    likes: 156,
    comments: 24,
    caption: 'Celebraciones especiales #Eventos #Caracas',
    filter: 'elegant',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
    likes: 201,
    comments: 32,
    caption: 'Baby shower mágico #BabyShower #Decoración',
    filter: 'party',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    likes: 178,
    comments: 28,
    caption: 'Bodas de ensueño #Wedding #Caracas',
    filter: 'elegant',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    likes: 145,
    comments: 21,
    caption: 'Eventos corporativos #Business #Events',
    filter: 'corporate',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const InstagramPost = ({ post }: { post: typeof mockPosts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="overflow-hidden bg-white shadow-xl">
        <CardContent className="p-0">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-72">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              {isHovered && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-8 transition-opacity">
                  <div className="flex items-center text-white">
                    <Heart className="h-8 w-8 fill-white" />
                    <span className="ml-2 text-xl">{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <MessageCircle className="h-8 w-8" />
                    <span className="ml-2 text-xl">{post.comments}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  <span className="text-sm text-gray-600">{post.likes} likes</span>
                </div>
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{post.caption}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function InstagramFeed() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-white rounded-full shadow-md mb-4">
            <div className="flex items-center justify-center gap-2 px-4 py-2">
              <Instagram className="h-6 w-6 text-pink-500" />
              <h2 className="text-3xl font-bold text-gray-900">
                Momentos Mágicos
              </h2>
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Síguenos en{" "}
            <a
              href="https://instagram.com/gaby__fiestas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 font-semibold"
            >
              @gaby__fiestas
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockPosts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/gaby__fiestas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">Ver más en Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}