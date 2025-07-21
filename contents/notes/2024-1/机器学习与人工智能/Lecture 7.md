# Ensemble Models
Why it works:
- Diversity
- Image that we have 5 completely independent classifiers; each of them individually is correct 70% of the time, prob (we are right) = 0.837
Downsides:
- Increased complexity, more difficult to interpret
- Does not always guarantee performance improvements
## 1 Ensemble Methods
- Voting classifiers
- Stacking
- Bagging
- Boosting
## 2 **Voting Classifiers（投票分类器）**
   - **核心思想**：结合多个不同的分类器，通过投票的方式做出最终预测。
   - **类型**：
     - **硬投票（Hard Voting）**：每个分类器投票选择一个类别，最终选择得票最多的类别。
     - **软投票（Soft Voting）**：每个分类器输出类别的概率，最终选择概率平均最高的类别。
   - **优点**：简单易实现，能够减少过拟合。
   - **适用场景**：当多个分类器的性能相近且多样性较高时。

---

## 3 **Stacking（堆叠）**
   - **核心思想**：使用多个基模型（Base Models）的预测结果作为输入，训练一个元模型（Meta Model）来做出最终预测。
   - **步骤**：
     1. 训练多个基模型。
     2. 使用基模型的预测结果作为新特征。
     3. 训练元模型（如逻辑回归、随机森林等）来结合这些新特征。
   - **优点**：能够捕捉基模型之间的复杂关系，通常比单一模型表现更好。
   - **适用场景**：当基模型的预测结果具有互补性时。

---

## 4 **Bagging（袋装法）**
Parallel
   - **核心思想**：通过自助采样法（Bootstrap Sampling）生成多个子数据集，分别训练多个模型，然后结合这些模型的预测结果。
   - **代表算法**：随机森林（Random Forest）。
   - **优点**：减少方差，防止过拟合，特别适合高方差、低偏差的模型（如决策树）。
   - **适用场景**：当单个模型容易过拟合时。
### 4.1 Random Forest 
Definition
- Collection of unpruned Trees
- Rule to combine individual tree decisions
Purpose
- Improve prediction accuracy
- Improve efficiency
Principle
- Encouraging diversity among the tree
Solution: randomness
- Bagging
- Random decision trees
Details
- Build many random Trees
- Randomness: using only a random sample of m attributes to calculate each split
- For each tree:
	- Choose a different training sample
	- For each node, choose m random attributes and find the best split
	- Trees are often fully grown (not pruned)
- Predication: majority vote among all the trees 

---

## 5 **Boosting（提升法）**
Sequential
   - **核心思想**：通过顺序训练多个弱模型，每个模型尝试修正前一个模型的错误，最终结合所有模型的预测结果。
   - **代表算法**：AdaBoost、Gradient Boosting、XGBoost、LightGBM。
   - **优点**：能够显著提高模型性能，特别适合处理复杂的非线性问题。
   - **适用场景**：当单个模型表现较弱时，Boosting 可以逐步提升性能。
### 5.1 AdaBoosting
![[Adaboost algorithm.png]]
### 5.2 Gradient boosting
残差学习

---
# Unsupervised learning
## 1 Learning Paradigms
![[LearningParadigms.png]]
## 2 Goals
- To discover interesting things from the data
	- Is there an informative way to visualize the data
	- Can we discover subgroups among the variables
- Models
	- Clustering
		- K-means
		- DBSCAN
		- Hierarchical Clustering
	- Dimensionality reduction
		- PCA