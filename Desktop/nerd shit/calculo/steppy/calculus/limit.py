from steppy.core import Sandwich

def _filter(*args):
    """
    Helper function to determine whether implicit differentiation
    is to be utilized in solving limits.

    Arguments passed are to be taken as algorithms to filter out
    the solution.
    """
    return args

class Subs:
    """
    Substitution class for any solver operation.

    Explanation
    ===========

    
    
    """
 
class Limit(_filter):
    algos = []
    def __init__(self):
        for func in dir(self):
            if callable(getattr(self, func)) and not (func.startswith("__") or func.startswith("_")) \
            and func != "solve" and func not in _filter:
                self.algos.append(getattr(self, func))