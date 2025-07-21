# Model selection
## 1 Cross validation
![[Train a model.png]]
![[Select a model.png]]
Limitations of single partition: we may not have enough data to have both sufficiently large training and validation set:
- A large validation set: more reliable estimate of prediction accuracy
- A large training set: more representative for learning process
Solution: Cross Validations
- Sometime also called N-fold Cross validation (N: number of folds used)
## 2 Grid Search
Approaches to hyperparameter tuning:
- Grid search
- Random search
- Bayesian optimization
Grid Search with CV
- Manually set a grid of discrete hyperparameter values.
- Set a metric for scoring model performance
- Search exhaustively through the grid
- For each set of hyperparameters, evaluate each model's CV score
- The optimal hyperparameters are those of the model achieving the best CV score.
Hyperparameter tuning
- Computationally expensive
- Sometime leads to very slight improvement
# Model Evaluation
## 1 Accuracy
Number of correct predictions/Data size
Potential issues:
- There is a large class skew
- There are differential misclassification costs
## 2 Confusion Matrix
![[Two class problem.png]]
Additional metrics
- Precision: 
	- % of those cases the model classified as positive that are correct
	- $\frac{TP}{TP+FP}$
	- Measures model's accuracy for those it classified as the class of interest
- Recall (sensitivity)
	- % of actual positive class (class of interest) correctly classified
	- $\frac{TP}{TP+FN}$
	- Measures how well the model detect the class of interest
- Specificity
	- $\frac{TN}{TN+FP}$
	- Measures how well the model rules out the other class correctly
- $F_1$ score: $2\times Precision\times recall/(Precision + recall)$
Precision-Recall curve
![[Precision-Recall curve.png]]
## 3 ROC 
TP-rate V.S. FP-rate
AUC (Area under the ROC curve): the larger, the stronger the model is.