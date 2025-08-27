import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  TrendingUp, 
  Hotel, 
  Plane, 
  BookOpen,
  Settings,
  Shield,
  BarChart3,
  LogOut
} from 'lucide-react';
import { generateSchemasFromOptions } from '@/lib/schema';
import LogoutButton from './LogoutButton';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Fairway Hotels',
  description: 'Admin dashboard for managing hotels, tours, bookings, and content.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Redirect if not authenticated or not admin/editor
  if (!session || (session.user?.role !== 'ADMIN' && session.user?.role !== 'EDITOR')) {
    redirect('/login');
  }

  const stats = [
    {
      title: 'Total Bookings',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Hotels',
      value: '15',
      change: '+2',
      changeType: 'positive',
      icon: Hotel,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Tour Packages',
      value: '48',
      change: '+5',
      changeType: 'positive',
      icon: Plane,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Revenue (MTD)',
      value: '$89,432',
      change: '+18%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const recentBookings = [
    {
      id: 'BK001',
      guest: 'John Smith',
      type: 'Hotel',
      property: 'Fairway Colombo',
      checkIn: '2025-01-15',
      status: 'Confirmed',
      amount: '$450',
    },
    {
      id: 'BK002',
      guest: 'Sarah Johnson',
      type: 'Tour',
      property: 'Cultural Heritage Tour',
      checkIn: '2025-01-20',
      status: 'Pending',
      amount: '$899',
    },
    {
      id: 'BK003',
      guest: 'Michael Brown',
      type: 'Hotel',
      property: 'Fairway Kandy',
      checkIn: '2025-01-18',
      status: 'Paid',
      amount: '$380',
    },
    {
      id: 'BK004',
      guest: 'Emily Davis',
      type: 'Tour',
      property: 'Tea Country Adventure',
      checkIn: '2025-01-25',
      status: 'Confirmed',
      amount: '$699',
    },
  ];

  const quickActions = [
    {
      title: 'Add New Hotel',
      description: 'Create a new hotel listing',
      icon: Hotel,
      href: '/admin/hotels/new',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Create Tour Package',
      description: 'Add a new tour package',
      icon: Plane,
      href: '/admin/tours/new',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Manage Bookings',
      description: 'View and update bookings',
      icon: Calendar,
      href: '/admin/bookings',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Content Management',
      description: 'Manage blog posts and pages',
      icon: BookOpen,
      href: '/admin/content',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Administrator</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{session.user?.role}</span>
            </div>
            <div className="text-sm text-gray-600">
              Welcome, {session.user?.name}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <LogoutButton />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`block p-4 ${action.bgColor} rounded-lg hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${action.bgColor} rounded-lg flex items-center justify-center`}>
                        <action.icon className={`w-5 h-5 ${action.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
                <a href="/admin/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Booking ID</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Guest</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Type</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Property</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Check-in</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="py-3 px-2 text-sm text-gray-700">{booking.guest}</td>
                        <td className="py-3 px-2 text-sm text-gray-700">{booking.type}</td>
                        <td className="py-3 px-2 text-sm text-gray-700">{booking.property}</td>
                        <td className="py-3 px-2 text-sm text-gray-700">{booking.checkIn}</td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Dashboard Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Health */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database Status</span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Response Time</span>
                <span className="text-sm font-medium text-gray-900">45ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Uptime</span>
                <span className="text-sm font-medium text-gray-900">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Users</span>
                <span className="text-sm font-medium text-gray-900">1,234</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">New hotel added: Fairway Nuwara Eliya</span>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Tour package updated: Cultural Heritage</span>
                <span className="text-xs text-gray-400">4 hours ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">New blog post published</span>
                <span className="text-xs text-gray-400">6 hours ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Payment processed: BK001</span>
                <span className="text-xs text-gray-400">8 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Preview */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
            <a href="/admin/analytics" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Detailed Analytics
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Page Views</h3>
              <p className="text-2xl font-bold text-blue-600">45.2K</p>
              <p className="text-sm text-gray-500">+12% from last month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Conversion Rate</h3>
              <p className="text-2xl font-bold text-green-600">3.2%</p>
              <p className="text-sm text-gray-500">+0.5% from last month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">New Users</h3>
              <p className="text-2xl font-bold text-purple-600">2.8K</p>
              <p className="text-sm text-gray-500">+8% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchemasFromOptions({
            type: 'admin',
            title: 'Admin Dashboard - Fairway Hotels',
            description: 'Admin dashboard for managing hotels, tours, bookings, and content.',
            url: 'https://fairwayhotels.com/admin',
            images: [],
          })),
        }}
      />
    </>
  );
}
