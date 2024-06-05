# encoding: utf-8
# module sklearn.metrics._dist_metrics
# from C:\Users\Lucca\Downloads\iris_modular\lib\site-packages\sklearn\metrics\_dist_metrics.cp39-win_amd64.pyd
# by generator 1.147
# no doc

# imports
import builtins as __builtins__ # <module 'builtins' (built-in)>
import numpy as np # C:\Users\Lucca\Downloads\iris_modular\lib\site-packages\numpy\__init__.py
import scipy.sparse._csr as __scipy_sparse__csr
import scipy.sparse._matrix as __scipy_sparse__matrix


from .DistanceMetric64 import DistanceMetric64

class RussellRaoDistance64(DistanceMetric64):
    """
    Russell-Rao Distance
    
        Russell-Rao Distance is a dissimilarity measure for boolean-valued
        vectors. All nonzero entries will be treated as True, zero entries will
        be treated as False.
    
            D(x, y) = (N - N_TT) / N
    """
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    @staticmethod # known case of __new__
    def __new__(*args, **kwargs): # real signature unknown
        """ Create and return a new object.  See help(type) for accurate signature. """
        pass

    __pyx_vtable__ = None # (!) real value is '<capsule object NULL at 0x0000019F8154E120>'


