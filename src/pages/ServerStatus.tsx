import React, { useState, useEffect } from 'react';
import { Search, Users, Server as ServerIcon, Lock, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServerData } from '../types/server';
import Button from '../components/ui/Button';

const ServerStatus: React.FC = () => {
  const [servers, setServers] = useState<ServerData[]>([]);
  const [filteredServers, setFilteredServers] = useState<ServerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchServers = async () => {
    try {
      setError(null);
      const response = await fetch('http://localhost:3001/api/servers');
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      
      const data: ServerData[] = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid server data received');
      }
      
      const sortedServers = [...data].sort((a, b) => b.pc - a.pc);
      
      setServers(sortedServers);
      setFilteredServers(sortedServers);
      setLastRefresh(new Date());
    } catch (err) {
      console.error('Failed to fetch servers:', err);
      setError(err instanceof Error ? err.message : 'Failed to load server data. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchServers();
    
    const intervalId = setInterval(fetchServers, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    const filtered = servers.filter(server => 
      server.hn.toLowerCase().includes(query) || 
      server.gm.toLowerCase().includes(query) ||
      server.la.toLowerCase().includes(query) ||
      server.ip.toLowerCase().includes(query)
    );
    setFilteredServers(filtered);
  }, [searchQuery, servers]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchServers();
  };

  const formatLastRefresh = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.round((date.getTime() - new Date().getTime()) / 1000 / 60),
      'minute'
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Server Status</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get real-time information about San Andreas Multiplayer servers.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-neutral-500" />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Search servers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search servers"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Last updated: {formatLastRefresh(lastRefresh)}
            </span>
            <Button
              onClick={handleRefresh}
              variant="outline"
              leftIcon={<RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />}
              isLoading={refreshing}
              disabled={refreshing || loading}
              aria-label="Refresh server list"
            >
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        </div>

        {loading && !refreshing ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-600 dark:text-neutral-400">Loading servers...</p>
          </div>
        ) : error ? (
          <div className="bg-error-50 dark:bg-error-900/20 text-error-700 dark:text-error-400 p-4 rounded-md">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700">
                <div className="col-span-6 md:col-span-5">Server Name</div>
                <div className="col-span-3 md:col-span-2 text-center">Players</div>
                <div className="hidden md:block md:col-span-3">Gamemode</div>
                <div className="col-span-3 md:col-span-2 text-center">Status</div>
              </div>

              <AnimatePresence>
                {filteredServers.length > 0 ? (
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {filteredServers.map((server, index) => (
                      <motion.div
                        key={`${server.ip}-${index}`}
                        className="grid grid-cols-12 gap-4 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                      >
                        <div className="col-span-6 md:col-span-5 flex items-center">
                          <div className="mr-2">
                            {server.pa && (
                              <Lock 
                                className="h-4 w-4 text-warning-500" 
                                aria-label="Password Protected"
                              />
                            )}
                          </div>
                          <div className="truncate">
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                              {server.hn}
                            </span>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                              {server.ip}
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-neutral-500 dark:text-neutral-400" />
                            <span className={`font-medium ${
                              server.pc > server.pm * 0.8 
                                ? 'text-success-600 dark:text-success-500' 
                                : server.pc > 0 
                                  ? 'text-neutral-900 dark:text-neutral-100' 
                                  : 'text-neutral-500 dark:text-neutral-400'
                            }`}>
                              {server.pc}/{server.pm}
                            </span>
                          </div>
                        </div>
                        
                        <div className="hidden md:flex md:col-span-3 items-center">
                          <div className="truncate text-neutral-700 dark:text-neutral-300">
                            {server.gm}
                          </div>
                        </div>
                        
                        <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                          <div className="flex items-center">
                            <ServerIcon className="h-4 w-4 mr-1 text-success-500" />
                            <span className="text-success-600 dark:text-success-500 font-medium">
                              Online
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-neutral-500 dark:text-neutral-400">
                    <ServerIcon className="h-12 w-12 mx-auto mb-3 text-neutral-400 dark:text-neutral-600" />
                    <p>No servers found matching your search criteria.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              Showing {filteredServers.length} of {servers.length} servers
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ServerStatus;