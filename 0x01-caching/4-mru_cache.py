#!/usr/bin/python3
"""A basic caching system"""

from collections import deque
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """LRUCache defines a basic caching system
       with maximum size of 4
    """
    def __init__(self):
        """ Initiliaze
        """
        super().__init__() #provides cache_data
        self.dq = deque()

    def put(self, key, item):
        """ Add items to cache and remove excess
        """
        if key and item:
            if key not in self.cache_data:
                # If cache is full, remove most recently used element
                if len(self.dq) == BaseCaching.MAX_ITEMS:
                    last = self.dq.pop() # Remove the element just appended
                    self.cache_data.pop(last)
                    print("DISCARD:", last)

            else:
                self.dq.remove(key)

            # Update cache(dictionary) and deque with the new key and item
            self.cache_data[key] = item
            self.dq.append(key)

    def get(self, key):
        """Returns item linked to key
        """
        if key is not None and key in self.cache_data:
            # Move accessed key to the end and return its value
            value = self.cache_data.pop(key)
            self.cache_data[key] = value
            self.dq.remove(key) # Remove accessed key from its current position
            self.dq.append(key) # Add key to the start of the deque
            return value
        return None
