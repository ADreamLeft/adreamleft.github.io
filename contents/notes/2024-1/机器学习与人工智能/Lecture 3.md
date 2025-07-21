# Logistic Regression
Classification Algorithm
It predicts the probability of occurrence of an event by fitting data to logit function
Outcome: categorical variable
Linear classifier
- Data: inputs are continuous vectors of length M. Outputs are discrete. $$
D = \{x^{i,}y^i\}_{i=1}^{N}
$$
- Model: Logistic function applied to dot product of parameters with input vectors $$
p_{\theta }(y=1|x) = \frac{1}{1+\exp(-\theta ^{T}x)}
$$
- Learning: finds the parameters that minimize some objective function $$
\theta^{*}= \arg \min_{\theta } J(\theta )
$$
- Prediction: Output is the most probable class $$
\hat y = \arg \max_{y\in[0,1)}p_{\theta }(y|x)
$$
## 1 MLE
![[MLE.png]]
# Polynomial regression
## 1 Overfitting
when the model captures the noise in training data instead of the underlying structure.
## 2 Regularization
Goal: optimize some combination of fit and simplicity
- Penalize the magnitude of coefficients of features
- Minimize the error between predicted and actual examples
Ridge regression: 
- $L_2$ -norm: adds penalty  equivalent to square of the magnitude of coefficients
Lasso regression：
- $L_{1}$ -norm: adds penalty equivalent to absolute value of the magnitude of coefficients
### 2.1 Ridge regression
Recall: in a linear regression with the least square estimation
$$
RSS = \sum\limits_{i=1}^{N} (y^{i}-(\omega^{T}+b))^{2}
$$
Ridge regression
$$
RS =  \sum\limits_{i=1}^{N} (y^{i}-(\omega^{T}+b))^{2}+\alpha \sum\limits_{j=1}^D\omega_{j}^{2}
$$
后一项称为 Shrinkage penalty
$\alpha:$ tuning parameter 
- $\alpha =0$: A simple linear regreesion
- $\alpha = \infty$: Coefficients $\omega$ will be zero
- As $\alpha$ increases, the flexibility of the model fit decreases
### 2.2 Lasso
$L_1$ Regularization
$$
RSS = \sum\limits_{i=1}^{N}(y^{i}- (\omega^{T}x^{i}+b))^{2}+\alpha \sum\limits_{j=1}^{D}|\omega_j|
$$
Lasso combines some of the shrinking advantages of ridge with variable selection
The $L_1$ penalty has the effects of forcing coefficients estimates to be exactly equal to zero.
*Tip:* Techniques such as cross validation are recommended to determine which approach is better on a particular dataset
# Decision Trees
Inputs = Predictors = Independent Variables = Attributes
Output = Responses = Dependent Variables = Class labels = Target variables
Models = Classifiers
With a classification algorithm, we aim to build a model to predict what output will be obtained from given inputs.
## 1 Decision Stump
A decision stump is a machine learning learning model consisting of a one-level decision tree.
## 2 A Decision Tree
- Each internal node: test one attribute $x_m$
- Each branch from a node: selects one value for $x_m$
- Each leaf node: predict $y$, or $p(y|x)$
## 3 Build a Decision Tree
Key Problem: choosing which attribute to split a given set of examples
- Error rate
- Information gain
- Gini gain
- random
### 3.1 Gini 
Gini impurity: 
$$
G(D) = 1- \sum\limits_{k=1}^{K}[p(y=k)]^{2}
$$
Given an attribute:
$$
G(D, A) = \frac{|D_{1}|}{|D|}Gini(D_{1)}+ \frac{|D_{2}|}{|D|}Gini(D_{2})
$$
### 3.2 Entropy
$$
Entropy(D) = -p_{+}\log p_{+}- p_{-}\log p_{-}
$$
$p_{+}$ is the proportion of positive examples in D and $p_{-}$ is the proportion of negative examples in D.
If there are more than 2 classes:
$$
Entropy(D) = \sum\limits_{k=1}^{K}-p_{k}\log p_{k}
$$
### 3.3 Information Gain
$$
Gain(D, X_{m}) = Entropy(D) - \sum\limits_{v\in Values(X_{m})} \frac{|D_{v}|}{{|D|}}Entropy(D_{v})
$$
Partition of low entropy lead to high gain.
### 3.4 Gain Ratio 
$$
GainRatio(D, X_{m}) = \frac{Gain(D,X_m)}{IV(X_{m})}
$$
$$
IV(X_{m}) = - \sum\limits_{v\in Value(X_{m})} \frac{|D_{v}|}{|D|}\log_{2} \frac{|D_{v}|}{|D|}
$$
### 3.5 Comparison
![[ComparisonScores.png]]
## 4 The smallest decision tree that correctly classifies all of the training examples is best
### 4.1 Overfitting
- Too much noise in the training data
	- 2 examples have the same attributes/value pairs, but different classifications
	- Some values of attributes are incorrect because of errors in the data acquisition process or the preprocessing phase
	- The instance was labeled incorrectly
- Too much variance in the training data
	- Training data is not a representative sample of the instance space
	- Too little training data
### 4.2 How to avoid Overfitting
- Acquire more training data
- Remove irrelevant attributes (manual process - not always possible)
- Do not grow tree beyond some maximum depth
- Do not split if splitting criterion (e.g. information gain) is below some threshold
- Stop growing when data split is not statistically significant
- Grow the full tree, then post-prune
### 4.3 Pruning a tree
Prune: remove leaves and assign majority labels of the parent to all items
Basic approaches
- Pre-pruning: stop growing the tree at some point during construction when it is determined that there is not enough data to make reliable choices
	- Set a depth cut-off (maximum tree depth) a priori
	- Set a minimum number of data points for each node
	- Stop growing if a split is not statistically significant
- Post-pruning: grow the full tree and then remove nodes that seem not to have sufficient evidence
### 4.4 Post-pruning 
1. Split data into training set and validation set
2. Train a tree to classify training set as well as Possible
3. Do until further pruning reduces validation set accuracy
	1. For each internal tree node, consider making it a leaf node
	2. Choose the above pruning step that best improves error over validation set.
4. Produces smallest version of the most accurate pruned tree.
## 5 Pros and Cons 
Pros 
- Interpretable
- Efficient
- Can be used for classification and regression tasks
- compatible with categorical and real-valued features
Cons 
- Learned greedily: each split only consider the immediate impact on the splitting criterion
- Not guaranteed to find the smallest tree that achieves a training error rate of 0
- Liable to overfit
## 6 Bias and Variance
$$
\begin{aligned}
Err(X)&= \mathbb E[(y -\hat f(x))^{2}]\\
&=Bias + Variance +RandomError
\end{aligned}
$$
Tradeoff
![[Tradeoff.png]]
