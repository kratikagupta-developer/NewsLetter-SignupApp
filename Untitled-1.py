# your code goes here
import collections
T = int(input())
print (T)
while T>0: 
    n,g,m = map(int,input().split())
    print (n,g,m)
    dict = collections.defaultdict(set)
    c = 1  ### guest no.
    t = 1
    li = [-1]
    while c <=g: 
        h,direction = input().split()
        print (h,direction)
        h = int(h)
        #h,direction = astr.split()
        li.append((h,direction))
        dict[h].add(c)
        print (dict)
        c+=1

    while t<=m: 
        c = 1
        temp_d = collections.defaultdict(set)
        while c<=g: 
            h,direction = li[c]
            h = int(h)
            if direction == 'C':
                end = (h+1)%n
            else: 
                end = (h-1)
                if end<=0: ####3
                    end = n+end
            temp_d[end].add(c)
            c+=1
        for i,v in temp_d.items(): 
                dict[i].union(v) 
                 ################
        t+=1
    
    dict2 = collections.OrderedDict()
    for i,v in dict.items():
        for elem in v: 
            if elem not in dict2: 
                dict2[elem]=1
            else: 
                dict2[elem]+=1
    li1 = []
    print (dict2)
    for i in range(g+1):
        if i+1 in dict2:
            li1.append(dict2[i+1]) 

    print (li1)   
    T-=1
