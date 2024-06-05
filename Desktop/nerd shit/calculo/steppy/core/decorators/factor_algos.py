from .factorization import Factorize, Simplify, Expand, Serialize




def factor_algos(*args):
    arr = [Factorize, Simplify, Expand, Serialize]

    if arr is not None:
        arr = arr.remove(*args)

    return arr
