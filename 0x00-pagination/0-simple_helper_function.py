#!/usr/bin/env python3
"""Defines function to return pagination parameters"""


def index_range(page: int, page_size: int) -> tuple:
    """Function to return pagination parameters"""
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return start_index, end_index
