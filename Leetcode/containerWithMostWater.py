# first solution times out because bigO is n^2
class Solution:
    def maxArea(self, height: List[int]) -> int:
        biggest_yet = 0
        for i in range(len(height)):
            for j in range(i+1, len[height]):
                current = self.calcArea(height, i, j)
                if current > biggest_yet:
                    biggest_yet = current
        return biggest_yet
              

    def calcArea(self, height, i, j):
        height_of_box = min(height[i],height[j])
        width_of_box = j-i
        return width_of_box * height_of_box

# optimizing
# sweaping area algorithm: use pointers: one beg of array one at the endmove the one that is on the smaller element
# 
