'use client';

import Link from 'next/link';
import {
  Star,
  MapPin,
  Shield,
  Award,
  Users,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
  Sun,
  Heart
} from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { PortableTextRenderer } from './PortableTextRenderer';

interface ContentSectionsProps {
  sections?: any[];
}

const iconMap: { [key: string]: any } = {
  star: Star,
  mapPin: MapPin,
  shield: Shield,
  award: Award,
  users: Users,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  checkCircle: CheckCircle,
  sun: Sun,
  heart: Heart,
};

export function ContentSections({ sections }: ContentSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  const renderSection = (section: any, index: number) => {
    switch (section._type) {
      case 'features':
        return (
          <section key={index} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
                  {section.title || 'Why Choose Fairway Hotels?'}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  {section.description || 'We combine luxury accommodation with authentic experiences, ensuring every moment of your stay is memorable.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {section.features?.map((feature: any, featureIndex: number) => {
                  const IconComponent = iconMap[feature.icon?.toLowerCase()] || Star;
                  const colorMap: { [key: string]: string } = {
                    yellow: 'text-yellow-500 bg-yellow-50',
                    blue: 'text-blue-500 bg-blue-50',
                    green: 'text-green-500 bg-green-50',
                    purple: 'text-purple-500 bg-purple-50',
                    red: 'text-red-500 bg-red-50',
                    orange: 'text-orange-500 bg-orange-50',
                  };
                  const colors = colorMap[feature.color?.toLowerCase()] || 'text-blue-500 bg-blue-50';
                  const [textColor, bgColor] = colors.split(' ');

                  return (
                    <div key={featureIndex} className="text-center group">
                      <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className={`w-10 h-10 ${textColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'stats':
        return (
          <section key={index} className="py-12 sm:py-16 lg:py-20 bg-blue-900 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4 sm:mb-6">
                  {section.title || 'Our Numbers Speak'}
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-4">
                  {section.description || 'Trusted by thousands of travelers worldwide for exceptional experiences.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {section.stats?.map((stat: any, statIndex: number) => {
                  const IconComponent = iconMap[stat.icon?.toLowerCase()] || Award;
                  return (
                    <div key={statIndex} className="text-center group">
                      <div className="w-20 h-20 bg-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-10 h-10 text-blue-300" />
                      </div>
                      <div className="text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-blue-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'team':
        return (
          <section key={index} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
                  {section.title || 'Our Leadership Team'}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  {section.description || 'Meet the passionate individuals who drive our mission to provide exceptional hospitality experiences across Sri Lanka.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {section.members?.map((member: any, memberIndex: number) => {
                  const imageUrl = member.image ? urlFor(member.image).width(200).height(200).url() : null;
                  return (
                    <div key={memberIndex} className="text-center">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={member.name || 'Team member'}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <Users className="w-12 h-12 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name || 'Team Member'}</h3>
                      <p className="text-blue-600 mb-2">{member.position || 'Position'}</p>
                      <p className="text-gray-600 text-sm">{member.bio || 'Bio will be displayed here.'}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section key={index} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
                  {section.title || 'Get in Touch'}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  {section.description || 'Our team is available to assist you with bookings, inquiries, and personalized travel recommendations.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {section.contactMethods?.map((method: any, methodIndex: number) => {
                  const IconComponent = iconMap[method.icon?.toLowerCase()] || Phone;
                  const colorMap: { [key: string]: string } = {
                    blue: 'bg-blue-100 text-blue-600',
                    green: 'bg-green-100 text-green-600',
                    purple: 'bg-purple-100 text-purple-600',
                    orange: 'bg-orange-100 text-orange-600',
                  };
                  const colors = colorMap[method.type] || 'bg-blue-100 text-blue-600';

                  return (
                    <div key={methodIndex} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{method.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {section.emergencyContact && (
                <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Contact</h3>
                  <p className="text-red-700 mb-3">
                    For urgent matters outside business hours, please call our 24/7 emergency line:
                  </p>
                  <p className="text-xl font-semibold text-red-900">{section.emergencyContact}</p>
                </div>
              )}
            </div>
          </section>
        );

      case 'story':
        return (
          <section key={index} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
                  {section.title || 'Our Story'}
                </h2>
                {section.content && (
                  <div className="prose prose-lg mx-auto text-gray-700">
                    <PortableTextRenderer
                      value={section.content}
                      className="text-lg leading-relaxed"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'values':
        return (
          <section key={index} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
                  {section.title || 'Our Values'}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  {section.description || 'The principles that guide everything we do.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {section.values?.map((value: any, valueIndex: number) => {
                  const IconComponent = iconMap[value.icon?.toLowerCase()] || Heart;
                  const colorMap: { [key: string]: string } = {
                    yellow: 'text-yellow-500 bg-yellow-50',
                    blue: 'text-blue-500 bg-blue-50',
                    green: 'text-green-500 bg-green-50',
                    purple: 'text-purple-500 bg-purple-50',
                    red: 'text-red-500 bg-red-50',
                    orange: 'text-orange-500 bg-orange-50',
                  };
                  const colors = colorMap[value.color?.toLowerCase()] || 'text-blue-500 bg-blue-50';
                  const [textColor, bgColor] = colors.split(' ');

                  return (
                    <div key={valueIndex} className="text-center">
                      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-8 h-8 ${textColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => renderSection(section, index))}
    </>
  );
}
