#!/usr/bin/python3
"""A basic caching system"""

from collections import deque
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """LIFOCache defines a basic caching system
       with maximum size of 4
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.lifo_order = []

    def put(self, key, item):
        """ Add items to cache and remove excess
        """
        if key and item:
            if key not in self.cache_data:
                if len(self.lifo_order) == self.MAX_ITEMS:
                    discarded_key = self.lifo_order.pop(len(self.lifo_order) - 1)
                    self.cache_data.pop(discarded_key)
                    print("DISCARD: {}".format(discarded_key))
            else:
                self.lifo_order.remove(key)

            self.lifo_order.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """Returns item linked to key
        """
        if key is not None:
            # Use self.cache_data instead of cache_data
            return self.cache_data.get(key)
        return None
