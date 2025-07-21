# Characteristics of RL
- RL is learning how to map states to actions, so as to maximize a numerical Reward over time.
- Unlike other forms of learning, it is a multistage decision-making process (often Markovian).
- Actions may affect not only the immediate reward but also subsequent rewards (Delayed effect)
# Elements of RL
- Environment: 
	- Physical world in which the agent operates.
- State:   
	- Current situation of the agent.
- A policy:   
	- A map from state space to action space.  
	- May be stochastic.
- A reward function:  
	- It maps each state (or, state-action pair) to a real number, called reward.
- A value function:  
	- Value of a state (or, state-action pair) is the total expected reward, starting from that state (or, state-action pair).
# The precise goal
- Goal: To find a policy that maximizes the Value function.
- Approaches: There are different approaches to achieve this goal in various situations.
	- Markov Decision Process (MDP):  Methods like value iteration and policy iteration require knowledge of the state transition and reward function.
	- Q-Learning:  Used when the reward and transition functions are unknown.
# Markov Decision process
## 1 Components:
- $S$: set of possible states
- $A$: set of possible actions
- $R(s, a)$: reward function
- $P(s' \mid s, a) = P(S_{t+1} = s' \mid S_t = s, A_t = a)$: state transition probabilities
- Markovian Assumption:
$$
  P(S_{t+1} \mid S_t, A_t, S_{t-1}, A_{t-1}, \dots, S_1, A_1) = P(S_{t+1} \mid S_t, A_t)
$$
## 2 Goal
![[RL goal.png]]
## 3 Value function
Bellman Equation:
$$
V^{\Pi}(s) = R(s, a) + \gamma \sum_{s' \in S} P(s' \mid s, a) V^{\Pi}(s')
$$
## 4 Value iteration
![[value iteration.png]]
## 5 Exploration and Exploitation
- Exploration: find more information
- Exploitation: maximize the reward by exploiting already known information
# Q-Learning
Motivation: maybe we don't know $R(s,a)$ or $p(s'\mid s, a)$
## 1 Motivation
![[motivation.png]]
## 2 Algorithm
![[Qlearning Algorithm.png]]
## 3 $\epsilon -$ greedy variant
![[ep-greedy.png]]
