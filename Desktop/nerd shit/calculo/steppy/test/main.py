# def solver(*args, exclude=[]):
#     arr = [*args]

#     if args:
#         arr = [algo for algo in arr if algo not in exclude]

#     return arr

from sympy.core import Mul, Add, Pow
from sympy.abc import *




class _Step:
    "Node step of the `Solution` data structure."
    children = []

    def __init__(self, data):
        self.data = data
    
    def __repr__(self):
        return "".format(self.data)

class SolutionTree:
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
    >>> steps = SolutionTree(x**2-x)
    "x**2-x"
    >>> steps.add_step(method_one, x*(x-1))
    "x**2-1*x -> x*(x-1) -> (x*x)-x"
    >>> steps.append_step(method_two, (x*x)-x)
    "x**2-1*x -> x*(x-1)"
    >>> steps.add_step(method_two, (x*x)-x)
    "x**2-x -> x*(x-1) -> (x*x)-x"
    "       -> (x*x)-x"
    >>> steps.__srepr__()
    "method_one(method_two(x**2-1*x))"
    "method_two(x*x)-x)"
    """

    def __repr__(self):
        return self._str_helper(self.step)

    def _str_helper(self, node, depth=0):
        result = "  " * depth + str(node) + "\n"
        for child in node.children:
            result += self._str_helper(child, depth + 1)
        return result
    
    def __init__(self, *args):
        self.step = _Step(data=args)
        self.current_step = self.step
    
    def add_step(self, *args):
        _Step(data=args)

    def append_step(self, *args):
        self.current_step.children.append(args)
        self.current_step = args


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
    >>> from steppy.core.decorators import s_add
    >>> from sympy.abc import x
    ... @s_add
    ... class method_one:
    ...     @staticmethod
    ...         def ssolve(self):
    ...             pass
    ... @s_add
    ... class method_two:
    ...     @staticmethod
    ...         def ssolve(self):
    ...             pass
    ... @s_add
    ... class method_three:
    ...     @staticmethod
    ...         def ssolve(self):
    ...             pass
    ... class Limit:
    ...     def __init__(self, expr):
    ...         self.expr = expr
    ...     def solve(self):
    ...         return [method_one, method_two, method_three]
    >>> Limit(x**2-x).solve()
    " x**2-x  ->  0**2-0  ->  0"
    "^^^^^^^^    ^^^^^^^^    ^^^"
    "Og expr     Sub expr  Fin expr 
    """

    def __srepr__(self):
        steps = ""
        children =  self._traverse_solution(self)
        for child in children:
            steps += (" " + str(child) + " -> ")
        else:
            steps += "\n"
            for child in children:
                steps += "^" * len(child)
                steps += "\t"
        return steps
    
    def _traverse_solution(self):
        if self._s_root is not None:
            return self._s_root.step.children

    def __init__(self, expr) -> None:
        self.expr = expr

        self._s_root = SolutionTree(expr)
        self.current_step = self._s_root
    
    def solve(self):
        e = self.expr
        
        for alg in solver():
            r = alg(e).ssolve()
            
            if r is not None:
                new_node = r

                self._current_step.append_data(alg, new_node)
                self.current_step = new_node
        
        solutions = self._traverse_solution()
        return solutions





def __Factorize():
    @staticmethod
    def ssolve():
        pass
    pass

def __Simplify():
    @staticmethod
    def ssolve():
        pass
    pass

def __Expand():
    @staticmethod
    def ssolve():
        pass
    pass

def __Serialize():
    @staticmethod
    def ssolve():
        pass
    pass

def __Substitute():
    @staticmethod
    def ssolve():
        pass
    pass

def add_methods(*args):
    def decorator(cls):
        for method_func in args:
            method_class = method_func()
            for attr_name in dir(method_class):
                if not attr_name.startswith("__"):
                    attr = getattr(method_class, attr_name)
                    setattr(cls, attr_name, attr)
        return cls
    return decorator

@add_methods(
    __Factorize,
    __Expand,
    __Serialize,
    __Substitute,
    __Simplify
)
class Limit(metaclass_=Sandwich):
    """Sample Class"""
    pass




if __name__ == '__main__':
    expr = x**2 - x

    obj = Limit(Sandwich(expr))

