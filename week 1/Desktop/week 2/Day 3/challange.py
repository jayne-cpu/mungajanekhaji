import math

class Circle:
    def __init__(self, radius):
        self._radius = radius  # private attribute

    # ---- Decorator: radius ----
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    # ---- Decorator: diameter ----
    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    # ---- Area ----
    def area(self):
        return math.pi * (self._radius ** 2)

    # ---- String representation ----
    def __str__(self):
        return f"Circle(radius={self._radius})"

    def __repr__(self):
        return f"Circle(radius={self._radius})"

    # ---- Add two circles ----
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add Circle to Circle")

    # ---- Greater than (>) ----
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    # ---- Equal (==) ----
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    # ---- Less than (<) for sorting ----
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    