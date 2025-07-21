# Hidden Markov Models
An HMM provides a joint distribution with an assumption of dependence between adjacent states
![[HMM structure.png]]
## 1 supervised learning for HMM 
HMM paras:
- Emission matrix: A, where $P(X_{t}=k|Y_{t}=j) = A_{jk}$
- Transition matrix: B, where $P(Y_{t}= k|Y_{t-1}=j)=B_{jk}$
Assumption: $y_{0} = START$
Generative story:
- $Y_{t} \sim Multinomial(B_{Y_{t-1}})$
- $X_{t}\sim Multinomial(A_{Y_{t}})$
Joint distribution:
$$
p(X, Y|y_{0})= \Pi_{t=1}^{T}p(x_{t}|y_{t})p(y_{t}|y_{t-1}) = \Pi_{t=1}^{T}A_{y_t,x_t}{B_{y_{t-1},y_{t}}}
$$
## 2 Unsupervised Learning for HMMs
## 3 Inference for HMMs
- Evaluation: Compute the probability of a given sequence of observations
- Viterbi Decoding: Find the most-likely sequence of hidden states, given a sequence of observations
- Learning: find the optimal parameters to maximize the probability of the sequence of observations
## 4 Evaluation
![[Evaluation.png]]
## 5 Viterbi Algorithm (Decoding)
![[Viterbi Algo.png]]
## 6 Topic Modeling
Topic modeling is recognizing the words from the topics present in the document or the corpus of data.
LDA: Dirichlet distribution represents the data such that the plotted data sums up to 1
# RNN 
A recurrent neural network can be thought of as multiple copies of the network, each passing a message to a successor.
## 1 Types
![[Types.png]]
## 2 structure
new hidden state: $h_{t}=\phi_{h}(W_{hx}x_{t}+W_{hh}h_{t-1}+b_{h})$
Output: $y_{t}=\phi_{y}(W_{yh}h_{t}+b_{y})$
## 3 Long short time memory
Motivation: 
- Standard RNNs have trouble learning long distance dependencies
- Vanishing/Exploding gradient problem for standard RNNs
LSTM is a RNN architecture. An LSTM cell stores a value (state) for either long or short time periods
### 3.1 LSTM units
![[LSTM units.png]]
### 3.2 GRU units
![[GRU units.png]]
## 4 Neural Machine Translation (NMT)
Seq 2 Seq model: Encoder-Decoder
## 5 Attention Mechanism
![[Attention.png]]
