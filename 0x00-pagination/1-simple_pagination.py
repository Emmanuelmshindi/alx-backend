import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple of start and end indices for pagination.

    Parameters:
    - page: Page number (1-indexed).
    - page_size: Number of items per page.

    Returns:
    A tuple containing start and end indices.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return start_index, end_index


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the correct page of the dataset"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page > 0

        dataset = self.dataset()
        dataset_size = len(dataset)

        start_index, end_index = index_range(page, page_size)

        start_index = max(0, min(start_index, dataset_size))
        end_index = max(0, min(end_index, dataset_size))

        if start_index < end_index:
            return dataset[start_index:end_index]
        else:
            return []
