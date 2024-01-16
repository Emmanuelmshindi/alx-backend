#!/usr/bin/python3
"""A basic caching system"""

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """BasicCache defines a caching system"""
    def put(self, key, item):
        """Add an item in the cache
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Returns item linked to key
        """
        if key is not None:
            return self.cache_data.get(key)
        return None
