# Support Vector Machine 
## 1 classification margin
Distance from example $X_{i}$ to the separator is $r = \frac{|w^TX_{i}+b|}{||w||}$
Examples closest to the hyperplane are support vectors.
Margin $\rho$ of the separator is the distance between support vectors.
## 2 SVM optimization
![[SVM optimization.png]]
Support vectors are those points $x^{i}$ for which $\alpha_{i} \neq 0$
## 3 Hard margin classification
All instances be off the decision boundary
- Only works if the data is linearly separable
- Sensitive to outliers
## 4 Soft margin classification
Key idea:*balance between keeping the decision boundary as large as possible and limmiting the margin violations*
![[Soft margin SVM.png]]
$C$: Regularization parameter
- Small $C$ $\to$ large margin
- Large $C$ $\to$ narrow margin
- $C = \infty$ $\to$ hard margin
## 5 Non-linear SVMs
General idea: the original feature space can always be mapped to some higher-dimensional feature space where the training set is separable
### 5.1 Kernel method
- Inefficient features
	- Non-linearly separable data requires high dimensional representation
	- Might be prohibitively expensive to computer or score
- Key idea
	- Rewrite the algorithm so that we only with dot product $x^Tz$ of feature vectors
	- Replace the dot product $x^Tz$ with a kernel function $k(x, z)$
![[Kernel SVM.png]]
### 5.2 The kernel trick
If every data is mapped into high-dimensional space via some transformation: $\Phi: x\to \psi(x)$ ,the inner product becomes:
$$
K(x,z) = \psi(x)^{T}\psi(z)
$$
A kernel function implicitly maps data to a high-dimensional space (without the need to compute each $\psi$ explicitly)
Can be applied to many algorithms:
- Classification: SVM
- Regression: ridge regression
- Clustering: K-means
![[kernel example.png]]
### 5.3 RBF Kernel
RBF Kernel: $K(x,z) = \exp(-\gamma ||x-z||^{2})$
![[RBF model.png]]
# Naive Bayes
Generative v.s. discriminative
## 1 Naive Bayes assumption
Naive Bayes classifiers assume that the effect of a variable value on a given class membership is independent of the values of other variables.
$$
\begin{aligned}
&P(X_{1}, X_{2}|Y) = P(X_{1}|X_{2}, Y) P(X_{2}|Y) = P(X_1|Y)P(X_{2}|Y)\\
&P(X_{1}, \cdots ,X_{n}|Y) = \Pi_iP(X_{i}|Y)\\
&P(Y_{j}|X_{1}, \cdots , X_{N}) = \frac{P(Y_{j})\Pi_{i}P(X_{i}|Y_j）}{\sum\limits_{k}P(Y_{k})\Pi_{i}P(X_{i}|Y_{k})}
\end{aligned}
$$
## 2 Bernoulli Naive Bayes
![[BernoulliNB.png]]
![[BernoulliNBMLE.png]]
## 3 Naive Bayes Model 
- Suppose: Depends on the choice of event model $P(X_{k}|Y)$
- Model: Product of prior and the model $P(X,Y) = P(Y)\Pi_{k=1}^{K}P(X_{k}|Y)$
- Training: Find the class conditional MLE parameters
	- For $P(Y)$, we find the MLE using all the data
	- For each $P(X_{k}|Y)$, we condition on the data with the corresponding
- Classification: Find the class that maximizes the posterior
$$
\begin{aligned}
\hat y &= \arg \max_{y}p(y|x)\\
&=\arg \max_{y}p(x|y)\frac{p(y)}{p(x)}\\
&=\arg \max_{y}p(x|y)p(y)
\end{aligned}
$$
## 4 What's wrong with NB Assumption?
The features might not be independent
## 5 A shortcoming of MLE
可能会出现某些从来没见过的名词，即处理稀疏问题会出问题
$$
\begin{aligned}
D &= \{x(i), y(i)\}^{N}_{i=1}, \quad D' = D \cup \{(0,0), (0,1), (1,0), (1,1)\}\\
\theta_{k}^{0} &=\frac{1 + \sum_{i=1}^{N} \mathbb 1(y(i) = 0 \wedge x_{k}^{(i)} = 1)}{2 + \sum_{i=1}^{N} \mathbb 1(y(i) = 0)}
\end{aligned}
$$
## 6 MAP ??？
![[MAP.png]]
![[beta prior.png]]
## 7 Other NB Models
- Bernoulli Naive Bayes
	- For binary features
- Multinomial Naive Bayes
	- For integer features
- Gaussian Naive Bayes
	- For continuous features
