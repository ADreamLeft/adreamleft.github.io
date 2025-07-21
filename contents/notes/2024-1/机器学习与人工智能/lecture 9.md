# Perceptron
Linear regression:
$$
\begin{aligned}
&y = h_{\theta }(x)=\sigma (\theta ^{T}x)\\
&where ~\sigma (a) =a
\end{aligned}
$$
Logistic regression:
$$
\begin{aligned}
& y = h_{\theta }(x) = \sigma (\theta ^{T}x)\\
&where ~ \sigma (a) = \frac{1}{1+\exp(-a)}
\end{aligned}
$$
Perceptron:
$$
\begin{aligned}
&y = h_\theta (x) = \sigma (\theta ^{T}x)\\
&where \sigma (a) = sgn(a)
\end{aligned}
$$
## 1 Architecture
\# of units (neurons) per hidden layer (width)
\# of hidden layers (depth)
Type of activation function (nonlinearity)
## 2 How many layers should we Use?
-  Theoretical Answer
	- **Cybenko (1989):**  For any continuous function $g (x).$ there exists a 1-hidden layer neural network $h_{\theta } (x)$ such that $|h_{\theta } (x) - g (x)| < \epsilon$ for all $x$, assuming sigmoid activation functions.
- Empirical Answer
	- **Before 2006:**  "Deep networks are too hard to train."
	- **After 2006:** "Deep networks are easier to train than shallow networks for many problems."
## 3 Activation function:
Sigmoid
Tanh
ReLU
Softmax
## 4 Objective functions for NNs 
Quadratic loss
Cross-entropy
## 5 Backpropagation algorithm
Backpropagation is a repeated application of the chain rule from Calculus course.
- Training neural nets 
- Loop until convergence
	- For each example n
	- Given input, propagate activity forward $x\to h\to l$ (forward pass)
	- Propagate Gradient Backward (backward pass)
	- Update each weight (via gradient descent)
## 6 Deep learning
