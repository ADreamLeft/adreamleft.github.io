# Deep Learning
## 1 Hard to find optimal network parameters
![[Hard to find optimal paras.png]]
## 2 Early Stopping
- **Evaluate the model on a validation set**  
  At regular intervals (e.g., every 50 steps).

- **Save a “winner” snapshot**  
  If it outperforms previous “winner” snapshots.

- **Count the number of steps**  
  Since the last “winner” snapshot was saved, and interrupt training when this number reaches some limit.

- **Restore the last “winner” snapshot**.
## 3 Regulation
New loss function
$$
L_{1}(\theta ) = L(\theta )+ \lambda \frac{1}{2}||\theta ||_{2}
$$
$l_2:||\theta ||_{2} =\sqrt{w_{1}^{2}+w_{2}^{2}+\cdots}$ 
$l_{1}:||\theta ||_{2} = |\omega_1|+|\omega|+\cdots$
## 4 Dropout
Each time before updating the parameters, each neuron has p% to dropout.
- Training: thinner
- Testing: 
	- No dropout
	- If the dropout rate is $p\%$, all the weights times $(1-p\%)$
Dropout is a kind of ensemble
# CNN 
- Replace matrix multiplication in neural nets with convolution.
- Parameter sharing: Parameter sharing scheme is used in Convolutional Layers to control the number of parameters.
- Image processing: Not connected to every single pixel in the input image, but only to pixels in their receptive fields.
## 1 Convolutional layer
filters' paras are to be learned
## 2 Padding
- Padding = "VALID", i.e. without padding
- Padding = "SAME", i.e. with zero padding
$$
O = \frac{W-K+2P}{S}+1
$$
O: output height
W: input height
K: filter size
P: padding
S:stride
## 3 Pooling layer
Its function is to progressively reduce the spatial size of the representation to reduce the amount of parameters and computation in the network, and hence to also control Overfitting

also control overfitting.
Max pooling: chose the max in a window
Mean pooling: take the average
## 4 Popular CNN Architecture
![[LeNet.png]]
### 4.1 PPT 32 how many parameters???