# Clustering
Partition unlabeled data into groups (clusters)
Points within a cluster should be similar
Points in different clusters should be different
## 1 K-means
Each cluster has a cluster center, called centroid
K is specified by the user
### 1.1 K-means algorithm
![[K means algorithm.png]]
### 1.2 measure the distance
- Euclidean distance
- Manhattan distance
### 1.3 Stopping criterion
- No (or minimum) re-assignments of data points to different clusters
- No (or minimum) changes of centroids
- Minimum decrease int the sum of squared error
### 1.4 how to choose k
Elbow method
- Run k-means clustering on the dataset for a range of values of k
- For each value of k calculate the sum of squared errors
- If the line chart looks like an arm, then the elbow on the arm is the value of best k
### 1.5 Pros and Cons 
- Strengths
	- Simple: each to understand and to implement
	- efficient
- Weakness
	- The algorithm is sensitive to outliers
	- It terminates at a local optimum if SSE is used. The global is hard to find due to complexity.
	- Only simple cluster shapes
## 2 DBSCAN
Density-Based Spatial Clustering of Applications with Noise
Basic idea:
- Clusters are dense regions in the data space, separated by regions of lower object density
- A cluster is defined as a maximal set of density-connected points.
### 2.1 density definition
$\epsilon -$ Neighborhood -- objects within a radius of $\epsilon$ from an objective
$$
N_{\epsilon }(p):=\{q|d(p,d)\le \epsilon \}
$$
High density -- $\epsilon -$ Neighborhood of an object contains at least Minpts (settled by ourselves) of objects
### 2.2 Core, Border, Outlier 
Given $\epsilon$ and Minpts, categorize the objects into three exclusive groups
- Core point: has more than Minpts points within $\epsilon$ (there are points that at the interior of a cluster)
- Border point: has fewer than Minpts points within $\epsilon$, but is the neighborhood of a core point
- Noise point: any point that is neither a core nor a border point
### 2.3 Density-reachability
An object q is directly density-reachable from object p if p is a core object and q is in p's $\epsilon$ -neighborhood
### 2.4 algorithm
![[DBSCAN alogrithm.png]]
### 2.5 Pros and Cons 
- can learn arbitrary cluster shapes
- Can detect outliers
- Needs two parameters to adjust
## 3 Hierarchical Clustering
### 3.1 Types
- Divisive clustering
	- All objects in one cluster
	- Select a cluster and split it into two sub clusters
	- Until each leaf cluster contains only one object
- Agglomerative (bottom-up) clustering
	- Each object is a cluster
	- Merge two clusters which are most similar to each other
	- Until all objects are merged into a single cluster
### 3.2 Dendrogram
- A tree that shows how cluster are merged/split hierarchically
- Each node on the tree is a cluster; each leaf node is a Singleton cluster
- A clustering of the data objects is obtained by cutting the dendrogram at the desired level, then each connected component forms a cluster
### 3.3 Inter-cluster distance
#### 3.3.1 Min (single link)
Represented by the distance of the closest pair of data objects belonging to different clusters
Limitation: sensitive to noise/outliers
#### 3.3.2 Max (complete link)
Represented by the distance of the furtherest pair of data objects 
Strength: less sensitive to noise/outliers
Limitations: tends to break large clusters
#### 3.3.3 group average
Represented by the avg distance of all pairs of data objects belonging to different clusters
#### 3.3.4 centroid distance
Represented by the distance between the centers of the clusters
#### 3.3.5 Ward's method
Similarity of 2 clusters is based on the increase in squared error when 2 clusters are merged
Similar to group avg if distance between points is distance squared
Less susceptible to noise and outliers

## 4 PCA
### 4.1 Useful for
1. Visualization
2. More efficient use of resources
3. Statistical: fewer dimensions $\to$ better generalization
4. Noise removal (improved data quality)
5. Further processing by ML algorithms
### 4.2 Overview
- Is a technique that can simplify data
- Is a linear transformation that chooses a new coordinate system for the data set such that
	- Greatest variance by any projection of the data set comes to lie on the first axis
	- The second greatest variance on the second axis and so on
### 4.3 PCA : maximize the projection's variance
First find the direction of maximum variance, labeled "Component 1"
Component 2: orthogonal to the first direction & maximized variance