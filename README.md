# Fairway Hotels - World Class 2025 Website

A modern, luxury hotel and tour booking website built with Next.js 14, featuring world-class performance, SEO optimization, and exceptional user experience.

## 🏨 Project Overview

Fairway Hotels is a premium hospitality brand in Sri Lanka, offering luxury accommodation and curated tour experiences. This website showcases our properties, tour packages, and provides seamless booking experiences for guests worldwide.

## ✨ Features

### 🏠 Hotels
- **Luxury Accommodation**: Premium hotels across Sri Lanka
- **Detailed Information**: Amenities, room types, pricing, and availability
- **Location Details**: Maps, nearby attractions, and transportation
- **Photo Galleries**: High-quality images and virtual tours
- **Real-time Availability**: Live booking calendar and room selection

### 🚀 Tours
- **Curated Experiences**: Cultural, adventure, and luxury tours
- **Detailed Itineraries**: Day-by-day breakdowns and highlights
- **Pricing & Inclusions**: Transparent pricing with what's included/excluded
- **Booking Management**: Easy tour reservation and payment
- **Tour Maps**: Interactive route visualization and destination details

### 📝 Blog
- **Travel Insights**: Expert tips and destination guides
- **Local Culture**: Authentic Sri Lankan experiences and stories
- **SEO Optimized**: Rich content for search engine visibility
- **Social Sharing**: Easy content distribution across platforms

### 🔍 Search & Discovery
- **Powerful Search**: Meilisearch-powered content discovery
- **Advanced Filters**: Location, price, amenities, and more
- **Real-time Results**: Instant search with highlighting
- **Faceted Navigation**: Easy content browsing and filtering

### 💳 Booking & Payments
- **Seamless Booking**: Hotel and tour reservation system
- **Secure Payments**: Stripe integration with local gateway support
- **Booking Management**: User dashboard for reservations
- **Email Confirmations**: Automated booking confirmations

### 🌍 Internationalization
- **Multi-language Support**: English, Sinhala, and Tamil
- **Localized Content**: Region-specific information and pricing
- **Cultural Adaptation**: Local payment methods and currencies

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: App Router, Server Components, Server Actions
- **React 18**: Latest React features and optimizations
- **TypeScript**: Type-safe development and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible UI components

### Backend & Database
- **Prisma ORM**: Type-safe database operations
- **PostgreSQL**: Robust, scalable database
- **NextAuth.js**: Authentication and authorization
- **Sanity.io**: Headless CMS with Studio

### Search & Performance
- **Meilisearch**: Lightning-fast search engine
- **Next/Image**: Optimized image handling
- **Cloudinary**: Advanced image processing
- **Vercel Edge**: Global CDN and caching

### Payments & Integrations
- **Stripe**: Global payment processing
- **PayHere/WebXPay**: Local Sri Lankan payment gateways
- **Resend**: Transactional email delivery
- **Google Analytics 4**: Website analytics

### Development & Testing
- **ESLint & Prettier**: Code quality and formatting
- **Husky**: Git hooks for code quality
- **Vitest**: Fast unit testing
- **Playwright**: End-to-end testing
- **TypeScript**: Static type checking

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.17.0 or higher
- **pnpm**: 8.0.0 or higher (recommended package manager)
- **PostgreSQL**: 14 or higher
- **Meilisearch**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karu97/Fairway_Web.git
   cd Fairway_Web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   pnpm db:generate
   
   # Push schema to database
   pnpm db:push
   
   # Seed with sample data
   pnpm db:seed
   ```

5. **Set up Sanity Studio**
   ```bash
   # Install Sanity CLI globally
   npm install -g @sanity/cli
   
   # Login to Sanity
   sanity login
   
   # Start Sanity Studio
   pnpm sanity:dev
   ```

6. **Start Meilisearch**
   ```bash
   # Start Meilisearch server
   pnpm meili:start
   
   # Index content
   pnpm meili:index
   ```

7. **Run the development server**
   ```bash
   pnpm dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Fairway_Web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public routes
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   ├── studio/            # Sanity Studio
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── forms/            # Form components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility libraries
│   │   ├── auth.ts          # NextAuth configuration
│   │   ├── db.ts            # Prisma client
│   │   ├── stripe.ts        # Stripe configuration
│   │   ├── meili.ts         # Meilisearch utilities
│   │   └── schema.ts        # JSON-LD schema builders
│   ├── sanity/               # Sanity configuration
│   │   ├── schemas/         # Content schemas
│   │   └── desk/            # Studio desk structure
│   ├── styles/               # CSS and styling
│   └── types/                # TypeScript type definitions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
├── e2e/                     # End-to-end tests
├── src/tests/               # Unit tests
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🔧 Available Scripts

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Database
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:seed` - Seed database with sample data

### Sanity CMS
- `pnpm sanity:dev` - Start Sanity Studio
- `pnpm sanity:build` - Build Sanity Studio
- `pnpm sanity:deploy` - Deploy Sanity Studio

### Search
- `pnpm meili:start` - Start Meilisearch server
- `pnpm meili:index` - Index content in Meilisearch

### Testing
- `pnpm test` - Run unit tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm test:coverage` - Generate test coverage report

