# encoding: utf-8
# module pandas._libs.hashtable
# from C:\Users\Lucca\Downloads\iris_modular\lib\site-packages\pandas\_libs\hashtable.cp39-win_amd64.pyd
# by generator 1.147
# no doc

# imports
import builtins as __builtins__ # <module 'builtins' (built-in)>
import numpy as np # C:\Users\Lucca\Downloads\iris_modular\lib\site-packages\numpy\__init__.py

from .Factorizer import Factorizer

class UInt64Factorizer(Factorizer):
    # no doc
    def factorize(self, np_array, *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        Returns
                -------
                ndarray[intp_t]
        
                Examples
                --------
                Factorize values with nans replaced by na_sentinel
        
                >>> fac = UInt64Factorizer(3)
                >>> fac.factorize(np.array([1,2,3], dtype="uint64"), na_sentinel=20)
                array([0, 1, 2])
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    @staticmethod # known case of __new__
    def __new__(*args, **kwargs): # real signature unknown
        """ Create and return a new object.  See help(type) for accurate signature. """
        pass

    def __reduce__(self, *args, **kwargs): # real signature unknown
        pass

    def __setstate__(self, *args, **kwargs): # real signature unknown
        pass

    table = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    uniques = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default



