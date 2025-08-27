'use client';

import Image from 'next/image';
import { User, Mail, Globe, Calendar } from 'lucide-react';

interface BlogAuthorProps {
  author: {
    name: string;
    bio?: string;
    image?: { url: string; alt?: string };
    email?: string;
    website?: string;
    joinedAt?: string;
  };
}

export function BlogAuthor({ author }: BlogAuthorProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        About the Author
      </h3>
      
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Author Image */}
        <div className="flex-shrink-0">
          {author.image ? (
            <Image
              src={author.image.url}
              alt={author.image.alt || author.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-30 h-30 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          )}
        </div>

        {/* Author Information */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            {author.name}
          </h4>
          
          {author.bio && (
            <p className="text-gray-600 leading-relaxed mb-4">
              {author.bio}
            </p>
          )}

          {/* Author Details */}
          <div className="space-y-2">
            {author.joinedAt && (
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Member since {formatDate(author.joinedAt)}</span>
              </div>
            )}
            
            {author.email && (
              <div className="flex items-center text-gray-500 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href={`mailto:${author.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {author.email}
                </a>
              </div>
            )}
            
            {author.website && (
              <div className="flex items-center text-gray-500 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                <a
                  href={author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Visit Website
                </a>
              </div>
            )}
          </div>

          {/* Author Stats */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-500">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">10k+</div>
                <div className="text-sm text-gray-500">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
