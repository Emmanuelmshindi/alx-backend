#!/usr/bin/python3
"""A basic caching system"""

from collections import deque
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """FIFOCache defines a basic caching system
       with maximum size of 4
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()

    def put(self, key, item):
        """ Add items to cache and remove excess
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                discarded_key, discarded_value = next(iter(self.cache_data.items()))
                self.cache_data.pop(discarded_key)
                print("DISCARD: {}".format(discarded_key))

    def get(self, key):
        """Returns item linked to key
        """
        if key is not None:
            # Use self.cache_data instead of cache_data
            return self.cache_data.get(key)
        return None
