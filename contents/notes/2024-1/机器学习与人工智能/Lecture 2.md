# KNN
Classification Algorithm
Training: Store all the examples $(X_{train}, Y_{train})$
Prediction: $X^{(new)}$ 
	Let $X^{1}, \cdots, X^{k}$ be the $k$ most similar examples to $X^{new}$
	Use certain method to determine $y^{new}$ based on $(y^{1}, \cdots, y^{k})$
Keys:
1. A distance metric: 
	1. Euclidean distance $d(X^{j}, X^{k}) = \sqrt{\sum\limits_i(X_{i}^{j}- X_{i}^{k})^{2}}$
	2. Manhattan distance $d(X^{j}, x^{k}) = \sum\limits_i|X_{i}^{j}- X_{i}^{k}|$
2. Value of K
3. Aggregation of the classes of neighbor pints: Majority vote
Advantages:
- Very simple and intuitive
- The cost of the learning is zero
- No assumption about characteristics/distributions
- Works on both classification and regression tasks
Drawbacks:
- Computationally expensive when the dataset is very large
	- Need to calculate the compare distance from new example to all other examples
- Sensitive to ouliers
#  Classification v.s. Regression
*Classification* the goal is to predict a class label, which is a choice from a predefined list of possibilities.
*Regression* the goal is to predict a Continuous number, or a floating-point number (real number) in programming (math) terms.
## 1 Regression
Given the value of an input $X$, the output $Y$ belongs to the set of real value $R$
Evaluation: predict output accurately
Examples:
- Predict housing price
- Forecast precipitation
## 2 Linear Regression
Linear in parameters
Residuals: Residuals e = observed (y) - predicted (y)
Train a linear model 
- Goal: minimize the error
- Potential ways:
	- Sum (mean) of absolute errors 
	- Sum (mean) of squared errors
### 2.1 Function Approximation
Objective function: mean squared error
$$
J(\theta ) = \frac{1}{N} \sum\limits_{i=1}^{N}e_{i}^{2}= \frac{1}{N}\sum\limits_{i=1}^N(y^{i}-\theta^{T}x^{i})^{2}
$$
Solve the unconstrained optimization problem
- Closed formula
- Gradient descent
	- Stochastic Gradient Descent
$$
\hat \theta = \arg\min_{\theta} J(\theta)
$$ Test time: given a new $x$, make a prediction $\hat y=\hat \theta^{T}x$
### 2.2 Closed-form Solution (OLS)
Criteria: Minimize MSE
Solution $y_{i} = b + w_1x_{i}+\epsilon _i$
- $w_{1}= \frac{\sum\limits_{n}(x^{i}-\bar x)(y^{i}- \bar y)}{\sum\limits_{n}(x^{i}- \bar x)^{2}}$: slope
- $b = \bar y - w_{1}\bar x$
### 2.3 Gradient Descent
Random guessing
1. Pick a random $\theta$
2. Evaluate $J(\theta )$
3. Repeat steps 1 and 2 many times
4. Return $\theta$ that gives smallest $J(\theta )$
Linear regression
1. Objective function: MSE
2. Contour plot: each line labeled with MSE - lower means a better fit
3. Minimum correspond to parameters $(w, b) = (\theta _{1,}\theta _2)$ that best fit some training dataset.
#### 2.3.1 Algorithm
![[GD Algorithm.png]]
#### 2.3.2 learning rate
![[learning rate.png]]
#### 2.3.3 Pros and Cons 
Advantages
- Simple and often quite effective on ML tasks
- Often very scalable
Drawbacks
- Might find a local Minimum
- Only applies to smooth function (differentiable)
#### 2.3.4 SGD
![[SGD algorithm.png]]
- Gradient Descent: compute true gradient exactly from all N examples
- SGD: Approximate true gradient by gradient of one randomly chosen example
- Mini-Batch SGD: Approximate true gradient by the average gradient of K randomly chosen examples