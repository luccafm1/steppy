"""
Since SymPy does not currently offer universal support for
showing intermediary steps for its resolutions, StepPy
uses an implementation called "sandwich".

Sandwiches are the building blocks of StepPy. They
aim to make use of symbolic manipulation to turn
any factorization of any univariate polynomial into a
solution in natural language, without making use of more
process-intensive methods such as machine learning.


For this demonstration, we will be using SymPy's symbolic
manipulation as our main method.
"""

from .decorators.factor_algos import factor_algos
from sympy.core import Mul, Add, Pow
from sympy.abc import *




class _Step:
    """Node step of the `Solution` data structure."""
    children = []

    def __init__(self, data):
        self.data = data
    
    def __repr__(self):
        return "".format(self.data)

class Solution:
    """
    Data tree algorithm for stepped algebra.

    Explanation
    ===========

    Solutions will be stored in a `N-ary tree` data structure.\n
    Each tree will contain specified `nodes` that contain a step of\n
    the solution; in such a way that it can be easily interacted with.\n

    The starting node of the `Solution` is the `original expression`, from\n
    which the `Sandwich` algorithm branches off.\n

    Examples
    ========

    >>> from steppy import *
    >>> from sympy.abc import x
    >>> steps = Solution(x**2-x)
    "x**2-x"
    >>> steps.append_data(x*(x-1))
    "x**2-1*x -> x*(x-1)"
    >>> steps.append_data((x*x)-x)
    "(x*x)-x <- x**2-x -> x*(x-1)"
    """

    def __repr__(self):
        return "\n>".format(child for child in self.step.children)
    
    def __init__(self, child):
        self.step = _Step(data=child)
        self.current_step = self.step
    
    def append_data(self, new_child):
        new_step = _Step(data=new_child)
        self.current_step.children.append(new_step)
        self.current_step = new_step

@factor_algos
class Sandwich:
    """
    Standard Sandwich algorithm for StepPy.

    Explanation
    ===========

    The Sandwich algorithm is a generic solver algorithm that \n
    must be the `superclass` of any class that it aims to solve \n
    for.
    
    Examples
    ======== 

    If we wish to implement solution solving for a `Limit`\n
    solving algorithm for instance, we could do: 

    >>> from steppy import *
    >>> from sympy.abc import x
    >>> class Limit(Sandwich):
    ...     # Limit implementation
    ...     def __init__(self, expr):
    ...         super().__init__()
    ...         self.expr = expr
    ...     def solve(self):
    ...         . . .
    ...         return result
    >>> Limit(x**2-x)
    " x**2-x  ->  0**2-0  ->  0"
    "^^^^^^^^    ^^^^^^^^    ^^^"
    "Og expr     Sub expr  Fin expr 
    """
    
    def _traverse_solution(self):
        if self._s_root is not None:
            return self._s_root.step.children

    def __init__(self, expr) -> None:
        self.expr = expr
        self._s_root = Solution(expr)
        self.current_step = self._s_root
    
    def solve(self):
        e = self.expr
        
        for alg in factor_algos():
            r = alg(e)
            
            if r is not None:
                new_node = r
                self._current_step.append_data(new_node)
                self.current_step = new_node
        
        solutions = self._traverse_solution()
        return solutions


    



