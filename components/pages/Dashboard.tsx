import React, { useState } from 'react';
import {
  Search,
  Bell,
  Settings,
  LogOut,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  FolderOpen,
  User,
  Calculator,
  BookOpen,
  Microscope,
  Library,
  Mail,
  Menu,
  X
} from 'lucide-react';

interface DashboardProps {
  setCurrentPage?: (page: 'Inicio') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    if (setCurrentPage) {
      setCurrentPage('Inicio');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
      {/* Tailwind CSS Setup */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

          .dark {
            color-scheme: dark;
          }

          body {
            font-family: 'Lexend', sans-serif;
          }
        `
      }} />

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 text-center border-b border-white/20">
          <h1 className="text-2xl font-bold">Estrella Rodriguez</h1>
          <p className="text-sm text-white/80">Homework Club</p>
        </div>

        <nav className="flex-grow px-4 py-6">
          <ul className="space-y-2">
            <li>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 text-white font-medium" href="#">
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200" href="#">
                <CheckSquare className="w-5 h-5" />
                <span>Tasks</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200" href="#">
                <Calendar className="w-5 h-5" />
                <span>Schedule</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200" href="#">
                <FolderOpen className="w-5 h-5" />
                <span>Resources</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200" href="#">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-white/20">
          <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200" href="#">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {/* Top Navigation */}
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="relative flex items-center max-w-xs sm:max-w-md">
              <div className="absolute left-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search tasks, resources..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button className="flex items-center justify-center p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-8">
          {/* Welcome Header */}
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex min-w-72 flex-col gap-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                Welcome back, Ana!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal">
                Here is a summary of your activities.
              </p>
            </div>
          </div>

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1 & 2 */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Progress Summary */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Your Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Mathematics Progress */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="100"
                          strokeDashoffset="15"
                          strokeLinecap="round"
                          className="text-blue-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">85%</span>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Mathematics</p>
                  </div>

                  {/* Language Progress */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="100"
                          strokeDashoffset="8"
                          strokeLinecap="round"
                          className="text-amber-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">92%</span>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Language</p>
                  </div>

                  {/* Science Progress */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="100"
                          strokeDashoffset="22"
                          strokeLinecap="round"
                          className="text-green-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">78%</span>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Science</p>
                  </div>
                </div>
              </div>

              {/* Upcoming Tasks */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Upcoming Tasks</h2>
                  <a className="text-sm font-medium text-blue-600 hover:underline" href="#">View all tasks</a>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Algebra II: Problem Set 5</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Mathematics</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Oct 28</p>
                      <p className="text-sm text-red-500">Due Soon</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100">"The Great Gatsby" Essay</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Language</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Nov 02</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">In 5 days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Biology Lab Report</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Science</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Nov 05</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">In 8 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Weekly Schedule */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">This Week's Schedule</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Mon</p>
                      <p className="font-bold text-lg text-gray-900 dark:text-gray-100">23</p>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-600 pl-4">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Math Tutoring</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">3:00 PM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Wed</p>
                      <p className="font-bold text-lg text-gray-900 dark:text-gray-100">25</p>
                    </div>
                    <div className="flex-1 border-l-2 border-amber-500 pl-4">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Writing Workshop</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">4:30 PM - 5:30 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fri</p>
                      <p className="font-bold text-lg text-gray-900 dark:text-gray-100">27</p>
                    </div>
                    <div className="flex-1 border-l-2 border-green-500 pl-4">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Study Group</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2:00 PM - 3:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Resources */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Important Resources</h2>
                <div className="space-y-3">
                  <a className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" href="#">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900 dark:text-gray-100">Study Guides</span>
                  </a>
                  <a className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" href="#">
                    <Library className="w-5 h-5 text-amber-500" />
                    <span className="font-medium text-gray-900 dark:text-gray-100">Class Library</span>
                  </a>
                  <a className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" href="#">
                    <Mail className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-900 dark:text-gray-100">Contact Tutors</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;