## 🌐 Environment Variables

Copy `env.example` to `.env.local` and configure the following services:

### Required
- **Database**: PostgreSQL connection string
- **NextAuth**: Authentication secrets and OAuth providers
- **Sanity**: CMS project ID and API tokens
- **Meilisearch**: Search engine host and API keys
- **Stripe**: Payment processing keys

### Optional
- **Cloudinary**: Image optimization
- **Google Analytics**: Website analytics
- **Email Services**: Transactional email delivery
- **Maps**: Location services integration

## 🗄 Database Schema

The application uses Prisma ORM with the following main models:

- **User**: Authentication and user profiles
- **Hotel**: Property information and amenities
- **Tour**: Tour packages and itineraries
- **Blog**: Content management and articles
- **Booking**: Reservation and payment tracking
- **Inquiry**: Customer inquiries and support

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Responsive Layout**: Optimized for all device sizes
- **Touch-Friendly**: Mobile-optimized interactions
- **Performance**: Fast loading on mobile networks
- **Accessibility**: WCAG 2.2 AA compliance

## 🔍 SEO Features

- **Structured Data**: JSON-LD schema markup
- **Meta Tags**: Comprehensive meta information
- **Sitemaps**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media optimization
- **Core Web Vitals**: Performance optimization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on git push

```bash
# Manual deployment
pnpm vercel:deploy
```

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- **Netlify**: Static site generation
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform
- **AWS**: Amplify or ECS

## 🧪 Testing

### Unit Tests
```bash
pnpm test              # Run all tests
pnpm test:ui          # Run with UI
pnpm test:coverage    # Generate coverage report
```

### End-to-End Tests
```bash
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run with UI
```

### Test Structure
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API and database testing
- **E2E Tests**: User journey testing
- **Performance Tests**: Core Web Vitals testing

## 📊 Performance

The website is optimized for:

- **Core Web Vitals**: LCP, FID, CLS optimization
- **Image Optimization**: Next/Image with Cloudinary
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Edge caching and ISR
- **Bundle Analysis**: Optimized JavaScript bundles

## 🔒 Security

- **Authentication**: NextAuth.js with secure sessions
- **Authorization**: Role-based access control
- **Data Validation**: Zod schema validation
- **CSRF Protection**: Built-in Next.js protection
- **Rate Limiting**: API request throttling
- **HTTPS**: Secure communication protocols

## 🌍 Internationalization

Support for multiple languages:

- **English**: Primary language
- **Sinhala**: Local language support
- **Tamil**: Regional language support
- **RTL Support**: Right-to-left text support
- **Localization**: Date, number, and currency formatting

## 📈 Analytics & Monitoring

- **Google Analytics 4**: User behavior tracking
- **Vercel Analytics**: Performance monitoring
- **Error Tracking**: Sentry integration (optional)
- **Performance Monitoring**: Core Web Vitals tracking
- **User Feedback**: Built-in feedback collection

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- **Code Style**: Follow ESLint and Prettier configuration
- **Testing**: Write tests for new features
- **Documentation**: Update documentation as needed
- **Performance**: Consider performance impact of changes
- **Accessibility**: Ensure WCAG compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: tech@fairwayhotels.com
- **Documentation**: [docs.fairwayhotels.com](https://docs.fairwayhotels.com)
- **Issues**: [GitHub Issues](https://github.com/karu97/Fairway_Web/issues)

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For deployment and hosting
- **Sanity**: For the headless CMS
- **Tailwind CSS**: For the utility-first CSS framework
- **shadcn/ui**: For the beautiful UI components

---

**Built with ❤️ in Sri Lanka by Fairway Hotels**

*Experience luxury, discover adventure, create memories.*
